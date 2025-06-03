// src/pages/CoimbatorePage.js
import React from 'react';
import Place1Image from '../assets/place1.jpg';
import Place2Image from '../assets/place2.webp';
import Place3Image from '../assets/place3.jpg';
import Place4Image from '../assets/place4.jpg';
import Place5Image from '../assets/place5.jpg';
import Place6Image from '../assets/place6.avif';
import Temple1Image from '../assets/temple1.avif'; // Replace with actual temple image path
import Temple2Image from '../assets/temple2.jpg'; // Replace with actual temple image path
import IshaImage from '../assets/isha_yoga_center.avif'; // Replace with actual Isha Yoga Center image path
import './MaduraiStyles.css'; // Ensure you have styles for Coimbatore page

const Coimbatore = () => {
  return (
    <div className="madurai-page">
      <h1>Coimbatore</h1>
      <p>Explore the vibrant city of Coimbatore known for its cultural heritage and natural beauty.</p>
      
      <h2>Famous Places in Coimbatore</h2>
      
      <div className="place">
        <img src={Place1Image} alt="Place 1" />
        <div className="place-info">
          <h3>Gedee Car Museum</h3>
          <p>The Gedee Car Museum showcases a fascinating collection of vintage cars and motorcycles.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place2Image} alt="Place 2" />
        <div className="place-info">
          <h3>Black Thunder Theme Park</h3>
          <p>Black Thunder is a popular water theme park offering thrilling rides and entertainment.</p>
        </div>
      </div>
      
      
      
      <div className="place">
        <img src={Place4Image} alt="Place 4" />
        <div className="place-info">
          <h3>Codissia Trade Fair Complex</h3>
          <p>The Codissia Trade Fair Complex hosts international trade fairs and exhibitions.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place5Image} alt="Place 5" />
        <div className="place-info">
          <h3>Siruvani Waterfalls</h3>
          <p>Siruvani Waterfalls is a scenic spot located in the outskirts of Coimbatore, known for its pristine beauty.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={Place6Image} alt="Place 6" />
        <div className="place-info">
          <h3>Kovai Kondattam</h3>
          <p>Kovai Kondattam is an amusement park offering water rides and fun activities for families and children.</p>
        </div>
      </div>

      
      <div className="place">
        <img src={IshaImage} alt="Isha Yoga Center" />
        <div className="place-info">
          <h3>Isha Yoga Center</h3>
          <p>The Isha Yoga Center, founded by Sadhguru, is a spiritual hub offering yoga programs amidst serene natural surroundings.</p>
        </div>
      </div>

      <div className="place">
        <img src={Temple1Image} alt="Temple Image 1" />
        <div className="place-info">
          <h3>Dhyanalinga Temple</h3>
          <p>The Dhyanalinga is a meditative space with powerful energy, offering a unique spiritual experience.</p>
        </div>
      </div>

      <div className="place">
        <img src={Temple2Image} alt="Temple Image 2" />
        <div className="place-info">
          <h3>Marudamalai Murugan Temple</h3>
          <p>A renowned temple dedicated to Lord Murugan, situated atop a hill with scenic views of Coimbatore.</p>
        </div>
      </div>

      <div className="place">
        <img src={Place3Image} alt="Place 3" />
        <div className="place-info">
          <h3>Perur Pateeswarar Temple</h3>
          <p>The Perur Pateeswarar Temple is an ancient temple dedicated to Lord Shiva, known for its architectural beauty.</p>
        </div>
      </div>
    </div>
  );
};

export default Coimbatore;
