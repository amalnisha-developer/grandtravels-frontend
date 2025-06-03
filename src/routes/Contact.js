import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contactus from '../assets/contact.png';
import ContactForm from '../components/Contactform';

import Footer from '../components/Footer';
const Contact = () => {

  return (
    <>
      <Navbar  />
      <Hero 
        cName="hero-mid"
        heroImg={Contactus} 
        title="Contact Us"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
};

export default Contact;
