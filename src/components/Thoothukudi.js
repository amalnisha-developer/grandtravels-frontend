// src/pages/ThoothukudiPage.js
import React from 'react';
import Place1Image from '../assets/V.O.C. Port Trust.avif';
import Place2Image from '../assets/Pearl_City_Beach.webp';
import Place3Image from '../assets/Our Lady of Snows Basilica.jpg';
import Place4Image from '../assets/lighthouse.jpg';
import Place5Image from '../assets/Kattabomman Memorial Fort.webp';
import Place6Image from '../assets/Kulasekarapattinammmmm.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Tirunelveli page


const Thoothukudi = () => {
  return (
    <div className="madurai-page">
      <h1>Thoothukudi</h1>
      <p>Famous for its port and Pearl Fishery.</p>
      
      <div className="place">
        <img src={Place1Image} alt="Place 1" />
        <div className="place-info">
          <h3>V.O.C. Port Trust</h3>
          <p>Major port handling a variety of cargo and fishing vessels.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place2Image} alt="Place 2" />
        <div className="place-info">
          <h3>Pearl City Beach</h3>
          <p>Scenic beach known for its clear waters and serene environment.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place3Image} alt="Place 3" />
        <div className="place-info">
          <h3>Our Lady of Snows Basilica</h3>
          <p>Historic church known for its architecture and religious significance.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place4Image} alt="Place 4" />
        <div className="place-info">
          <h3>Thoothukudi Lighthouse</h3>
          <p>Iconic lighthouse offering panoramic views of the coastline.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place5Image} alt="Place 5" />
        <div className="place-info">
          <h3>Kattabomman Memorial Fort</h3>
          <p>Historical fort associated with the legendary freedom fighter Veerapandiya Kattabomman.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place6Image} alt="Place 6" />
        <div className="place-info">
          <h3>Kulasekarapattinam</h3>
          <p>Pilgrimage site known for its annual festival and cultural significance.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Thoothukudi;
