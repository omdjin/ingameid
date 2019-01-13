import React from 'react';
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
