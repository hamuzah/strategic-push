import React, { useState } from 'react';
import './Header.css';
import Imag from './logo.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={Imag} alt="Logo" className="circular-image" />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <button className="dropdown-btn">Services</button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#web-development">Web Development</a>
                <a href="#seo">SEO</a>
                <a href="#consulting">Consulting</a>
              </div>
            )}
          </div>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-buttons">
          <a href="/login" className="login-btn">Contact Us</a>
          <a href="/signup" className="signup-btn">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
