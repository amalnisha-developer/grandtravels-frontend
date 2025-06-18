import React from 'react';
import './Tariff.css';
import hatchbackImg from '../assets/hatchbag.png';
import sedanImg from '../assets/sedan.png';
import etiosImg from '../assets/etios.png';
import suvImg from '../assets/suv.png';
import innovaImg from '../assets/innova.png';
import crystaImg from '../assets/crysta.png';
import tempoImg from '../assets/tempo.png';

const Tariff = () => {
  const whatsappNumber = '7598283292';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20booking%20a%20vehicle.%20Please%20share%20details.`;

  const cars = [
    {
      title: "Any Hatchback",
      subtitle: "(WagonR, Bolt, Indica or similar)",
      img: hatchbackImg,
      ac: "A/C",
      seats: "4 Seats",
      bags: "3 Bags",
      dayRent: "₹1400",
      fuelCharge: "₹10/km",
      kmFare: "₹12/km",
      driverBatta: "₹300",
      belowKM: 250,
    },
    {
      title: "Any Sedan",
      subtitle: "(Dzire, Zest, Xcent or similar)",
      img: sedanImg,
      ac: "A/C",
      seats: "4 Seats",
      bags: "4 Bags",
      dayRent: "₹1600",
      fuelCharge: "₹10/km",
      kmFare: "₹13/km",
      driverBatta: "₹400",
      belowKM: 250,
    },
    {
      title: "Toyota Etios",
      subtitle: "(Assured Toyota Etios)",
      img: etiosImg,
      ac: "A/C",
      seats: "4 Seats",
      bags: "5 Bags",
      dayRent: "₹1700",
      fuelCharge: "₹11/km",
      kmFare: "₹14/km",
      driverBatta: "₹400",
      belowKM: 250,
    },
    {
      title: "Any SUV",
      subtitle: "(Xylo / Tavera or similar)",
      img: suvImg,
      ac: "A/C",
      seats: "7 Seats",
      bags: "7 Bags",
      dayRent: "₹2200",
      fuelCharge: "₹12/km",
      kmFare: "₹17/km",
      driverBatta: "₹400",
      belowKM: 300,
    },
    {
      title: "Toyota Innova",
      subtitle: "(Assured Toyota Innova)",
      img: innovaImg,
      ac: "A/C",
      seats: "7 Seats",
      bags: "7 Bags",
      dayRent: "₹2300",
      fuelCharge: "₹13/km",
      kmFare: "₹18/km",
      driverBatta: "₹500",
      belowKM: 300,
    },
    {
      title: "Innova Crysta",
      subtitle: "(Assured Innova Crysta)",
      img: crystaImg,
      ac: "A/C",
      seats: "7 Seats",
      bags: "7 Bags",
      dayRent: "₹2600",
      fuelCharge: "₹16/km",
      kmFare: "₹24/km",
      driverBatta: "₹500",
      belowKM: 350,
    },
{
  title: "Tempo Traveller",
  subtitle: "(Assured Tempo Traveller)",
  img: tempoImg, // Replace with correct image import for Tempo Traveller
  ac: "A/C",
  seats: "12 Seats",
  bags: "10 Bags",
  dayRent: "₹2600",
  fuelCharge: "₹18/km",
  kmFare: "₹25/km",
  belowKM: 350,
  driverBatta: "₹500",

}

  ];

  return (
    <section className="tariff-section">
      <h2 className="tariff-title">Our Tariff</h2>
      <div className="tariff-wrapper">
        {cars.map((car, index) => (
          <div className="tariff-card" key={index}>
            <img src={car.img} alt={car.title} />
            <h3>{car.title}</h3>
            <p className="subtitle">{car.subtitle}</p>
            <div className="features">
              <span>❄️ {car.ac}</span>
              <span>🪑 {car.seats}</span>
              <span>🧳 {car.bags}</span>
            </div>

            <div className="rate-table">
              <div className="rate-header">For below {car.belowKM} KM</div>
              <div className="rate-row">Day Rental <span>{car.dayRent}</span></div>
              <div className="rate-row">Fuel Charge <span>{car.fuelCharge}</span></div>
              <div className="rate-header">For above {car.belowKM} km</div>
              <div className="rate-row">KM Fare <span>{car.kmFare}</span></div>
              <div className="rate-row">Driver Batta <span>{car.driverBatta}</span></div>
            </div>

            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <button className="book-now-btn">Book Now</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tariff;
