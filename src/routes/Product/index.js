import Helmet from 'react-helmet-async';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Contact from '../../components/Contact';
import { getProduct } from '../../helpers/product';
import NotFound from '../../components/NotFound';
import {
  mainContent,
  ltEKP,
  articleStyle,
  headerStyle,
  imageHolder,
  imageContainer,
  imageOverflow,
  imageStyle,
  contentWrap,
} from './styles';

const Product = ({ match }) => {
  const slug = match.params.slug;
  const product = getProduct(slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div css={mainContent}>
      <Helmet>
        <title>Jual {product.title} - Ingame.id</title>
        <meta
          name="description"
          content={product.shortDesc}
        />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.shortDesc} />
        <meta property="og:image" content={`${process.env.REACT_APP_URL}${product.imageUrl}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={`${process.env.REACT_APP_URL}${product.imageUrl}`} />
        <meta name="twitter:site" content="@ratriretno" />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "${product.title}",
          "image": [
            "${process.env.REACT_APP_URL}${product.imageUrl}"
          ],
          "description": "${product.shortDesc}",
          "sku": "${product.sku}",
          "brand": {
            "@type": "Thing",
            "name": "${product.brand}"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "89"
          },
        }
        `}</script>
      </Helmet>
      <div css={ltEKP}>
        <article css={articleStyle}>
          <header css={headerStyle}>
            <h1>{product.title}</h1>
          </header>
          <div css={imageHolder}>
            <div role="button" tabIndex="0">
              <div css={imageContainer}>
                <div css={imageOverflow}>
                  <img src={product.imageUrl} alt={product.title} css={imageStyle} />
                </div>
              </div>
            </div>
          </div>
          <div css={contentWrap}>
            <div dangerouslySetInnerHTML={{ __html: product.body }} />
            <Contact productName={product.title} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Product;
