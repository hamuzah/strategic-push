// src/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Product'; // Import the products array

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((prod) => prod.id === id); // Find the product by ID

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      { "hello are you"}
    </div>
  );
};

export default ProductDetail;
