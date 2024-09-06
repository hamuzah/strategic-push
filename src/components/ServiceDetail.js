import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'; // Create and use this CSS file for styling

// Sample detailed content for services
const serviceDetails = {
  'business-development-and-sales-solutions': {
    title: 'Business Development and Sales Solutions',
    description: 'Detailed information about business development and sales solutions...',
    image: '/path-to-your-image-folder/bus.jpg', // Adjust the path as necessary
    additionalInfo: 'Here you can add more detailed information, case studies, etc.',
  },
  'professional-development-and-coaching': {
    title: 'Professional Development and Coaching',
    description: 'Detailed information about professional development and coaching...',
    image: '/path-to-your-image-folder/pro.jpg',
    additionalInfo: 'Here you can add more detailed information, case studies, etc.',
  },
  // Add other services in the same way
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div>Service not found!</div>;
  }

  return (
    <div className="service-detail">
      <img src={service.image} alt={service.title} className="service-detail-image" />
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <div className="additional-info">{service.additionalInfo}</div>
    </div>
  );
};

export default ServiceDetail;
