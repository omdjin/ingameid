import { products } from "../../stores";

export const getProduct = slug => {
  const product = products.find(product => product.slug === slug);

  return product;
};

export const test = () => "uye";
