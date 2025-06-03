// src/pages/SollavanthanPage.js
import React from 'react';
import Place1Image from '../assets/Sollavanthan_Temple.avif';
import Place2Image from '../assets/Sollavanthan_Lake.jpg';
import Place3Image from '../assets/Sollavanthan_Fort.jpg';
import Place4Image from '../assets/Sollavanthan_Gardens.avif';
import Place5Image from '../assets/Sollavanthan_Falls.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Thanjavur page


const Sollavanthan = () => {
  return (
    <div className="madurai-page">
      <h1>Sollavanthan</h1>
      <p>A charming village. Experience the tranquility and charm of Sollavanthan.</p>
      
      <div className="place">
        <img src={Place1Image} alt="Place 1" />
        <div className="place-info">
          <h3>Sollavanthan Temple</h3>
          <p>Ancient temple known for its architectural beauty and spiritual significance.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place2Image} alt="Place 2" />
        <div className="place-info">
          <h3>Sollavanthan Lake</h3>
          <p>Tranquil lake surrounded by lush greenery, ideal for boating and relaxation.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place3Image} alt="Place 3" />
        <div className="place-info">
          <h3>Sollavanthan Fort</h3>
          <p>Historical fort offering panoramic views of the village and surrounding areas.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place4Image} alt="Place 4" />
        <div className="place-info">
          <h3>Sollavanthan Gardens</h3>
          <p>Beautiful gardens showcasing a variety of flora and fauna.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place5Image} alt="Place 5" />
        <div className="place-info">
          <h3>Sollavanthan Falls</h3>
          <p>Spectacular waterfall cascading down amidst picturesque surroundings.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Sollavanthan;
