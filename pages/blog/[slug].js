import Head from "next/head";
import parse from "html-react-parser";

import LatestBlogView from "components/latest-blog/index";
import { HOSTNAME, SITE_NAME } from "constants/index";
import removeHTMLTags from "utils/removeHTMLTags";
import { mainContent, bodyStyle } from "styles/blog.css";

export default function BlogPost({ blogs, blogPost, imageUrl, taxonomies }) {
  const title = blogPost.title.rendered;
  const metaTitle = `${title} - Ingame.id`;
  const parsedMetaTitle = parse(metaTitle);
  const parsedExcerpt = removeHTMLTags(blogPost.excerpt.rendered).replace(
    /\n/g,
    ""
  );
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
        </Head>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div className={bodyStyle} dangerouslySetInnerHTML={{ __html: body }} />

        {taxonomies["post_tag"] ? (
          <p>
            Post Tag:{" "}
            <i>
              <strong>{taxonomies["post_tag"].name}</strong>
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
      notFound: true
    };
  }

  const wpTerm = blogPost._embedded["wp:term"];

  const taxonomies = wpTerm.reduce((accumulator, currentValue) => {
    if (!currentValue.length) {
      return accumulator;
    }

    let taxo = { ...accumulator };

    currentValue.forEach((item) => {
      taxo[item.taxonomy] = {
        id: item.id,
        name: item.name,
        slug: item.slug,
        taxonomy: item.taxonomy
      };
    });

    return { ...taxo };
  }, {});

  const featuredmedia = blogPost._embedded["wp:featuredmedia"]?.[0];
  let imageUrl = "";

  if (featuredmedia) {
    const mediaDetails = featuredmedia.media_details;
    const mediaSizes = mediaDetails.sizes;
    imageUrl = mediaSizes.large
      ? mediaSizes.large.source_url
      : featuredmedia.source_url;
  } else {
    const imageUrl =
      "https://ingame.farizal.id/wp-content/uploads/GPX-Mayy.webp";
  }

  // get latest blogs randomly
  const urlBlogs = `${HOST}/posts?_embed=wp:term&categories=10&page=1&per_page=5&orderby=rand`;
  const responseBlogs = await fetch(urlBlogs);
  const blogs = await responseBlogs.json();

  // cache post for 900 seconds (15 minutes)
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=900, stale-while-revalidate=60"
  );

  return {
    props: {
      blogs,
      imageUrl,
      blogPost,
      taxonomies: taxonomies || {}
    }
  };
}
