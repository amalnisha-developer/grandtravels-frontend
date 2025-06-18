import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroImg from '../assets/homo.avif';
import Destination from '../components/Destination';
import Trip from './Trip';
// import gttImg from "../assets/gtt.png" 

import Tour from '../components/Tour';
import MostVisitedPlaces from '../components/MostVisitedPlaces';
import CustomerReviewComponent from '../components/CustomerReviewComponent';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <>
<Navbar />
<Hero
  cName="hero"
  heroImg={HeroImg}
  // gttImg={gttImg}
  title="Explore and Enjoy Your Trips"
  text="Discover amazing destinations with Grand Tours and Travels."
  buttons={[
    { type: 'tel', label: 'Call Us', href: 'tel:7598283292' },
    { type: 'link', label: 'View Packages', to: '/travel-plan' },
    { type: 'whatsapp', label: 'WhatsApp Us', href: 'https://wa.me/7598283292' }
  ]}
  btnClass="show"
/>

      <Destination />
      <Trip />
      <Tour />
      <MostVisitedPlaces />
      <CustomerReviewComponent/>
      <Footer />
    </>
  );
};

export default Home;
