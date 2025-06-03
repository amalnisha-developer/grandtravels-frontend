import React from 'react';
import './DestinationStyles.css';


const Destinationdata = (props) => {
  return (
    <div className={props.className}>
      <div className='des-text'>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className='image'>
        <img src={props.image1} alt="Image 1" />
        <img src={props.image2} alt="Image 2" />
      </div>
    </div>
  );
};

export default Destinationdata;
