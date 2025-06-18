import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Herostyles.css';
import gttImg from "../assets/gtt.png" 

const Hero = (props) => {
  const { cName, heroImg, title, text, buttons, btnClass } = props; // Destructure props

  return (

    <div className={cName}>
      <img src={heroImg} alt="Hero" />
    {/* Overlay gttImg */}
  <div className="gtt-img-container">
    <img src={gttImg} alt="GTT Logo" className="gtt-img" />
  </div>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>

        <div className="hero-buttons">
          {buttons && buttons.map((btn, index) => {
            if (btn.type === 'link') {
              return (
                <Link key={index} to={btn.to} className={btnClass}>
                  {btn.label}
                </Link>
              );
            } else {
              return (
                <a
                  key={index}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnClass}
                >
                  {btn.label}
                </a>
              );
            }
          })}
        </div>

      </div>
    </div>
  );
}

export default Hero;
