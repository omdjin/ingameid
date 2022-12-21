import Head from "next/head";

import Contact from "components/contact";
import {
  mainContent,
  ltEKP,
  articleStyle,
  headerStyle,
  imageHolder,
  imageContainer,
  imageOverflow,
  imageStyle,
  contentWrap
} from "styles/products.css";

export default function Product({ brand, product }) {
  const title = product.title.rendered;
  const metaTitle = `Jual ${title} - Ingame.id`;
  const excerpt = product.excerpt.rendered;
  const body = product.content.rendered;

  const featuredmedia = product._embedded["wp:featuredmedia"][0];
  const mediaDetails = featuredmedia.media_details;
  const mediaSizes = mediaDetails.sizes;
  const imageUrl = mediaSizes.full.source_url;

  return (
    <div className={mainContent}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@ratriretno" />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "${title}",
          "image": [
            "${imageUrl}"
          ],
          "description": "${excerpt}",
          "sku": "P-${product.id}-${product.slug}",
          "brand": {
            "@type": "Thing",
            "name": "${brand}"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "89"
          },
        }
        `}</script>
      </Head>
      <div className={ltEKP}>
        <article className={articleStyle}>
          <header className={headerStyle}>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          </header>
          <div className={imageHolder}>
            <div role="button" tabIndex="0">
              <div className={imageContainer}>
                <div className={imageOverflow}>
                  <img src={imageUrl} alt={metaTitle} className={imageStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className={contentWrap}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <Contact productName={title} />
          </div>
        </article>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?_embed=wp:featuredmedia,wp:term&slug=${slug}`;
  const res = await fetch(url);
  const posts = await res.json();
  const product = posts[0];

  if (!product) {
    return {
      notFound: true
    };
  }

  const wpTerm = product._embedded["wp:term"];
  const brand = wpTerm.reduce((accumulator, currentValue) => {
    if (!currentValue.length) {
      return accumulator;
    }

    const withBrand = currentValue.find((item) => item.taxonomy === "brand");

    return withBrand || {};
  }, {});

  return {
    props: {
      brand: brand.name || "",
      product
    }
  };
}
