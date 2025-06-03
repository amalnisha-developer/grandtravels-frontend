import React from 'react';
import './AboutUsStyles.css'; // Assuming it's a CSS file

const AboutUs = () => {
    // Define your vision and mission statements
    const visionStatement = "To be the leading provider of unforgettable travel experiences, enriching lives globally.";
    const missionStatement = "Our mission is to create lasting memories for our customers by offering exceptional travel services with a focus on quality, affordability, and customer satisfaction.";

    // Paragraph explaining the reason for including the vision statement
    const whyChoose = "At Grand Tours and Travels, we believe that our vision statement reflects our commitment to excellence and innovation in the travel industry. By aspiring to be the leading provider of unforgettable travel experiences, we aim to set new standards and inspire travelers worldwide.";

    return (
        <div className='about-container'>
            <h1>Our History</h1>
            <p>We started Grand Tours and Travels in 2020 with friends who shared a passion for travel. Over the past four years, we have been successfully operating our travel business, offering affordable prices, ensuring customer satisfaction, and prioritizing customer comfort. These principles have been instrumental in our journey towards becoming a trusted name in travel services.</p>
            
            <h2>Why Choose Us?</h2>
            <p>{whyChoose}</p>

            <h2>Our Vision</h2>
            <p>{visionStatement}</p>

            <h2>Our Mission</h2>
            <p>{missionStatement}</p>
        </div>
    );
}

export default AboutUs;
