import React from 'react';
import './FooterStyles.css';

const Footer = () => {
  const handleClick = (platform) => {
    const message = encodeURIComponent("I am interested in traveling with Grand Tours and Travels.");
    
    switch (platform) {
      case 'Facebook':
        window.location.href = 'https://facebook.com';
        break;
      case 'WhatsApp':
        window.location.href = `https://wa.me/917598283292?text=${message}`;
        break;
      case 'Instagram':
        window.location.href = 'https://www.instagram.com/grand_tours_and_travels?igsh=MWVla2xkajZiZ2Eydg==';
        break;
      case 'Email':
        window.location.href = `mailto:grandtravelsmadurai@gmail.com?subject=Travel Inquiry&body=${message}`;
        break;
      default:
        alert(`You are being redirected to our ${platform} page! Stay tuned for more travel updates and offers from Grand Tours & Travels.`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-title">GRAND Tours & Travels</h2>
          <p>
            Welcome to Grand Tours and Travels. We offer the best tour packages
            for honeymoon, family, friends, and more. Explore and enjoy your trips
            with us.
          </p>
        </div>

        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: grandtravelsmadurai@gmail.com</p>
          <p>Phone: +91 7598283292</p>
          <div className="socials">
            <a href="https://facebook.com" onClick={() => handleClick('Facebook')}><i className="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/917598283292?text=I%20am%20interested%20in%20traveling%20with%20Grand%20Tours%20and%20Travels." onClick={() => handleClick('WhatsApp')}><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/grand_tours_and_travels?igsh=MWVla2xkajZiZ2Eydg==" onClick={() => handleClick('Instagram')}><i className="fab fa-instagram"></i></a>
            <a href="mailto:grandtravelsmadurai@gmail.com?subject=Travel Inquiry&body=I am interested in traveling with Grand Tours and Travels." onClick={() => handleClick('Email')}><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Grand Tours and Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
