// src/pages/KodaikanalPage.js
import React from 'react';
import Place1Image from '../assets/kodaikanal_place1.jpg';
import Place2Image from '../assets/kodaikanal_place2.jpg';
import Place3Image from '../assets/kodaikanal_place3.jpg';
import Place4Image from '../assets/kodaikanal_placee4.jpg';
import Place5Image from '../assets/kodaikanal_place5.jpg';
import Place6Image from '../assets/kodaikanal_place6.jpg';
import Place7Image from '../assets/kodaikanal_place7.jpg'; // Replace with the actual Guna Cave image path
import './MaduraiStyles.css'; // Ensure you have styles for Kodaikanal page

const Kodaikanal = () => {
  return (
    <div className="madurai-page">
      <h1>Kodaikanal</h1>
      <p>Explore the serene hill station of Kodaikanal, known for its lush greenery, beautiful lakes, and pleasant climate.</p>
      
      <h2>Famous Spots in Kodaikanal</h2>
      
      <div className="place">
        <img src={Place1Image} alt="Place 1" />
        <div className="place-info">
          <h3>Kodaikanal Lake</h3>
          <p>Kodaikanal Lake is a star-shaped man-made lake and a popular spot for boating and picnicking.</p>
        </div>
      </div>

      <div className="place">
        <img src={Place7Image} alt="Guna Cave" />
        <div className="place-info">
          <h3>Guna Cave</h3>
          <p>Guna Cave, also known as Devil's Kitchen, is a popular tourist spot known for its unique rock formations and a sense of mystery.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place2Image} alt="Place 2" />
        <div className="place-info">
          <h3>Coaker's Walk</h3>
          <p>Coaker's Walk offers a scenic walkway with panoramic views of the valleys and hills.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place3Image} alt="Place 3" />
        <div className="place-info">
          <h3>Bryant Park</h3>
          <p>Bryant Park is a beautifully maintained botanical garden with a variety of flowers, trees, and shrubs.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place4Image} alt="Place 4" />
        <div className="place-info">
          <h3>Pillar Rocks</h3>
          <p>Pillar Rocks are a set of three giant rock pillars offering stunning views and a serene environment.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place5Image} alt="Place 5" />
        <div className="place-info">
          <h3>Green Valley View</h3>
          <p>Green Valley View, also known as Suicide Point, provides a breathtaking view of the surrounding hills and valleys.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place6Image} alt="Place 6" />
        <div className="place-info">
          <h3>Silver Cascade Falls</h3>
          <p>Silver Cascade Falls is a picturesque waterfall located on the way to Kodaikanal, perfect for a quick stopover.</p>
        </div>
      </div>

      
    </div>
  );
};

export default Kodaikanal;
