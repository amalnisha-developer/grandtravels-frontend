// src/pages/DindigulPage.js
import React from 'react';
import DindigulFortImage from '../assets/Dindigul Fort.jpg';
import BegamburMosqueImage from '../assets/begambur_big_mosque.jpg';
import KoneMemorialImage from '../assets/kone_memorial.jpg';
import KamarajarLakeImage from '../assets/kamarajar_lake.jpg';
import ThalappakattiBiryaniImage from '../assets/thalappakatti_biryani.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Dindigul page

const Dindigul = () => {
  return (
    <div className="madurai-page">
      <h1>Dindigul</h1>
      <p>Famous for locks and biryani. Enjoy the culinary and cultural delights of Dindigul.</p>
      
      <h2>Famous Places in Dindigul</h2>
      
      <div className="place">
        <img src={DindigulFortImage} alt="Dindigul Fort" />
        <div className="place-info">
          <h3>Dindigul Fort</h3>
          <p>A historical fort built by the Madurai Nayak Dynasty, offering scenic views of the city.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={BegamburMosqueImage} alt="Begambur Big Mosque" />
        <div className="place-info">
          <h3>Begambur Big Mosque</h3>
          <p>An ancient mosque known for its architectural beauty and historical significance.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KoneMemorialImage} alt="Balakrishna Kone Memorial" />
        <div className="place-info">
          <h3>Balakrishna Kone Memorial</h3>
          <p>A memorial dedicated to Balakrishna Kone, a freedom fighter and social reformer.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KamarajarLakeImage} alt="Kamarajar Lake" />
        <div className="place-info">
          <h3>Kamarajar Lake</h3>
          <p>A serene lake surrounded by lush greenery, offering boating facilities and relaxation.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={ThalappakattiBiryaniImage} alt="Dindigul Thalappakatti Restaurant" />
        <div className="place-info">
          <h3>Dindigul Thalappakatti Restaurant</h3>
          <p>A renowned eatery famous for its authentic Dindigul-style biryani.</p>
        </div>
      </div>
    </div>
  );
};

export default Dindigul;
