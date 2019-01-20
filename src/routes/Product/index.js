import React from 'react';
import Helmet from 'react-helmet-async';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Contact from '../../components/Contact';
import { getProduct } from '../../helpers/product';
import NotFound from '../../components/NotFound';
import { mainContent, ltEKP, articleStyle, headerStyle, imageHolder, imageContainer, imageOverflow, imageStyle, contentWrap } from './styles';

const Product = ({ match }) => {
  const slug = match.params.slug;
  const product = getProduct(slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div css={mainContent}>
      <Helmet>
        <title>{product.title} - Ingame.id</title>
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
            <Contact />
          </div>
        </article>

      </div>
    </div>
  );
};

export default Product;
