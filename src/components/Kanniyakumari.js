// src/components/Kanniyakumari.js
import React from 'react';
import Hero from '../components/Hero';
import kanniyakumari from '../assets/banner.png';
import beach1 from '../assets/beach6.jpg'; // Update these paths to appropriate images for Kanniyakumari
import beach2 from '../assets/beach4.jpg';
import beach3 from '../assets/beach5.webp';
import './KutralamStyles.css'; // Ensure the path is correct

const Kanniyakumari = () => {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroImg={kanniyakumari}
        title="Kanniyakumari"
        url="/kanniyakumari"
      />
      <div className="kutralam-content">
        <div className="content-section">
          <h1>Kanyakumari's Beauty</h1>
          <p>
            Kanniyakumari, located at the southernmost tip of India, is a place of great natural beauty and cultural significance. It is renowned for its stunning sunrise and sunset views over the confluence of the Arabian Sea, the Bay of Bengal, and the Indian Ocean. This unique geographical location makes Kanniyakumari a popular tourist destination.
          </p>
          <img src={beach1} alt="Kanniyakumari Beach 1" className="content-image" />
        </div>
        <div className="content-section reverse">
          <h1>Historical Landmarks</h1>
          <p>
            The town is also famous for the Vivekananda Rock Memorial, a monument dedicated to Swami Vivekananda who meditated on the rock in 1892 before his journey to the West to propagate Indian philosophy. The Thiruvalluvar Statue, a 133-foot tall stone sculpture of the Tamil poet and philosopher, is another significant landmark.
          </p>
          <img src={beach2} alt="Kanniyakumari Beach 2" className="content-image" />
        </div>
        <div className="content-section">
          <h1>Cultural Vibrance</h1>
          <p>
            Besides its spiritual and scenic attractions, Kanniyakumari is also known for its vibrant local culture and markets. Visitors can explore the bustling bazaars, savor local delicacies, and purchase traditional handicrafts. The town's rich history, natural beauty, and cultural heritage make it a must-visit destination for travelers.
          </p>
          <img src={beach3} alt="Kanniyakumari Beach 3" className="content-image" />
        </div>
      </div>
    </div>
  );
};

export default Kanniyakumari;
