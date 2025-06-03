import React from 'react';
import localImage from '../assets/local.webp'; // Import image
import './TravelplanStyles.css'; // Import styles

const LocalPackageComponent = () => {
    const handleBookNowClick = () => {
        window.location.href = "https://wa.me/7598283292?text=I'm%20interested%20in%20the%20local%20package!";
    };

    return (
        <div className="container">
            <div className="package">
                <h2>Local Package</h2>
                <img src={localImage} alt="Local Package" />
                <p><strong>A/C:</strong> Rs. 300 per hour</p>
                <p><strong>Non A/C:</strong> Rs. 250 per hour</p>
                <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
            </div>
        </div>
    );
};

export default LocalPackageComponent;
