import React from 'react';
import './DestinationStyles.css';
import Destinationdata from './Destinationdata';
import Place1 from '../assets/2.webp';
import Place2 from '../assets/chennaibeach.webp';
import Place3 from '../assets/ooty.jpg';
import Place4 from '../assets/ooty3.jpg';

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations in Tamil Nadu</h1>
      <p>
        Discover the beauty and cultural richness of Tamil Nadu. From the majestic temples of Madurai and Thanjavur to the scenic hills of Ooty and Kodaikanal, Tamil Nadu offers a variety of experiences for every traveler. Visit the pristine beaches of Chennai, explore the French colonial heritage of Pondicherry, and immerse yourself in the vibrant festivals and traditions of this southern state.
      </p>
      <Destinationdata
        className="first-des"
        heading="Madurai, Chennai"
        text="Madurai, known for the Meenakshi Amman Temple, is a historic city that showcases Dravidian architecture and vibrant culture. The temple's intricate carvings and the Hall of Thousand Pillars are particularly noteworthy. Chennai, the capital city, is famed for its Marina Beach, one of the longest urban beaches in the world. It also offers a rich blend of traditional and modern attractions, including historic temples, colonial architecture, and bustling markets."
        image1={Place1}
        image2={Place2}
      />
      <Destinationdata
        className="first-des-reverse"
        heading="Kodaikanal, Ooty"
        text="Kodaikanal, known as the 'Princess of Hill Stations,' is famous for its scenic beauty and tranquil lakes. Ooty, also called Udhagamandalam, is renowned for its tea plantations and the Nilgiri Mountain Railway, a UNESCO World Heritage site. Both destinations offer a cool climate and breathtaking landscapes, making them perfect escapes from city life. Visitors can enjoy a range of outdoor activities and explore the rich biodiversity of these regions. Both places are ideal for nature lovers and adventure enthusiasts."
        image1={Place3}
        image2={Place4}
      />
    </div>
  );
};

export default Destination;
