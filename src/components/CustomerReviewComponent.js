import React, { useState, useEffect } from 'react';
import './CustomerReviewStyles.css';
import reviewImg from "../assets/review.png"

const reviewsData = [
  {
    id: 1,
    name: 'KALI RAJ',
    tripType: 'Family Temple Trip – Thiruvadavur',
    rating: 5,
    review:
      'They provided us with a very good car and an excellent driver, and they showed us all around Madurai. We enjoyed our temple trip immensely thanks to Grand Travels.',
  },
  {
    id: 2,
    name: 'Maheshwaran',
    tripType: 'Kodaikanal – 3 Days',
    rating: 5,
    review:
      'They organized everything from A to Z. The driver was patient and supportive. Best trip experience!',
  },
  {
    id: 3,
    name: 'Swati Motwani',
    tripType: 'Madurai City Tour',
    rating: 5,
    review:
      'The driver was calm, supportive, and fluent in English. Made our experience smooth and enjoyable.',
  },
  {
    id: 4,
    name: 'Shantharam Nandagopal',
    tripType: 'Patient Transport',
    rating: 5,
    review:
      'Cab travel is really comfortable. One of the best drivers I’ve seen (Mr. Faizal) – caring and genuine.',
  },
  {
    id: 5,
    name: 'RVS D',
    tripType: 'Family Trip – Trichy',
    rating: 5,
    review:
      'Faizal was friendly, calm, and a great driver. We extended service the next day too. Reasonable fare!',
  },
  {
    id: 6,
    name: 'Dinesh Kumar',
    tripType: 'Munnar Couple Trip',
    rating: 5,
    review:
      'From planning to execution – everything was perfect. Friendly staff. Highly recommended!',
  },
];

const CustomerReviewComponent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviewsData.length);
    }, 7000); // ⏳ slower scroll – every 7 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="customer-review-container">
      <h2>What Our Customers Say</h2>
      <div className="customer-review">
        {reviewsData.map((review, i) => (
          <div key={review.id} className={`review ${i === index ? 'active' : ''}`}>
            <div className="review-content">
              <div className="review-header">
                <span className="review-name">{review.name}</span>
                <span className="review-trip">{review.tripType}</span>
              </div>
              <div className="review-stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="google-review-button">
          <img
    src={reviewImg}
    alt="Google Logo"
    className="google-logo"
  />
        <a
          href="https://www.google.com/maps/place/The+GRAND+Tours+and+Travels/@9.9784417,78.2019284,18z/data=!4m6!3m5!1s0x3b00c1400fd86857:0xe7f12c3606496632!8m2!3d9.9785368!4d78.2018479!16s%2Fg%2F11pv5m_fyt?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to View More Reviews on Google
        </a>
      </div>
    </div>
  );
};

export default CustomerReviewComponent;
