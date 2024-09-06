import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

const WhatsAppButton = () => (
  <a
    href="https://wa.me/256773952003"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'left',
      backgroundColor: '#25D366',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px',
    }}
  >
    <FaWhatsapp style={{ marginRight: '10px', fontSize: '24px' }} />
    Chat with us on WhatsApp
  </a>
);

export default WhatsAppButton;
