// src/components/ServiceContent.js

import React from 'react';
import './ServiceContent.css';
import MiniImage from '../assets/mini-carsss.jpg';
import SedanImage from '../assets/shiftdesire.webp';
import InnovaImage from '../assets/toyato.jpg';
import TempoImage from '../assets/tempo.jpeg';

const ServiceContent = () => {
  const whatsappNumber = '7598283292';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20renting%20a%20cab.%20Please%20provide%20more%20details.`;

  return (
    <section className="service-content">
      <div className="service-content-wrapper">
        <div className="service-details">
          <div className="service-card">
            <img src={MiniImage} alt="Mini Car" />
            <h3>Mini (Day Rent)</h3>
            <p>We offer top-notch rental cabs at competitive prices to ensure a premium travel experience.</p>
            <p>Rent: 1500/-(A/C)</p>
            <p>(Rs.14/km)</p>
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <button>Book Now</button>
            </a>
          </div>
          <div className="service-card">
            <img src={SedanImage} alt="Sedan Car" />
            <h3>Suzuki Swift Dzire(Day Rent)</h3>
            <p>We offer top-notch rental cabs at competitive prices to ensure a premium travel experience.</p>
            <p>Rent: 1500/-(A/C)</p>
            <p>Driver Bata: Rs. 300 (Rs.14/km)</p>
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <button>Book Now</button>
            </a>
          </div>
          <div className="service-card">
            <img src={InnovaImage} alt="Innova Car" />
            <h3>Toyato (Day Rent)</h3>
            <p>We offer top-notch rental cabs at competitive prices to ensure a premium travel experience.</p>
            <p>Rent: 1500/-(A/C) (Rs. 14/km)</p>
            <p>Driver per day: Rs. 300/-</p>
        
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <button>Book Now</button>
            </a>
          </div>
          <div className="service-card">
            <img src={TempoImage} alt="Tempo Traveler" />
            <h3>Tempo Traveler (Day Rent)</h3>
            <p>We offer top-notch rental cabs at competitive prices to ensure a premium travel experience.</p>
            <p>Rent: 2800/- (Rs. 18/km)</p>
            <p>Driver (Rs. 300/Day)</p>
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <button>Book Now</button>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServiceContent;
