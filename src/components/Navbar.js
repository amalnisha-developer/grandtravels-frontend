import React, { useState } from 'react';
import './Navbarstyles.css'; // Assuming it's your Navbar styles
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import gttLogo from '../assets/gttlogo.png';
import frontLogo from '../assets/frontlogo.png'; // Import your logo images

const Navbar = ({ sticky }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={`NavbarItems ${sticky ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={gttLogo} alt="Grand Tours & Travels Logo" className="logo-img mobile-logo" />
        <img src={frontLogo} alt="Front Logo" className="logo-img large-screen-logo" />
        <div className="large-screen-only">
          <span className="highlight" style={{ color: "#0095AF", padding: "4px", fontWeight: "bold" }}>GRAND</span>
          <span className="nav-title">Tours & Travels</span>
        </div>
      </div>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName} onClick={handleClick}>
              <i className={item.icon}></i>{item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
