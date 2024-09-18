import React, { useState } from 'react';  
import { db, collection, addDoc } from './firebase'; // Import Firestore functions  
import './Contact.css';  

const Contact = () => {  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [message, setMessage] = useState('');  
  const [status, setStatus] = useState('');  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    setStatus('Sending...');  

    try {  
      // Add the message to Firestore  
      await addDoc(collection(db, 'messages'), {  
        name,  
        email,  
        message,  
        timestamp: new Date(),  
      });  

      // Clear the input fields  
      setName('');  
      setEmail('');  
      setMessage('');  
      setStatus('Message sent successfully!');  
    } catch (error) {  
      console.error('Error sending message: ', error);  
      setStatus('Failed to send message.');  
    }  
  };  

  return (  
    <section className="contact-page">  
      <div className="contact-content">  
        <h1 className="contact-title">Get in Touch</h1>  
        <p className="contact-description">  
          We'd love to hear from you! Whether you have a question or just want to say hello, our team is ready to answer all your questions.  
        </p>  
        <form className="contact-form" onSubmit={handleSubmit}>  
          <input   
            type="text"   
            placeholder="Your Name"   
            className="contact-input"   
            value={name}  
            onChange={(e) => setName(e.target.value)}  
            required   
          />  
          <input   
            type="email"   
            placeholder="Your Email"   
            className="contact-input"   
            value={email}  
            onChange={(e) => setEmail(e.target.value)}  
            required   
          />  
          <textarea   
            placeholder="Your Message"   
            className="contact-textarea"   
            value={message}  
            onChange={(e) => setMessage(e.target.value)}  
            required  
          ></textarea>  
          <button type="submit" className="contact-button">Send Message</button>  
        </form>  
        {status && <p className="status-message">{status}</p>}  
      </div>  
      <div className="contact-background"></div>  
    </section>  
  );  
};  

export default Contact;