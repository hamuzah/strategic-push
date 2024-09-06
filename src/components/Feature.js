import React, { useEffect, useRef } from 'react';
import './Feature.css'; // Import the CSS file for styling
import cartoonImage from './110p.png';

const features = [
  {
    icon: '🔍',
    title: 'Consultants',
    description: 'Expert advice and strategies to help you achieve your goals.',
  },
  {
    icon: '🏆',
    title: 'Success',
    description: 'Proven track record of delivering results and achieving success.',
  },
  {
    icon: '🛠️',
    title: 'Support',
    description: '24/7 support to assist you with any questions or issues.',
  },
];

const Features = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = lettersRef.current;
    letters.forEach(letter => {
      for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.innerHTML = '⭐'; // Star icon
        star.style.left = `${Math.random() * 50}px`;
        star.style.top = `${Math.random() * 50}px`;
        letter.appendChild(star);
      }
    });
  }, []);

  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
        <div className="cartoon-container">
          <img src={cartoonImage} alt="Cartoon Character" className="cartoon" />
        </div>
        {/* Strategic Push Text */}
        <div className="strategic-push">
          {['S', 'T', 'R', 'A', 'T', 'E', 'G', 'I', 'C', ' ', 'P', 'U', 'S', 'H'].map((char, index) => (
            <span
              className="letter"
              key={index}
              ref={(el) => lettersRef.current[index] = el}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
