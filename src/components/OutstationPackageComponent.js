import React from 'react';
import outstationImage from '../assets/outstations.jpg'; // Import image
import './TravelplanStyles.css'; // Import styles

const OutstationPackageComponent = () => {
    const handleBookNowClick = () => {
        window.location.href = "https://wa.me/7598283292?text=I'm%20interested%20in%20the%20outstation%20package!";
    };

    return (
        <div className="container">
            <div className="package">
                <h2>Outstation Package</h2>
                <img src={outstationImage} alt="Outstation Package" />
                <p><strong>A/C:</strong> Rs. 14 per km</p>
                <p><strong>Driving Batta:</strong> Rs. 300</p>
                <p><strong>Additional Charges:</strong> Toll and Parking</p>
                <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
            </div>
        </div>
    );
};

export default OutstationPackageComponent;
