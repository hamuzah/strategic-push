import React from 'react';  
import styled from 'styled-components';  
import { FaFacebookF, FaTwitter, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';  

const FooterWrapper = styled.footer`  
  background-color: #1a1a1a;  
  color: white;  
  padding: 40px 20px;  
  text-align: center;  
`;  

const FooterContent = styled.div`  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: space-between;  
  align-items: flex-start; // Aligns start of sections  
  max-width: 1200px;  
  margin: 0 auto;  

  @media (max-width: 768px) {  
    flex-direction: column;  
    align-items: center;  
  }  
`;  

const Section = styled.div`  
  flex: 1;  
  margin: 10px;  
  min-width: 240px; // Ensures sections don't get too narrow  
  padding: 10px; // Padding for aesthetics  

  h4 {  
    margin: 10px 0;  
  }  
`;  

const ContactInfo = styled.div`  
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

const ServicesSection = styled.div`  
  font-size: 16px;  
`;  

const TestimonialsSection = styled.div`  
  font-style: italic;  
  color: #ccc;  

  p {  
    margin: 5px 0;  
  }  
`;  

const WhatsAppButton = styled.a`  
  display: inline-flex;  
  align-items: center;  
  justify-content: center;  
  background-color: #25D366; /* WhatsApp green */  
  color: white;  
  padding: 10px 20px;  
  border-radius: 5px;  
  font-size: 16px;  
  text-decoration: none;  
  margin-top: 20px;  

  &:hover {  
    background-color: #128C7E; /* Darker green on hover */  
  }  

  svg {  
    margin-right: 5px; /* Optional space before the icon */  
  }  
`;  

const Footer = () => (  
  <FooterWrapper>  
    <FooterContent>  
      <Section>  
        <ContactInfo>  
          <div className="phone-number">  
            <FaPhoneAlt /> +256 200 953 322 | +256 773 952 003  
          </div>  
          <p className="cta">Call For Free Consultation</p>  
          <p>Our team is available to discuss your needs and provide expert advice tailored to your unique business situation.</p>  
        </ContactInfo> 
        <WhatsAppButton href={`https://api.whatsapp.com/send?phone=256773952003`} target="_blank" rel="noopener noreferrer">  
      <FaWhatsapp /> {FaWhatsapp}  
    </WhatsAppButton>   
      </Section>  

      <Section>  
        <ServicesSection>  
          <h4>Our Services</h4>  
          <p>- Business Strategy Development: Crafting plans that lead to measurable success.</p>  
          <p>- Market Research & Analysis: In-depth studies to understand your competitive landscape.</p>  
           
        </ServicesSection>  
      </Section>  

      <Section>  
        <TestimonialsSection>  
          <h4>Client Testimonials</h4>  
          <p>"Strategic Push changed the way we do business. Highly recommended!"</p>  
          <p>"Their insights were invaluable for our market entry strategy."</p>  
           
        </TestimonialsSection>  
      </Section>  

      <Section>  
        <SocialMediaLinks>  
          <h4>Follow Us</h4>  
          <p>Stay connected with us through our social media channels for the latest updates.</p>  
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
        <p>Address: 123 Consulting Lane, Kampala, Uganda</p>  
    <p>Business Hours: Mon - Fri: 9:00 AM - 5:00 PM</p>  
      </Section>  
    </FooterContent>  

    

    <p>&copy; 2024 Strategic Push Business Consulting. All rights reserved.</p>  
    
  </FooterWrapper>  
);  

export default Footer;