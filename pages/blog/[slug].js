import Head from "next/head";
import parse from "html-react-parser";

import removeHTMLTags from "utils/removeHTMLTags";
import { mainContent, bodyStyle } from "styles/blog.css";

export default function Product({ taxonomies, product }) {
  const title = product.title.rendered;
  const metaTitle = `${title} - Ingame.id`;
  const parsedMetaTitle = parse(metaTitle);
  const parsedExcerpt = removeHTMLTags(product.excerpt.rendered).replace(
    /\n/g,
    ""
  );
  const body = product.content.rendered;

  return (
    <article className={mainContent}>
      <Head>
        <title>{parsedMetaTitle}</title>
        <meta name="description" content={parsedExcerpt} />
        <meta property="og:title" content={parsedMetaTitle} />
        <meta property="og:description" content={parsedExcerpt} />
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
  );
}

export async function getServerSideProps({ params, res }) {
  const { slug } = params;

  const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?_embed=wp:term&categories=10&slug=${slug}`;
  const responsePosts = await fetch(url);
  const posts = await responsePosts.json();
  const product = posts[0];

  if (!product) {
    return {
      notFound: true
    };
  }

  const wpTerm = product._embedded["wp:term"];

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

  // cache post for 900 seconds (15 minutes)
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=900, stale-while-revalidate=60"
  );

  return {
    props: {
      taxonomies: taxonomies || {},
      product
    }
  };
}
