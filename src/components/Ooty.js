// src/pages/OotyPage.js
import React from 'react';
import Place1Image from '../assets/ooty_place1.jpg';
import Place2Image from '../assets/ooty_place2.jpg';
import Place3Image from '../assets/ooty_place3.jpg';
import Place4Image from '../assets/ooty_place4.jpg';
import Place5Image from '../assets/ooty_place5.jpg';
import Place6Image from '../assets/ooty_place6.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Ooty page

const Ooty = () => {
  return (
    <div className="madurai-page">
      <h1>Ooty</h1>
      <p>Explore the beautiful hill station of Ooty, known for its scenic landscapes, lush gardens, and pleasant climate.</p>
      
      <h2>Famous Places in Ooty</h2>
      
      <div className="place">
        <img src={Place1Image} alt="Place 1" />
        <div className="place-info">
          <h3>Ooty Lake</h3>
          <p>Ooty Lake is a popular tourist attraction, offering boating facilities and scenic beauty.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place2Image} alt="Place 2" />
        <div className="place-info">
          <h3>Botanical Gardens</h3>
          <p>The Government Botanical Gardens are home to a wide variety of flora and a popular spot for nature lovers.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place3Image} alt="Place 3" />
        <div className="place-info">
          <h3>Doddabetta Peak</h3>
          <p>Doddabetta Peak is the highest point in Ooty, offering panoramic views of the Nilgiri Hills.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place4Image} alt="Place 4" />
        <div className="place-info">
          <h3>Rose Garden</h3>
          <p>The Rose Garden is a beautiful garden featuring thousands of varieties of roses and other flowers.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place5Image} alt="Place 5" />
        <div className="place-info">
          <h3>Thread Garden</h3>
          <p>The Thread Garden is a unique attraction displaying flowers and plants made entirely of thread.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place6Image} alt="Place 6" />
        <div className="place-info">
          <h3>Emerald Lake</h3>
          <p>Emerald Lake is a serene spot located in the upper plateau region of the Nilgiri Hills, perfect for picnicking and nature walks.</p>
        </div>
      </div>
    </div>
  );
};

export default Ooty;
