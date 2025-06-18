import React from 'react';
import './AboutUsStyles.css';

const AboutUs = () => {
  const visionStatement = "To be the leading provider of unforgettable travel experiences, enriching lives globally.";
  const missionStatement = "Our mission is to create lasting memories for our customers by offering exceptional travel services with a focus on quality, affordability, and customer satisfaction.";
  const whyChoose = "At Grand Tours and Travels, we believe that our vision reflects our commitment to excellence and innovation in the travel industry.";

  const destinations = [
    "Madurai – The Temple City",
    "Rameshwaram – Pilgrimage by the Sea",
    "Kanyakumari – The Southern Tip of India",
    "Kodaikanal – The Princess of Hill Stations",
    "Tirupati – Divine Blessings & Serenity",
    "Trivandrum – Tradition Meets Tranquility",
    "Munnar – Misty Mountains & Tea Gardens",
    "Thekkady – Wild Forests and Calm Lakes",
    "Kochi – Culture, Forts & Sea Breeze",
    "Alleppey – Cruise the Backwaters in Style",
  ];

  const features = [
    "Clean, AC & well-maintained vehicles",
    "Professional and courteous drivers",
    "24/7 booking and customer support",
    "Affordable pricing with transparent service"
  ];

  return (
    <div className="about-container">
      <section className="history-section">
        <h1>Our Story</h1>
        <p>
          At The GRAND Tours and Travels, we believe every journey should be smooth, comfortable, and unforgettable.
          Based in Madurai, we are one of South India's most trusted tour and travel service providers. With four years of experience and thousands of happy customers,
          we specialize in offering reliable cab services and customized tour packages across South India.
        </p>
        <p>
          Whether you're planning a spiritual pilgrimage, a family vacation, or a romantic hill station retreat —
          our team ensures you enjoy every mile of the journey.
        </p>
      </section>

      <section className="highlight-section">
        <h2>Why Choose Us?</h2>
        <p>{whyChoose}</p>
        <ul>
          {features.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </section>

      <section className="vision-mission-section">
        <div className="vm-box">
          <h2>Our Vision</h2>
          <p>{visionStatement}</p>
        </div>
        <div className="vm-box">
          <h2>Our Mission</h2>
          <p>{missionStatement}</p>
        </div>
      </section>

      <section className="destination-section">
        <h2>🌍 Our Popular Tour Destinations</h2>
        <ul>
          {destinations.map((place, index) => (
            <li key={index}>📍 {place}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
