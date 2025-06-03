import React from 'react';
import perDayImage from '../assets/shift.webp'; // Import image
import './TravelplanStyles.css'; // Import styles

const PerDayRentalComponent = () => {
    const handleBookNowClick = () => {
        window.location.href = "https://wa.me/7598283292?text=I'm%20interested%20in%20the%20per%20day%20rental%20package!";
    };

    return (
        <div className="container">
            <div className="package">
                <h2>Per Day Rental Package</h2>
                <img src={perDayImage} alt="Per Day Rental Package" />
                <p><strong>Rent per Day:</strong> Rs. 1500</p>
                <p><strong>Kilometer Limit:</strong> 10 km</p>
                <p><strong>Additional Charges:</strong> Toll and Parking</p>
                <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
            </div>
        </div>
    );
};

export default PerDayRentalComponent;
