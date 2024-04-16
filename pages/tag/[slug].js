import Head from "next/head";
import { HOSTNAME, SITE_NAME } from "constants/index";
import PostCard from "components/postCard";
import { container, row } from "styles/tag.css";

export default function TagPage({ tagDetail, blogs }) {
  const pageTitle = `Tag: ${tagDetail.name} - ${SITE_NAME}`;
  const metaUrl = `${HOSTNAME}/tag/${tagDetail.slug}`;
  const parsedExcerpt = `Baca artikel-artikel di ${SITE_NAME} dengan tag ${tagDetail.name}.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={parsedExcerpt} />
        <link rel="canonical" href={metaUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={parsedExcerpt} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={parsedExcerpt} />
        <meta name="twitter:site" content="@ratriretno" />
        <meta name="twitter:creator" content="@ratriretno" />
      </Head>
      <div className={container}>
        <div>
          <h1>Tag: {tagDetail.name}</h1>
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
  const tagDetail = tags[0];

  if (!tagDetail) {
    return {
      notFound: true,
    };
  }

  const urlPosts = `${HOST}/posts?_embed=wp:featuredmedia&tags=${tagDetail.id}`;
  const responsePosts = await fetch(urlPosts);
  const blogs = await responsePosts.json();

  return {
    props: {
      tagDetail,
      blogs,
    },
  };
}
