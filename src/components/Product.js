import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Product.css';
import businessImage from './bus.jpg';
import coachingImage from './pro.jpg';
import hrImage from './human.jpg';
import documentImage from './docum.jpg';
import bankingImage from './bank.png';
import dataImage from './daa.jpg';
import Services from './Services'; // Import the Service component

export const products = [
  {
    id: 'business-development-and-sales-solutions',
    title: 'Business Development and Sales Solutions',
    description: 'Implement strategies to boost your business growth and sales performance.',
    image: businessImage,
  },
  {
    id: 'professional-development-and-coaching',
    title: 'Professional Development and Coaching',
    description: 'Enhance skills and leadership capabilities with tailored coaching.',
    image: coachingImage,
  },
  {
    id: 'human-resource-management-solutions',
    title: 'Human Resource Management Solutions',
    description: 'Optimize HR processes and manage talent effectively.',
    image: hrImage,
  },
  {
    id: 'document-verification-and-authentication',
    title: 'Document Verification and Authentication',
    description: 'Ensure the authenticity and integrity of important documents.',
    image: documentImage,
  },
  {
    id: 'consultancy-in-banking-and-insurance',
    title: 'Consultancy in Banking and Insurance',
    description: 'Get expert guidance in banking and insurance sectors for better outcomes.',
    image: bankingImage,
  },
  {
    id: 'strategic-data-insights-solutions',
    title: 'Strategic Data Insights Solutions',
    description: 'Leverage data insights to drive strategic decision-making.',
    image: dataImage,
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleReadMore = (id) => {
    const product = products.find((prod) => prod.id === id);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-wrapper">
      <h2 className="section-heading">Our Services</h2>
      <div className="products-container">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="product-card"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: products.indexOf(product) * 0.1 }}
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <button
              className="read-more-button"
              onClick={() => handleReadMore(product.id)}
            >
              Read More
            </button>
          </motion.div>
        ))}

        {selectedProduct && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={handleCloseModal}>
                &times;
              </button>
              <Services product={selectedProduct} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
