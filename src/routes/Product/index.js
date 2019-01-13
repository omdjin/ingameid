import React from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../helpers/product";
import NotFound from "../../components/NotFound";

const Product = ({ match }) => {
  const slug = match.params.slug;
  const product = getProduct(slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      Product Detail Component <Link to="/">Home</Link>
    </div>
  );
};

export default Product;
