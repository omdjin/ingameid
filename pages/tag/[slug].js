import Head from "next/head";
import { HOSTNAME, SITE_NAME } from "constants/index";
import PostCard from "components/postCard";
import { heading, container, row } from "styles/tag.css";
import {
  normalizeTagDetail,
  normalizePostWidget,
} from "utils/normalizePostData";

export default function TagPage({ tagDetail, blogs }) {
  const pageTitle = `Tag: ${tagDetail.name} - ${SITE_NAME}`;
  const metaUrl = `${HOSTNAME}/tag/${tagDetail.slug}`;
  const tagDesc = tagDetail.description;
  const parsedExcerpt = `Baca artikel-artikel di ${SITE_NAME} dengan tag ${tagDetail.name}.`;
  const metaDesc = tagDesc || parsedExcerpt;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={metaUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:site" content="@ratriretno" />
        <meta name="twitter:creator" content="@ratriretno" />
      </Head>
      <div className={container}>
        <div>
          <h1 className={heading}>{tagDetail.name}</h1>
          <p style={{ padding: "0 16px" }}>{tagDesc}</p>
        </div>
        <div>
          <div className={row}>
            {blogs.map((blogPost) => {
              return <PostCard detail={blogPost} key={blogPost.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const HOST = process.env.NEXT_PUBLIC_API_HOST;
  const { slug } = params;

  const detailApiUrl = `${HOST}/tags?slug=${slug}`;
  const responseTag = await fetch(detailApiUrl);
  const tags = await responseTag.json();
  const _tagDetail = tags[0];

  if (!_tagDetail) {
    return {
      notFound: true,
    };
  }
  const tagDetail = normalizeTagDetail(_tagDetail);
  const urlPosts = `${HOST}/posts?_embed=wp:featuredmedia&tags=${tagDetail.id}`;
  const responsePosts = await fetch(urlPosts);
  const _blogs = await responsePosts.json();
  const blogs = normalizePostWidget(_blogs);

  // cache post for 900 seconds (15 minutes)
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=900, stale-while-revalidate=900"
  );

  return {
    props: {
      tagDetail,
      blogs,
    },
  };
}
