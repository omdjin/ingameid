import GridItem from "components/gridItem";
import DynamicLatestBlog from "components/latest-blog/dynamic";
import { mainContent, gridContainer, gridRow } from "styles/home.css";
import { flexGrow } from "styles/misc.css";
import chunk from "utils/chunk";

export default function Home({ chunkProducts }) {
  return (
    <>
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
      <DynamicLatestBlog />
    </>
  );
}

export async function getServerSideProps({ res }) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?_embed=wp:featuredmedia&categories=1`;
  const responsePosts = await fetch(url);
  const posts = await responsePosts.json();
  const chunkProducts = chunk(posts, 3);

  // cache homepage for 3600 seconds (1 hour)
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=60"
  );

  return {
    props: {
      chunkProducts: (chunkProducts || []).reverse()
    }
  };
}
