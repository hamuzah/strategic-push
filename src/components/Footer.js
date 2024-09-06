import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'; // Import social media icons
import WhatsAppButton from './WhatsappButton';

const FooterWrapper = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  font-size: 18px;

  p {
    margin: 5px 0;
  }

  .phone-number {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    svg {
      margin-right: 10px;
    }
  }

  .cta {
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
    color: #ff9800;
  }
`;

const SocialMediaLinks = styled.div`
  margin: 20px 0;
  
  a {
    color: white;
    margin: 0 10px;
    font-size: 24px;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ff9800;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <ContactInfo>
      <div className="phone-number">
        <FaPhoneAlt /> +256 200 953 322 | +256 773 952 003
      </div>
      <p className="cta">Call For Free Consultation</p>
    </ContactInfo>

    <SocialMediaLinks>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </SocialMediaLinks>

    <p>&copy; 2024 Strategic Push Business Consulting. All rights reserved.</p>
    <p>Address: 123 Consulting Lane, Kampala, Uganda</p>
    <p>Business Hours: Mon - Fri: 9:00 AM - 5:00 PM</p>
    <WhatsAppButton phoneNumber="+256 773 952 003" />
  </FooterWrapper>
);

export default Footer;
