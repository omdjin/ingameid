import Head from "next/head";
import GridItem from "components/gridItem";
import LatestBlogView from "components/latest-blog/index";
import { HOSTNAME } from "constants/index";
import { mainContent, gridContainer, gridRow } from "styles/home.css";
import { flexGrow } from "styles/misc.css";
import chunk from "utils/chunk";
import {
  normalizeProducts,
  normalizePostWidget,
} from "utils/normalizePostData";

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
      <LatestBlogView data={blogs} usePrioImage />
    </>
  );
}

export async function getServerSideProps({ res }) {
  const HOST = process.env.NEXT_PUBLIC_API_HOST;
  // get products
  const urlProduct = `${HOST}/posts?_embed=wp:featuredmedia&categories=1`;
  const responseProducts = await fetch(urlProduct);
  const _products = await responseProducts.json();
  const products = normalizeProducts(_products);
  const chunkProducts = chunk(products, 3);

  // get latest blogs
  const urlBlogs = `${HOST}/posts?_embed=wp:featuredmedia,wp:term&categories=10&page=1&per_page=6`;
  const responseBlogs = await fetch(urlBlogs);
  const _blogs = await responseBlogs.json();
  const blogs = normalizePostWidget(_blogs);

  // cache post for 900 seconds (15 minutes)
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=900, stale-while-revalidate=900"
  );

  return {
    props: {
      blogs,
      chunkProducts: (chunkProducts || []).reverse(),
    },
  };
}
