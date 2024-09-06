import React, { useState, useEffect } from 'react';
import bgImage1 from '../assets/110.jpg';
import bgImage2 from '../assets/1112.jpg';
import bgImage3 from '../assets/11.jpg';
import bgImage4 from '../assets/0001.jpg';
import './Hero.css';

const images = [bgImage1, bgImage2, bgImage3, bgImage4];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsFading(false);
      }, 1000); // Duration of the fade animation
    }, 2000); // Delay before switching images

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [nextImageIndex]);

  // Helper function to split a string into individual characters wrapped in spans
  const renderTextWithFallingEffect = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="falling-char" style={{ animationDelay: `${index * 0.1}s` }}>
        {char}
      </span>
    ));
  };

  return (
    <section className="hero">
      <div
        className={`hero-background ${!isFading ? 'hero-background-visible' : ''}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <div
        className={`hero-background-next ${isFading ? 'hero-background-visible' : ''}`}
        style={{ backgroundImage: `url(${images[nextImageIndex]})` }}
      />
      <div className="hero-content">
        <h1 className="hero-title">
          {renderTextWithFallingEffect('Strategic Push')}
        </h1>
        <p className="hero-description">
          {renderTextWithFallingEffect('Transform Data into Insights, Insights into Success.')}
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-illustration">
        <div className="animation">
          <div className="circle"></div>
          <div className="rectangle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
