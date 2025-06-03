// src/components/SocialMediaIcons.js
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './SocialMediaIcons.css'; // Import your CSS file for styling

const SocialMediaIcons = () => {
  const message = encodeURIComponent("I am interested in traveling with Grand Tours and Travels.");

  const handleOpenLink = (url, platformName) => {
    let alertMessage = `You are being redirected to our ${platformName} page! Stay tuned for more travel updates and offers from Grand Tours & Travels.`;
    if (url.includes('wa.me')) {
      url += `?text=${message}`;
    }
    alert(alertMessage);
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    <div className="social-icons">
      <div className="social-icon" onClick={() => handleOpenLink('https://www.facebook.com', 'Facebook')}>
        <FaFacebook />
      </div>
      <div className="social-icon" onClick={() => handleOpenLink('https://www.instagram.com/grand_tours_and_travels?igsh=MWVla2xkajZiZ2Eydg==', 'Instagram')}>
        <FaInstagram />
      </div>
      <div className="social-icon" onClick={() => handleOpenLink('https://wa.me/7598283292', 'WhatsApp')}>
        <FaWhatsapp />
      </div>
      <div className="social-icon" onClick={() => handleOpenLink('mailto:grandtravelsmadurai@gmail.com', 'Email')}>
        <FaEnvelope />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
