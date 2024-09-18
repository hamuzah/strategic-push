import React, { useState } from 'react';  
import './Header.css';  
import Imag from './logo.png';  

const Header = () => {  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  

  // Set dropdown open state to true   
  const handleMouseEnter = () => setIsDropdownOpen(true);  
  
  // Set dropdown open state to false  
  const handleMouseLeave = () => setIsDropdownOpen(false);  

  return (  
    <header className="header">  
      <div className="header-container">  
        <div className="logo">  
          <img src={Imag} alt="Logo" className="circular-image" />  
        </div>  
        <nav className="nav">  
          <a href="#home">Home</a>  
          <div   
            className="dropdown"   
            onMouseEnter={handleMouseEnter}   
            onMouseLeave={handleMouseLeave}  
          >  
            <button className="dropdown-btn">Services</button>  
            {isDropdownOpen && (  
              <div className="dropdown-content">  
                <a href="#web-development">Web Development</a>  
                <a href="#seo">SEO</a>  
                <a href="#consulting">Consulting</a>  
              </div>  
            )}  
          </div>  
          <a href="#consultants">Consultants</a>  
          <a href="#school">School</a>  
          <a href="#about">About</a>  
          <a href="#contact">Contact</a>  
        </nav>  
        <div className="auth-buttons">  
          <a href="/login" className="login-btn">Login</a>  
          <a href="/signup" className="signup-btn">Sign Up</a>  
        </div>  
      </div>  
    </header>  
  );  
};  

export default Header;