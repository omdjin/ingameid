import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import parse from "html-react-parser";

import LatestBlogView from "components/latest-blog/index";
import { HOSTNAME, SITE_NAME } from "constants/index";
import {
  normalizePostDetail,
  normalizePostWidget,
} from "utils/normalizePostData";
import { mainContent, titleStyle, bodyStyle } from "styles/blog.css";

export default function BlogPost({
  blogs,
  blogPost,
  ldJson,
  metaDesc,
  postImage,
  taxonomies,
}) {
  const title = blogPost.title.rendered;
  const metaTitle = `${title} - ${SITE_NAME}`;
  const parsedMetaTitle = parse(metaTitle);
  const imageUrl = postImage.url;
  const body = blogPost.content.rendered;
  const metaUrl = `${HOSTNAME}/blog/${blogPost.slug}`;

  return (
    <>
      <article className={mainContent}>
        <Head>
          <title>{parsedMetaTitle}</title>
          <meta name="description" content={metaDesc} />
          <link rel="canonical" href={metaUrl} />
          <meta property="og:title" content={parsedMetaTitle} />
          <meta property="og:description" content={metaDesc} />
          <meta property="og:url" content={metaUrl} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:locale" content="id_ID" />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={parsedMetaTitle} />
          <meta name="twitter:description" content={metaDesc} />
          <meta name="twitter:image" content={imageUrl} />
          <meta name="twitter:site" content="@ratriretno" />
          <meta name="twitter:creator" content="@ratriretno" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: ldJson }}
          />
        </Head>
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className={titleStyle}
        />
        <div className={bodyStyle} dangerouslySetInnerHTML={{ __html: body }} />

        {taxonomies["post_tag"].length ? (
          <p>
            Post Tag:{" "}
            <i>
              <strong>
                {taxonomies["post_tag"].map((tag, index) => {
                  return (
                    <Fragment key={tag.id}>
                      <Link href={`/tag/${tag.slug}`}>{tag.name}</Link>
                      {index + 1 < taxonomies["post_tag"].length && `, `}
                    </Fragment>
                  );
                })}
              </strong>
            </i>
          </p>
        ) : null}
      </article>
      <LatestBlogView data={blogs} title="Artikel Lainnya" />
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const HOST = process.env.NEXT_PUBLIC_API_HOST;
  const { slug } = params;

  const url = `${HOST}/posts?_embed=wp:featuredmedia,wp:term&categories=10&slug=${slug}`;
  const responsePosts = await fetch(url);
  const posts = await responsePosts.json();
  const _blogPost = posts[0];

  if (!_blogPost) {
    return {
      notFound: true,
    };
  }

  const { blogPost, ldJson, taxonomies, postImage, metaDesc } =
    normalizePostDetail(_blogPost);

  // get latest blogs randomly
  const urlBlogs = `${HOST}/posts?_embed=wp:featuredmedia,wp:term&categories=10&page=1&per_page=6&orderby=rand`;
  const responseBlogs = await fetch(urlBlogs);
  const _blogs = await responseBlogs.json();
  const blogs = normalizePostWidget(_blogs);

  // cache post for 900 seconds (15 minutes)
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=900, stale-while-revalidate=60"
  );

  return {
    props: {
      blogs,
      ldJson,
      postImage,
      blogPost,
      metaDesc,
      taxonomies,
    },
  };
}
