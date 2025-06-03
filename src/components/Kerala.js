import React from 'react';
import Hero from '../components/Hero';
import kerala from '../assets/change.png';
import backwaters1 from '../assets/backwaters1.jpg'; // Update these paths to appropriate images for Kerala
import backwaters2 from '../assets/backwaters4.jpg';
import backwaters3 from '../assets/backwaters3.jpg';
import './KutralamStyles.css'; // Ensure the path is correct

const Kerala = () => {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroImg={kerala}
        title="Kerala"
        url="/kerala"
      />
      <div className="kutralam-content">
        <div className="content-section">
          <h1>Tranquil Backwaters of Kerala</h1> {/* Custom heading for the first section */}
          <p>
            Kerala, known as "God's Own Country," is a state on the southwestern Malabar Coast of India. It is renowned for its beautiful backwaters, lush greenery, and rich cultural heritage. The tranquil backwaters are a network of interconnected canals, rivers, lakes, and inlets, making it a unique and popular tourist destination.
          </p>
          <img src={backwaters1} alt="Kerala Backwaters 1" className="content-image" />
        </div>
        <div className="content-section reverse">
          <h1>Houseboat Cruises in Kerala</h1> {/* Custom heading for the second section */}
          <p>
            One of the main attractions in Kerala is the houseboat cruises on the backwaters, particularly in Alappuzha and Kumarakom. These houseboats, traditionally known as "kettuvallams," offer a luxurious way to experience the scenic beauty and serenity of the region. The cruises provide a glimpse into the local life and lush landscapes of Kerala.
          </p>
          <img src={backwaters2} alt="Kerala Backwaters 2" className="content-image" />
        </div>
        <div className="content-section">
          <h1>Discovering Cultural Riches in Kerala</h1> {/* Custom heading for the third section */}
          <p>
            Besides the backwaters, Kerala is also famous for its Ayurvedic treatments, vibrant festivals, and delicious cuisine. Visitors can explore the hill stations of Munnar, the beaches of Kovalam, the wildlife sanctuaries like Periyar, and the historic city of Kochi. With its diverse attractions and natural beauty, Kerala offers something for every traveler.
          </p>
          <img src={backwaters3} alt="Kerala Backwaters 3" className="content-image" />
        </div>
      </div>
    </div>
  );
};

export default Kerala;
