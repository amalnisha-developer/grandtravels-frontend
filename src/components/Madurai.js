// src/pages/MaduraiPage.js
import React from 'react';
import MeenakshiAmmanImage from '../assets/meenakshiamman.jpg';
import ThirumalaiNayakkarMahalImage from '../assets/thirumalainayakarmahal.avif';
import GandhiMuseumImage from '../assets/gandhi_museum.jpg';
import TheepakulamImage from '../assets/theepakulam.jpg';
import KazimarBigMosqueImage from '../assets/kazimar_big_mosque.jpg';
import VaigaiDamImage from '../assets/vaigai_dam.jpg';
import AlagarKoilImage from '../assets/alagar_koil.jpg';
import MeghamalaiImage from '../assets/meghamalai.jpg';
import SamanarHillsImage from '../assets/samanar_hills.jpg';
import './MaduraiStyles.css';

const Madurai = () => {
  return (
    <div className="madurai-page">
      <h1>Madurai</h1>
      <p>Rich in cultural heritage. Explore the historic temples and vibrant culture of Madurai.</p>
      
      <h2>Famous Places in Madurai</h2>
      
      <div className="place">
        <img src={MeenakshiAmmanImage} alt="Meenakshi Amman Temple" />
        <div className="place-info">
          <h3>Meenakshi Amman Temple</h3>
          <p>One of the most prominent Hindu temples dedicated to Goddess Parvati.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={ThirumalaiNayakkarMahalImage} alt="Thirumalai Nayakkar Mahal" />
        <div className="place-info">
          <h3>Thirumalai Nayakkar Mahal</h3>
          <p>A 17th-century palace known for its stunning architecture and light show.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={GandhiMuseumImage} alt="Gandhi Museum" />
        <div className="place-info">
          <h3>Gandhi Museum</h3>
          <p>A museum dedicated to Mahatma Gandhi, showcasing his life and principles.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={TheepakulamImage} alt="Theepakulam" />
        <div className="place-info">
          <h3>Theepakulam</h3>
          <p>An ancient temple tank known for its tranquil surroundings.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KazimarBigMosqueImage} alt="Kazimar Big Mosque" />
        <div className="place-info">
          <h3>Kazimar Big Mosque</h3>
          <p>One of the oldest mosques in Madurai, known for its architectural beauty.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={VaigaiDamImage} alt="Vaigai Dam" />
        <div className="place-info">
          <h3>Vaigai Dam</h3>
          <p>An important reservoir on the Vaigai River, providing water for irrigation.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={AlagarKoilImage} alt="Alagar Koil" />
        <div className="place-info">
          <h3>Alagar Koil</h3>
          <p>A temple dedicated to Lord Vishnu, located in the Alagar Hills.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={MeghamalaiImage} alt="Meghamalai" />
        <div className="place-info">
          <h3>Meghamalai</h3>
          <p>A serene hill station offering breathtaking views of the Western Ghats.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SamanarHillsImage} alt="Samanar Hills" />
        <div className="place-info">
          <h3>Samanar Hills</h3>
          <p>An archaeological site known for Jain rock-cut sculptures and inscriptions.</p>
        </div>
      </div>
    </div>
  );
};

export default Madurai;
