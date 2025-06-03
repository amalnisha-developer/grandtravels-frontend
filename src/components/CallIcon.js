// src/components/CallIcon.js
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './CallIcon.css';

const phoneNumber = '7598283292'; // Replace with your actual phone number

const CallIcon = () => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <a href={`tel:${phoneNumber}`} className="call-icon" onClick={handleCall}>
      <FaPhoneAlt />
    </a>
  );
};

export default CallIcon;
