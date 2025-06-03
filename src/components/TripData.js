import React from 'react';
import './TripStyles.css';

const Tripdata = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt={props.attribute} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Tripdata;
