import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import parse from "html-react-parser";

import LatestBlogView from "components/latest-blog/index";
import { HOSTNAME, SITE_NAME } from "constants/index";
import getPostImage from "utils/getPostImage";
import getTaxonomies from "utils/getTaxonomies";
import removeHTMLTags from "utils/removeHTMLTags";
import { mainContent, bodyStyle } from "styles/blog.css";

export default function BlogPost({
  blogs,
  blogPost,
  ldJson,
  parsedExcerpt,
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
          <meta name="description" content={parsedExcerpt} />
          <link rel="canonical" href={metaUrl} />
          <meta property="og:title" content={parsedMetaTitle} />
          <meta property="og:description" content={parsedExcerpt} />
          <meta property="og:url" content={metaUrl} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:locale" content="id_ID" />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={parsedMetaTitle} />
          <meta name="twitter:description" content={parsedExcerpt} />
          <meta name="twitter:image" content={imageUrl} />
          <meta name="twitter:site" content="@ratriretno" />
          <meta name="twitter:creator" content="@ratriretno" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: ldJson }}
          />
        </Head>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
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
  const blogPost = posts[0];

  if (!blogPost) {
    return {
      notFound: true,
    };
  }

  const wpTerm = blogPost._embedded["wp:term"];

  const taxonomies = getTaxonomies(wpTerm);

  const postImage = getPostImage(blogPost);

  // get latest blogs randomly
  const urlBlogs = `${HOST}/posts?_embed=wp:term&categories=10&page=1&per_page=5&orderby=rand`;
  const responseBlogs = await fetch(urlBlogs);
  const blogs = await responseBlogs.json();

  // Rich Snippets
  const postTitle = removeHTMLTags(blogPost.title.rendered).replace(/\n/g, "");
  const parsedExcerpt = removeHTMLTags(blogPost.excerpt.rendered)
    .replace(/\n/g, "")
    .replace("[&hellip;]", "...");
  const authorAvatar =
    "https://secure.gravatar.com/avatar/6e9b17ce6105c1f6725b6bd35c158b4b?s=96&d=mm&r=g";
  const ldJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NewsMediaOrganization", "Organization"],
        id: `${HOSTNAME}/#organization`,
        name: SITE_NAME,
        url: HOSTNAME,
        sameAs: [
          "https://www.instagram.com/id.ingame/",
          "https://www.tiktok.com/@tkpd.nightwish",
        ],
        logo: {
          "@type": "ImageObject",
          id: `${HOSTNAME}/#logo`,
          url: "https://ingame.id/static/icons/android-icon-192x192.png",
          contentUrl: "https://ingame.id/static/icons/android-icon-192x192.png",
          caption: SITE_NAME,
          inLanguage: "id",
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "NewsArticle",
        headline: postTitle,
        image: [postImage.url],
        datePublished: `${blogPost.date_gmt}+07:00`,
        dateModified: `${blogPost.modified_gmt}+07:00`,
        articleSection: taxonomies["post_tag"]
          .map((item) => item.name)
          .join(", "),
        author: [
          {
            "@type": "Person",
            name: "Ingame",
            url: HOSTNAME,
            image: {
              "@type": "ImageObject",
              id: authorAvatar,
              url: authorAvatar,
              caption: "Ingame",
              inLanguage: "id",
            },
            worksFor: {
              "@id": `${HOSTNAME}/#organization`,
            },
          },
        ],
        copyrightYear: "2024",
        copyrightHolder: {
          "@id": `${HOSTNAME}/#organization`,
        },
        publisher: {
          "@id": `${HOSTNAME}/#organization`,
        },
        description: parsedExcerpt,
        name: postTitle,
      },
    ],
  });

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
      parsedExcerpt,
      taxonomies: taxonomies || {},
    },
  };
}
