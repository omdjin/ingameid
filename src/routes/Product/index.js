import React from 'react';
import Helmet from 'react-helmet-async';
import { getProduct } from '../../helpers/product';
import NotFound from '../../components/NotFound';

const Product = ({ match }) => {
  const slug = match.params.slug;
  const product = getProduct(slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      <Helmet>
        <title>{product.title} - Ingame.id</title>
      </Helmet>
      <div style={{ width: '40%' }}>
        <h1>{product.title}</h1>
      </div>
      <div style={{ width: '60%' }}>
        <img src={product.imageUrl} alt={product.title} />
      </div>
    </div>
  );
};

export default Product;
