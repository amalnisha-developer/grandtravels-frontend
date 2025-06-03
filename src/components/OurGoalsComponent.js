import React from 'react';
import './OurGoalsStyles.css'; // Import styles

const OurGoalsComponent = () => {
    return (
        <div className="our-goals-container">
            <h2 className='goal-heading'>Our Goals</h2>
            <div className="our-goals">
                <div className="goal">
                    <span className="goal-icon">🕒</span>
                    <h3>24*7 Support</h3>
                    <p>We provide round-the-clock support to ensure your needs are met anytime.</p>
                </div>
                <div className="goal">
                    <span className="goal-icon">😊</span>
                    <h3>Customer Satisfaction</h3>
                    <p>Our goal is to ensure every customer is satisfied with our services.</p>
                </div>
                <div className="goal">
                    <span className="goal-icon">💲</span>
                    <h3>Affordable Price</h3>
                    <p>We offer affordable packages without compromising on quality.</p>
                </div>
            </div>
        </div>
    );
};

export default OurGoalsComponent;
