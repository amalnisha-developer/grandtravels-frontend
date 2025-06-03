// src/pages/PuducherryPage.js
import React from 'react';
import Place1Image from '../assets/puducherry_place1.jpeg';
import Place2Image from '../assets/puducherry_placee2.jpeg';
import Place3Image from '../assets/puducherry_place3.jpeg';
import Place4Image from '../assets/puducherry_place4.jpeg';
import Place5Image from '../assets/puducherry_place5.jpeg';
import Place6Image from '../assets/puducherry_place6.jpeg';
import './MaduraiStyles.css'; // Ensure you have styles for Puducherry page

const Puducherry = () => {
  return (
    <div className="madurai-page">
      <h1>Pondicherry</h1>
      <p>Explore the charming coastal town of Puducherry known for its French colonial architecture, serene beaches, and spiritual retreats.</p>
      
      <h2>Famous Places in Pondicherry</h2>
      
      <div className="place">
        <img src={Place1Image} alt="Place 1" />
        <div className="place-info">
          <h3>Promenade Beach</h3>
          <p>Promenade Beach is a popular spot for a leisurely stroll along the coastline, offering picturesque views and a relaxing ambiance.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place2Image} alt="Place 2" />
        <div className="place-info">
          <h3>Paradise Beach</h3>
          <p>Paradise Beach is a pristine beach known for its golden sands and tranquil waters, accessible via a short boat ride.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place3Image} alt="Place 3" />
        <div className="place-info">
          <h3>Auroville</h3>
          <p>Auroville is an experimental township aimed at realizing human unity, with the Matrimandir at its heart.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place4Image} alt="Place 4" />
        <div className="place-info">
          <h3>Sri Aurobindo Ashram</h3>
          <p>Sri Aurobindo Ashram is a spiritual community where followers of Sri Aurobindo and The Mother come for guidance and meditation.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place5Image} alt="Place 5" />
        <div className="place-info">
          <h3>French War Memorial</h3>
          <p>The French War Memorial commemorates the soldiers who lost their lives during World War I, located on Goubert Avenue.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place6Image} alt="Place 6" />
        <div className="place-info">
          <h3>Botanical Garden</h3>
          <p>The Botanical Garden in Puducherry features a wide variety of exotic plants, an aquarium, and musical fountains.</p>
        </div>
      </div>
    </div>
  );
};

export default Puducherry;
