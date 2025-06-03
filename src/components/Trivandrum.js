// src/pages/TrivandrumPage.js
import React from 'react';
import PadmanabhaswamyTempleImage from '../assets/padmanabhaswamy_temple.jpg';
import KovalamBeachImage from '../assets/kovalam_beach.jpg';
import NapierMuseumImage from '../assets/napier_museum.jpg';
import PoovarIslandImage from '../assets/poovar_island.jpg';
import VeliTouristVillageImage from '../assets/veli_tourist_village.jpg';
import PonmudiImage from '../assets/ponmudi.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Trivandrum page

const Trivandrum = () => {
  return (
    <div className="madurai-page">
      <h1>Trivandrum</h1>
      <p>The capital of Kerala. Enjoy the blend of traditional and modern culture in Trivandrum.</p>
      
      <h2>Famous Places in Trivandrum</h2>
      
      <div className="place">
        <img src={PadmanabhaswamyTempleImage} alt="Padmanabhaswamy Temple" />
        <div className="place-info">
          <h3>Padmanabhaswamy Temple</h3>
          <p>A historic temple dedicated to Lord Vishnu, known for its intricate architecture and rich heritage.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KovalamBeachImage} alt="Kovalam Beach" />
        <div className="place-info">
          <h3>Kovalam Beach</h3>
          <p>A world-famous beach known for its serene beauty and vibrant atmosphere.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={NapierMuseumImage} alt="Napier Museum" />
        <div className="place-info">
          <h3>Napier Museum</h3>
          <p>A 19th-century art and natural history museum, showcasing a vast collection of historical artifacts.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={PoovarIslandImage} alt="Poovar Island" />
        <div className="place-info">
          <h3>Poovar Island</h3>
          <p>A stunning island known for its golden sand beaches and tranquil backwaters.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={VeliTouristVillageImage} alt="Veli Tourist Village" />
        <div className="place-info">
          <h3>Veli Tourist Village</h3>
          <p>A picturesque spot where the lake meets the sea, offering various recreational activities.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={PonmudiImage} alt="Ponmudi" />
        <div className="place-info">
          <h3>Ponmudi</h3>
          <p>A beautiful hill station known for its mist-covered hills and lush green landscapes.</p>
        </div>
      </div>
    </div>
  );
};

export default Trivandrum;
