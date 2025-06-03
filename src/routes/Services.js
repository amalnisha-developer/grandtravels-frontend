import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Service from '../assets/homo.avif';
import Footer from '../components/Footer';
import ServiceContent from '../components/ServiceContent';
import OurGoalsComponent from '../components/OurGoalsComponent';

const Services = () => {
  

  return (
    <>
      <Navbar  />
      <Hero 
        cName="hero-mid"
        heroImg={Service} 
        title="Our Services"
        text="Welcome to our service page where we offer various travel packages tailored to your needs.
"
      />
      <ServiceContent/>
      <OurGoalsComponent />

      <Footer />
    </>
  );
};

export default Services;
