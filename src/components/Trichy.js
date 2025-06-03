// src/pages/TrichyPage.js
import React from 'react';
import SriRanganathaswamyImage from '../assets/sri_ranganathaswamy_temple (2).jpg';
import RockFortTempleImage from '../assets/rock_fort_temple.jpg';
import JambukeswararTempleImage from '../assets/jambukeswarar_temple (2).jpg';
import KallanaiDamImage from '../assets/kallanai_dam1.jpg';
import RajagopuramImage from '../assets/rajaaagopuram.jpg';
import GovernmentMuseumImage from '../assets/government_museum_trichy.jpg';
import ViralimalaiTempleImage from '../assets/viralimalai_murugan_temple.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Trichy page

const Trichy = () => {
  return (
    <div className="madurai-page">
      <h1>Trichy</h1>
      <p>Known for its educational institutions. Discover the blend of education and history in Trichy.</p>
      
      <h2>Famous Places in Trichy</h2>
      
      <div className="place">
        <img src={SriRanganathaswamyImage} alt="Sri Ranganathaswamy Temple" />
        <div className="place-info">
          <h3>Sri Ranganathaswamy Temple</h3>
          <p>One of the largest functioning Hindu temples in the world, dedicated to Lord Vishnu.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={RockFortTempleImage} alt="Rock Fort Temple" />
        <div className="place-info">
          <h3>Rock Fort Temple</h3>
          <p>An ancient fort complex with a temple dedicated to Lord Shiva, offering panoramic views of Trichy.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={JambukeswararTempleImage} alt="Jambukeswarar Temple" />
        <div className="place-info">
          <h3>Jambukeswarar Temple</h3>
          <p>One of the five major Shiva temples of Tamil Nadu, known for its underground water stream.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KallanaiDamImage} alt="Kallanai Dam (Grand Anicut)" />
        <div className="place-info">
          <h3>Kallanai Dam (Grand Anicut)</h3>
          <p>One of the oldest functional dams in the world, built by the Chola king Karikalan.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={RajagopuramImage} alt="Rajagopuram" />
        <div className="place-info">
          <h3>Rajagopuram</h3>
          <p>The monumental entrance tower of Sri Ranganathaswamy Temple, a significant architectural landmark.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={GovernmentMuseumImage} alt="Government Museum, Trichy" />
        <div className="place-info">
          <h3>Government Museum, Trichy</h3>
          <p>A museum showcasing artifacts from the Chola and Pallava dynasties, among others.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={ViralimalaiTempleImage} alt="Viralimalai Murugan Temple" />
        <div className="place-info">
          <h3>Viralimalai Murugan Temple</h3>
          <p>A hilltop temple dedicated to Lord Murugan, known for its annual festival and carved rock formations.</p>
        </div>
      </div>
    </div>
  );
};

export default Trichy;
