import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Herostyles.css'; 

const Hero = (props) => {
  const { cName, heroImg, title, text, buttonText, btnClass } = props; // Destructure props

  return (
    <div className={cName}>
      <img src={heroImg} alt="Hero" /> {/* Use props.heroImg */}
      <div className='hero-text'>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to="/travel-plan" className={btnClass}>{buttonText}</Link> {/* Use Link component */}
      </div>
    </div>
  );
}

export default Hero;
