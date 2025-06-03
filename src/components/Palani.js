// src/pages/PalaniPage.js
import React from 'react';
import PalaniMuruganTempleImage from '../assets/palani_murugan_temple.jpg';
import ThiruAvinankudiTempleImage from '../assets/thiru_avinankudi_temple.jpg';
import PeriyanayakiAmmanTempleImage from '../assets/padmanabhaswamy_temple.jpg';
import KuthiraiyarDamFallsImage from '../assets/kuthiraiyar_dam_falls.jpg';
import IdumbanTempleImage from '../assets/idumban_temple.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Palani page

const Palani = () => {
  return (
    <div className="madurai-page">
      <h1>Palani</h1>
      <p>Known for its Murugan Temple. Experience the spiritual atmosphere of Palani.</p>
      
      <h2>Famous Places in Palani</h2>
      
      <div className="place">
        <img src={PalaniMuruganTempleImage} alt="Palani Murugan Temple" />
        <div className="place-info">
          <h3>Palani Murugan Temple</h3>
          <p>A renowned temple dedicated to Lord Murugan, perched on a hilltop and attracting pilgrims from all over.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={ThiruAvinankudiTempleImage} alt="Thiru Avinankudi Temple" />
        <div className="place-info">
          <h3>Thiru Avinankudi Temple</h3>
          <p>An ancient temple at the foot of the Palani hills, significant in the history of Lord Murugan worship.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={PeriyanayakiAmmanTempleImage} alt="Periyanayaki Amman Temple" />
        <div className="place-info">
          <h3>Periyanayaki Amman Temple</h3>
          <p>A historic temple dedicated to Goddess Parvati, known for its beautiful architecture.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KuthiraiyarDamFallsImage} alt="Kuthiraiyar Dam Falls" />
        <div className="place-info">
          <h3>Kuthiraiyar Dam Falls</h3>
          <p>A scenic spot with a dam and waterfalls, ideal for nature lovers and picnickers.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={IdumbanTempleImage} alt="Idumban Temple" />
        <div className="place-info">
          <h3>Idumban Temple</h3>
          <p>A temple dedicated to Idumban, an important figure in the lore of Lord Murugan.</p>
        </div>
      </div>
    </div>
  );
};

export default Palani;
