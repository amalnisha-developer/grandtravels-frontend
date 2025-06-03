import React, { useState, useEffect } from 'react';
import './CustomerReviewStyles.css'; // Import styles (to be created)

const reviewsData = [
    {
        id: 1,
        name: 'Athikan',
        tripType: 'Family Trip',
        rating: 5,
        review:
            'We had an amazing experience with Grand Tour and Travel. The car was comfortable, the driver was courteous, and everything was well-organized. Highly recommended!',
    },
    {
        id: 2,
        name: 'Lokesh',
        tripType: 'Friends Trip',
        rating: 4.5,
        review:
            'Our trip with Grand Tour and Travel was fantastic. The driver was knowledgeable about the area, and we felt safe throughout the journey. Great service!',
    },
    {
        id: 3,
        name: 'Vaishnavi',
        tripType: 'Temple Trip',
        rating: 4,
        review:
            'We booked a temple trip with Grand Tour and Travel. The service was prompt, and the car was clean and comfortable. Would use their service again!',
    },
    {
        id: 4,
        name: 'Murugan',
        tripType: 'Family Trip',
        rating: 4.5,
        review:
            'Our family had a wonderful time traveling with Grand Tour and Travel. The driver was friendly and accommodating, making our trip enjoyable.',
    },
    {
        id: 5,
        name: 'Abdul',
        tripType: 'Friends Trip',
        rating: 5,
        review:
            'Exceptional service from Grand Tour and Travel. We had a seamless journey with no issues. Definitely recommend them for your travel needs!',
    },
];

const CustomerReviewComponent = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="customer-review-container">
            <h2>Our Customer Reviews</h2>
            <div className="customer-review">
                {reviewsData.map((review, index) => (
                    <div
                        key={review.id}
                        className={`review ${index === currentReviewIndex ? 'active' : ''}`}
                    >
                        <div className="review-content">
                            <div className="review-header">
                                <span className="review-name">{review.name}</span>
                                <span className="review-trip">{review.tripType}</span>
                            </div>
                            <div className="review-stars">
                                {Array.from({ length: review.rating }, (_, index) => (
                                    <span key={index} role="img" aria-label="star">
                                        ⭐
                                    </span>
                                ))}
                            </div>
                            <p className="review-text">{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviewComponent;
