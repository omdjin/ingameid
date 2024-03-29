import Head from "next/head";
import GridItem from "components/gridItem";
import LatestBlogView from "components/latest-blog/index";
import { HOSTNAME } from "constants/index";
import { mainContent, gridContainer, gridRow } from "styles/home.css";
import { flexGrow } from "styles/misc.css";
import chunk from "utils/chunk";

export default function Home({ blogs, chunkProducts }) {
  return (
    <>
      <Head>
        <link rel="canonical" href={`${HOSTNAME}`} />
        <meta property="og:image" content={`${HOSTNAME}/static/img/logo.png`} />
      </Head>
      <section className={mainContent}>
        <div>
          <article className={flexGrow}>
            <div>
              <div className={gridContainer}>
                {chunkProducts.map((producst, index) => (
                  <div key={index} className={gridRow}>
                    {producst.map((product) => (
                      <GridItem
                        key={product.id}
                        detail={product}
                        source="homepage"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
      <LatestBlogView data={blogs} />
    </>
  );
}

export async function getServerSideProps({ res }) {
  const HOST = process.env.NEXT_PUBLIC_API_HOST;
  // get products
  const urlProduct = `${HOST}/posts?_embed=wp:featuredmedia&categories=1`;
  const responseProducts = await fetch(urlProduct);
  const products = await responseProducts.json();
  const chunkProducts = chunk(products, 3);

  // get latest blogs
  const urlBlogs = `${HOST}/posts?_embed=wp:term&categories=10&page=1&per_page=5`;
  const responseBlogs = await fetch(urlBlogs);
  const blogs = await responseBlogs.json();

  // cache homepage for 3600 seconds (1 hour)
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=60"
  );

  return {
    props: {
      blogs,
      chunkProducts: (chunkProducts || []).reverse(),
    },
  };
}
