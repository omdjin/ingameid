import Head from "next/head";
import parse from "html-react-parser";

import Contact from "components/contact";
import DynamicLatestBlog from "components/latest-blog/dynamic";
import { HOSTNAME, SITE_NAME } from "constants/index";
import removeHTMLTags from "utils/removeHTMLTags";
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
  const parsedMetaTitle = parse(metaTitle);
  const parsedExcerpt = removeHTMLTags(product.excerpt.rendered).replace(
    /\n/g,
    ""
  );
  const body = product.content.rendered;
  const metaUrl = `${HOSTNAME}/products/${product.slug}`;

  const featuredmedia = product._embedded["wp:featuredmedia"][0];
  const mediaDetails = featuredmedia.media_details;
  const mediaSizes = mediaDetails.sizes;
  const imageUrl = mediaSizes.full.source_url;
  const ldJson = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `${parsedMetaTitle}`,
    image: [`${imageUrl}`],
    description: `${parsedExcerpt}`,
    sku: `P-${product.id}-${product.slug}`,
    brand: {
      "@type": "Thing",
      name: `${brand}`
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "89"
    }
  };

  return (
    <>
      <div className={mainContent}>
        <Head>
          <title>{parsedMetaTitle}</title>
          <meta name="description" content={parsedExcerpt} />
          <meta property="og:title" content={parsedMetaTitle} />
          <meta property="og:description" content={parsedExcerpt} />
          <meta property="og:url" content={metaUrl} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:locale" content="id_ID" />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content={parsedMetaTitle} />
          <meta name="twitter:description" content={parsedExcerpt} />
          <meta name="twitter:site" content="@ratriretno" />
          <meta name="twitter:image" content={imageUrl} />
          <meta name="twitter:site" content="@ratriretno" />
          <meta name="twitter:creator" content="@ratriretno" />
          <meta name="twitter:card" content="product" />
          <meta name="twitter:label1" content="Harga" />
          <meta name="twitter:data1" content="Rp1.399.000" />
          <meta name="twitter:label2" content="Lokasi" />
          <meta name="twitter:data2" content="Depok" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
          />
          <link rel="canonical" href={metaUrl} />
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
                    <img
                      src={imageUrl}
                      alt={parsedMetaTitle}
                      className={imageStyle}
                    />
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
      <DynamicLatestBlog />
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const { slug } = params;

  const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?_embed=wp:featuredmedia,wp:term&slug=${slug}`;
  const responsePosts = await fetch(url);
  const posts = await responsePosts.json();
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

  // cache post for 900 seconds (15 minutes)
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=900, stale-while-revalidate=60"
  );

  return {
    props: {
      brand: brand.name || "",
      product
    }
  };
}
