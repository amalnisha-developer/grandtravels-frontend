// src/pages/ChennaiPage.js
import React from 'react';
import MarinaBeachImage from '../assets/marina_beach.jpg';
import EdwardElliotBeachImage from '../assets/edward_elliot_beach.jpg';
import ThiruvalluvarNagarBeachImage from '../assets/thiruvalluvar_nagar_beach.avif';
import ValluvarKottamImage from '../assets/valluvar_kottam.jpg';
import DakshinachitraImage from '../assets/dakshinachitra.jpg';
import AshtalakshmiTempleImage from '../assets/Ashtalakshmi_temple_2.jpg';
import GuindyNationalParkImage from '../assets/guindy_national_park.jpeg';
import SriParthasarathyTempleImage from '../assets/sri_parthasarathy_temple.webp';
import KapaleeswararTempleImage from '../assets/kapaleeswarar_temple.jpg';
import './MaduraiStyles.css'; 

const Chennai = () => {
  return (
    <div className="madurai-page">
      <h1>Chennai</h1>
      <p>The vibrant capital of Tamil Nadu. Experience the bustling city life and beautiful beaches.</p>
      
      <h2>Famous Places in Chennai</h2>
      
      <div className="place">
        <img src={MarinaBeachImage} alt="Marina Beach" />
        <div className="place-info">
          <h3>Marina Beach</h3>
          <p>One of the longest urban beaches in the world, offering scenic views and bustling activity.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={EdwardElliotBeachImage} alt="Edward Elliot's Beach" />
        <div className="place-info">
          <h3>Edward Elliot's Beach</h3>
          <p>A serene beach known for its tranquil atmosphere and ideal for swimming and relaxing.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={ThiruvalluvarNagarBeachImage} alt="Thiruvalluvar Nagar Beach" />
        <div className="place-info">
          <h3>Thiruvalluvar Nagar Beach</h3>
          <p>A lesser-known beach offering a peaceful escape from the city buzz.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={ValluvarKottamImage} alt="Valluvar Kottam" />
        <div className="place-info">
          <h3>Valluvar Kottam</h3>
          <p>A monument dedicated to the classical Tamil poet, Thiruvalluvar, featuring a memorial auditorium.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={DakshinachitraImage} alt="Dakshinachitra" />
        <div className="place-info">
          <h3>Dakshinachitra</h3>
          <p>An open-air museum showcasing the cultural heritage of South India through traditional arts and crafts.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={AshtalakshmiTempleImage} alt="Ashtalakshmi Temple" />
        <div className="place-info">
          <h3>Ashtalakshmi Temple</h3>
          <p>A Hindu temple dedicated to Goddess Lakshmi, featuring eight forms of the goddess.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={GuindyNationalParkImage} alt="Guindy National Park" />
        <div className="place-info">
          <h3>Guindy National Park</h3>
          <p>A protected area of Tamil Nadu, known for its diverse flora and fauna amidst an urban landscape.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SriParthasarathyTempleImage} alt="Sri Parthasarathy Temple" />
        <div className="place-info">
          <h3>Sri Parthasarathy Temple</h3>
          <p>One of the oldest temples in Chennai, dedicated to Lord Krishna in his role as Parthasarathy.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KapaleeswararTempleImage} alt="Kapaleeswarar Temple" />
        <div className="place-info">
          <h3>Kapaleeswarar Temple</h3>
          <p>A revered temple dedicated to Lord Shiva, known for its Dravidian architecture and festivals.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Chennai;
