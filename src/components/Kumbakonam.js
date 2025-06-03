// src/components/Kumbakonam.js
import React from 'react';
import Place1Image from '../assets/kumbakonam1.jpg';
import Place2Image from '../assets/kumbakonamm2.jpg';
import Place3Image from '../assets/kumbakonam3.jpg';
import Place4Image from '../assets/kumbakonam4.webp';
import Place5Image from '../assets/kumbakonam5.jpg';
import Place6Image from '../assets/kumbakonam6.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Kovalam page


const Kumbakonam = () => {
  return (
    <div className="madurai-page">
      <h1>Kumbakonam</h1>
      <p>Renowned for its temples and Mahamaham festival.</p>
      
      <div className="place">
        <img src={Place1Image} alt="Place 1" />
        <div className="place-info">
          <h3>Kumbeswarar Temple</h3>
          <p>One of the oldest Shiva temples in Kumbakonam.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place2Image} alt="Place 2" />
        <div className="place-info">
          <h3>Sarangapani Temple</h3>
          <p>Dedicated to Lord Vishnu, known for its architecture and festivals.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place3Image} alt="Place 3" />
        <div className="place-info">
          <h3>Mahamaham Tank</h3>
          <p>Sacred tank where the Mahamaham festival takes place every 12 years.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place4Image} alt="Place 4" />
        <div className="place-info">
          <h3>Airavatesvara Temple</h3>
          <p>A UNESCO World Heritage site known for its intricate carvings.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place5Image} alt="Place 5" />
        <div className="place-info">
          <h3>Nageswaran Temple</h3>
          <p>Architecturally significant temple dedicated to Lord Shiva.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place6Image} alt="Place 6" />
        <div className="place-info">
          <h3>Darasuram Temple</h3>
          <p>Another UNESCO World Heritage site showcasing Chola architecture.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Kumbakonam;
