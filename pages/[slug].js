import Head from "next/head";
import parse from "html-react-parser";

import { HOSTNAME, SITE_NAME } from "constants/index";
import removeHTMLTags from "utils/removeHTMLTags";
import { mainContent, titleStyle, bodyStyle } from "styles/blog.css";

export default function Page({ pageData, metaDesc }) {
  const title = pageData.title.rendered;
  const metaTitle = `${title} - ${SITE_NAME}`;
  const parsedMetaTitle = parse(metaTitle);
  const imageUrl = `${HOSTNAME}/static/img/logo.png`;
  const body = pageData.content.rendered;
  const metaUrl = `${HOSTNAME}/${pageData.slug}`;

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
        </Head>
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className={titleStyle}
        />
        <div className={bodyStyle} dangerouslySetInnerHTML={{ __html: body }} />
      </article>
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const HOST = process.env.NEXT_PUBLIC_API_HOST;
  const { slug } = params;

  const url = `${HOST}/pages?slug=${slug}`;
  const responsePages = await fetch(url);
  const pages = await responsePages.json();
  const pageData = pages[0];

  const env = process.env.NODE_ENV;

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  // Rich Snippets
  const parsedExcerpt = removeHTMLTags(pageData.excerpt.rendered)
    .replace(/\n/g, "")
    .replace("[&hellip;]", "...");
  const yoastDesc = pageData?.yoast_head_json?.description;
  const metaDesc = yoastDesc || parsedExcerpt;

  if (env !== "development") {
    // cache post for 900 seconds (15 minutes)
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=900, stale-while-revalidate=60"
    );
  }

  return {
    props: {
      pageData,
      metaDesc,
    },
  };
}
