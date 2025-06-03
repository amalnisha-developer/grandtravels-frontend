import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroImg from '../assets/homo.avif';
import Destination from '../components/Destination';
import Trip from './Trip';
import Tour from '../components/Tour';
import MostVisitedPlaces from '../components/MostVisitedPlaces';
import CustomerReviewComponent from '../components/CustomerReviewComponent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Grand Tours and Travels | Explore & Enjoy Trips</title>
        <meta
          name="description"
          content="Plan your dream vacation with Grand Tours and Travels. Explore top destinations, travel packages, customer reviews and more."
        />
        <meta
          name="keywords"
          content="travel, tours, vacation, destination, trip, tourism, holiday packages, grand tours"
        />
        <meta name="author" content="Grand Tours and Travels" />
        <meta property="og:title" content="Explore and Enjoy Your Trips" />
        <meta
          property="og:description"
          content="Discover amazing destinations with Grand Tours and Travels."
        />
        <meta property="og:image" content={HeroImg} />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="Explore and Enjoy Your Trips"
        text="Discover amazing destinations with Grand Tours and Travels."
        buttonText="Travel Package"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Tour />
      <MostVisitedPlaces />
      <CustomerReviewComponent />
      <Footer />
    </>
  );
};

export default Home;
