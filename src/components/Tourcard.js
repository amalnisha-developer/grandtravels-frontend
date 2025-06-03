import React from 'react';
import './TourStyles.css';

const TourCard = (props) => {
  return (
    <div className="tour-card">
      <div className="tour-image">
        <img src={props.image} alt={props.heading} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default TourCard;
