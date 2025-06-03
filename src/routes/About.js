import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/homee.avif';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const About = () => {


  return (
    <>
      <Navbar  />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg} 
        title="About Us"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
