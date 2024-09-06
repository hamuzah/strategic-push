import React from 'react';
import './About.css';
import img1 from './abt.avif'; // First image
import img2 from './abtt.jpeg'; // Second image

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-content">
        <div className="about-images">
          <div className="about-image image-left">
            <img src={img2} alt="Second Image" />
          </div>
          <div className="about-image image-right">
            <img src={img1} alt="About Us" />
          </div>
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We’re consulting specialists rather than generalists, channeling our expertise to deliver exceptionally effective services tailored for a select clientele. 
            Our seasoned consultants, with decades of experience in staff development and organizational growth across diverse sectors, personally provide the unique and dedicated service our clients deserve.
          </p>
          <p>
            Our consultants, seasoned retail leaders in East Africa, bring a successful track record with renowned brands. 
            They prioritize premium customer service, employing a customer-centric approach that fosters staff and business development across diverse industries.
            Proficient in developing, coaching, and inspiring teams, they excel in implementing effective processes and strategies, benefiting clients by genuinely engaging their customer base.
            The consulting focus centers on cultivating a leadership vision supporting growth strategy, branding, product development, customer insight, and creative execution.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
