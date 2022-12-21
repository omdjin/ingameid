import GridItem from "components/gridItem";
import { mainContent, gridContainer, gridRow } from "styles/home.css";
import { flexGrow } from "styles/misc.css";
import chunk from "utils/chunk";

export default function Home({ chunkProducts }) {
  return (
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
  );
}

export async function getServerSideProps(context) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?_embed=wp:featuredmedia&categories=1`;
  const res = await fetch(url);
  const posts = await res.json();
  const chunkProducts = chunk(posts, 3);

  return {
    props: {
      chunkProducts: (chunkProducts || []).reverse()
    }
  };
}
