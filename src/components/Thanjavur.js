// src/pages/ThanjavurPage.js
import React from 'react';
import BrihadeeswaraTempleImage from '../assets/brihadeeswara_temple.jpg';
import ThanjavurPalaceImage from '../assets/thanjavur_palace.jpg';
import SaraswathiMahalLibraryImage from '../assets/saraswathi_mahal_library.jpg';
import GangaikondaCholapuramImage from '../assets/gangaikonda_cholapuram.jpg';
import SangeethaMahalImage from '../assets/sangeetha_mahal.jpg';
import SchwartzChurchImage from '../assets/schwartz_church.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Thanjavur page

const Thanjavur = () => {
  return (
    <div className="madurai-page">
      <h1>Thanjavur</h1>
      <p>Renowned for Brihadeeswara Temple. Explore the architectural marvels of Thanjavur.</p>
      
      <h2>Famous Places in Thanjavur</h2>
      
      <div className="place">
        <img src={BrihadeeswaraTempleImage} alt="Brihadeeswara Temple" />
        <div className="place-info">
          <h3>Brihadeeswara Temple</h3>
          <p>An architectural marvel dedicated to Lord Shiva, known for its grandeur and historical significance.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={ThanjavurPalaceImage} alt="Thanjavur Palace" />
        <div className="place-info">
          <h3>Thanjavur Palace</h3>
          <p>A historic palace complex housing art galleries, a library, and museums showcasing the region's rich heritage.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SaraswathiMahalLibraryImage} alt="Saraswathi Mahal Library" />
        <div className="place-info">
          <h3>Saraswathi Mahal Library</h3>
          <p>One of the oldest libraries in Asia, holding a vast collection of manuscripts and historical documents.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={GangaikondaCholapuramImage} alt="Gangaikonda Cholapuram" />
        <div className="place-info">
          <h3>Gangaikonda Cholapuram</h3>
          <p>An ancient temple built by the Chola dynasty, known for its architectural brilliance and historical importance.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SangeethaMahalImage} alt="Sangeetha Mahal" />
        <div className="place-info">
          <h3>Sangeetha Mahal</h3>
          <p>A beautiful hall within the Thanjavur Palace, known for its acoustics and historical significance.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SchwartzChurchImage} alt="Schwartz Church" />
        <div className="place-info">
          <h3>Schwartz Church</h3>
          <p>An old church built by the Danish missionary Rev. C.V. Schwartz, reflecting the colonial history of the region.</p>
        </div>
      </div>
    </div>
  );
};

export default Thanjavur;
