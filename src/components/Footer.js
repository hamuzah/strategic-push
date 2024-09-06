// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; 2024 Strategic Push Business Consulting. All rights reserved.</p>
    <p>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </p>
  </FooterWrapper>
);

export default Footer;
