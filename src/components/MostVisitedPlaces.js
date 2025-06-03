import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MostVisitedPlaces.css';
import sollavanthanImage from '../assets/sollavanthan.jpg';
import kovalamImage from '../assets/kovalam.jpg';
import rameshwaramImage from '../assets/rameshwaram.webp';
import trivandrumImage from '../assets/trivandrum.jpg';
import palaniImage from '../assets/palani.jpg';
import coimbatoreImage from '../assets/coimbatorr.jpg';
import salemImage from '../assets/salem.webp';
import tiruchirappalliImage from '../assets/tiruchirappalli.jpg';
import tirunelveliImage from '../assets/tirunelvel.jpeg';
import thanjavurImage from '../assets/thanjavur.webp';
import trichyImage from '../assets/trichy.jpg';
import dindigulImage from '../assets/dindigul.jpg';
import maduraiImage from '../assets/maduraii.jpg';
import chennaiImage from '../assets/chennai.jpg';
import thoothukudiImage from '../assets/thoothukudi.jpg';
import kumbakonamImage from '../assets/kumbakonam.webp';
import puducherryImage from '../assets/puducherry.jpg';
import kodikanalImage from '../assets/kodikanal.jpg';
import ootyImage from '../assets/ooty.jpg';

const MostVisitedPlaces = () => {
  const placesRef = useRef(null);

  const places = [
    { image: maduraiImage, heading: 'Madurai', text: 'Rich in cultural heritage.', path: '/madurai' },
    { image: chennaiImage, heading: 'Chennai', text: 'The vibrant capital of Tamil Nadu.', path: '/chennai' },
    { image: coimbatoreImage, heading: 'Coimbatore', text: 'Known for its textiles.', path: '/coimbatore' },
    { image: puducherryImage, heading: 'Pondicherry', text: 'A former French colony known for its architecture and beaches.', path: '/puducherry' },
    { image: kodikanalImage, heading: 'Kodaikanal', text: 'Famous hill station with scenic views.', path: '/kodaikanal' },
    { image: ootyImage, heading: 'Ooty', text: 'Queen of hill stations.', path: '/ooty' },
    { image: salemImage, heading: 'Salem', text: 'Famous for its mangoes.', path: '/salem' },
    { image: rameshwaramImage, heading: 'Rameshwaram', text: 'A holy pilgrimage site.', path: '/rameshwaram' },
    { image: tiruchirappalliImage, heading: 'Tiruchirappalli', text: 'Home to Rockfort Temple.', path: '/tiruchirappalli' },
    { image: trivandrumImage, heading: 'Trivandrum', text: 'The capital of Kerala.', path: '/trivandrum' },
    { image: palaniImage, heading: 'Palani', text: 'Known for its Murugan Temple.', path: '/palani' },
    { image: tirunelveliImage, heading: 'Tirunelveli', text: 'Famous for halwa.', path: '/tirunelveli' },
    { image: thanjavurImage, heading: 'Thanjavur', text: 'Renowned for Brihadeeswara Temple.', path: '/thanjavur' },
    { image: trichyImage, heading: 'Trichy', text: 'Known for its educational institutions.', path: '/trichy' },
    { image: dindigulImage, heading: 'Dindigul', text: 'Famous for locks and biryani.', path: '/dindigul' },
    { image: kovalamImage, heading: 'Kovalam', text: 'Known for its beautiful beaches.', path: '/kovalam' },
    { image: sollavanthanImage, heading: 'Sollavanthan', text: 'A charming village.', path: '/sollavanthan' },
    { image: thoothukudiImage, heading: 'Thoothukudi', text: 'Famous for its port and Pearl Fishery.', path: '/thoothukudi' },
    { image: kumbakonamImage, heading: 'Kumbakonam', text: 'Renowned for its temples and Mahamaham festival.', path: '/kumbakonam' },
  ];

  const scrollLeft = () => {
    placesRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    placesRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  const handleBookNow = (placeName) => {
    const whatsappNumber = '7598283292';
    const message = `I am interested in visiting ${placeName} with Grand Tours and Travels.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (placesRef.current) {
        placesRef.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
        if (placesRef.current.scrollLeft + placesRef.current.offsetWidth >= placesRef.current.scrollWidth) {
          placesRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="most-visited-places">
      <h1>Most Visited Places</h1>
      <div className="place-cards" ref={placesRef}>
        {places.map((place, index) => (
          <Link key={index} to={place.path} className="place-card">
            <div className="place-image">
              <img src={place.image} alt={place.heading} />
            </div>
            <h4>{place.heading}</h4>
            <p>{place.text}</p>
            <button className="book-now-button" onClick={() => handleBookNow(place.heading)}>Book Now</button>
          </Link>
        ))}
      </div>
      <div className="arrows">
        <div className="arrow arrow-left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="arrow arrow-right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default MostVisitedPlaces;
