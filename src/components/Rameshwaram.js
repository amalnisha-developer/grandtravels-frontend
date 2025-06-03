// src/pages/RameshwaramPage.js
import React from 'react';
import RamanathaswamyTempleImage from '../assets/ramanathaswamy_temple.jpg';
import AgniTheerthamImage from '../assets/agni_theertham.jpg';
import DhanushkodiImage from '../assets/dhanushkodi.webp';
import PambanBridgeImage from '../assets/pamban_bridge.jpg';
import GandhamadhanaParvathamImage from '../assets/gandhamadhana_parvatham.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Rameshwaram page

const Rameshwaram = () => {
  return (
    <div className="madurai-page">
      <h1>Rameshwaram</h1>
      <p>A holy pilgrimage site. Visit the sacred temples and serene beaches of Rameshwaram.</p>
      
      <h2>Famous Places in Rameshwaram</h2>
      
      <div className="place">
        <img src={RamanathaswamyTempleImage} alt="Ramanathaswamy Temple" />
        <div className="place-info">
          <h3>Ramanathaswamy Temple</h3>
          <p>An ancient temple dedicated to Lord Shiva, known for its magnificent architecture.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={AgniTheerthamImage} alt="Agni Theertham" />
        <div className="place-info">
          <h3>Agni Theertham</h3>
          <p>A sacred water body where pilgrims take a holy dip before visiting the temple.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={DhanushkodiImage} alt="Dhanushkodi" />
        <div className="place-info">
          <h3>Dhanushkodi</h3>
          <p>A ghost town with a serene beach, located at the southern tip of Rameshwaram.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={PambanBridgeImage} alt="Pamban Bridge" />
        <div className="place-info">
          <h3>Pamban Bridge</h3>
          <p>India's first sea bridge, offering breathtaking views of the ocean.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={GandhamadhanaParvathamImage} alt="Gandhamadhana Parvatham" />
        <div className="place-info">
          <h3>Gandhamadhana Parvatham</h3>
          <p>A sacred hill offering panoramic views of the island and surrounding sea.</p>
        </div>
      </div>
    </div>
  );
};

export default Rameshwaram;
