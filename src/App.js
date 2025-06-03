import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import TravelPlan from './routes/TravelPlan'; // Replace with your actual component path
import Trip from './routes/Trip';
import Kutralam from './components/Kutralam';
import Kanniyakumari from './components/Kanniyakumari';
import Kerala from './components/Kerala';
import Madurai from './components/Madurai';
import Chennai from './components/Chennai';
import Coimbatore from './components/Coimbatore';
import Salem from './components/Salem';
import Rameshwaram from './components/Rameshwaram';
import Tiruchirappalli from './components/Tiruchirappalli';
import Trivandrum from './components/Trivandrum';
import Palani from './components/Palani';
import Tirunelveli from './components/Tirunelveli';
import Thanjavur from './components/Thanjavur';
import Trichy from './components/Trichy';
import Dindigul from './components/Dindigul';
import Kovalam from './components/Kovalam';
import Sollavanthan from './components/Sollavanthan';
import Puducherry from './components/Puducherry'; // Import Puducherry component
import Kodaikanal from './components/Kodaikanal'; // Import Kodaikanal component
import Ooty from './components/Ooty'; // Import Ooty component
import Kumbakonam from './components/Kumbakonam'; // Import Kumbakonam component
import Thoothukudi from './components/Thoothukudi'; // Import Thoothukudi component
import MostVisitedPlaces from './components/MostVisitedPlaces'; // Import MostVisitedPlaces component
import CallIcon from './components/CallIcon';
import SocialMediaIcons from './components/SocialMediaIcons';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop


function App() {
  return (
    <div className="App">
            <ScrollToTop /> {/* Include ScrollToTop at the top level */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel-plan" element={<TravelPlan />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/kutralam" element={<Kutralam />} />
        <Route path="/kanniyakumari" element={<Kanniyakumari />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/madurai" element={<Madurai />} />
        <Route path="/chennai" element={<Chennai />} />
        <Route path="/coimbatore" element={<Coimbatore />} />
        <Route path="/salem" element={<Salem />} />
        <Route path="/rameshwaram" element={<Rameshwaram />} />
        <Route path="/tiruchirappalli" element={<Tiruchirappalli />} />
        <Route path="/trivandrum" element={<Trivandrum />} />
        <Route path="/palani" element={<Palani />} />
        <Route path="/tirunelveli" element={<Tirunelveli />} />
        <Route path="/thanjavur" element={<Thanjavur />} />
        <Route path="/trichy" element={<Trichy />} />
        <Route path="/dindigul" element={<Dindigul />} />
        <Route path="/kovalam" element={<Kovalam />} />
        <Route path="/sollavanthan" element={<Sollavanthan />} />
        <Route path="/puducherry" element={<Puducherry />} />
        <Route path="/kodaikanal" element={<Kodaikanal />} />
        <Route path="/ooty" element={<Ooty />} />
        <Route path="/kumbakonam" element={<Kumbakonam />} />
        <Route path="/thoothukudi" element={<Thoothukudi />} /> {/* Add Thoothukudi route */}
        <Route path="/most-visited-places" element={<MostVisitedPlaces />} />
      </Routes>
      <div>
        <SocialMediaIcons />
      </div>
      <CallIcon />
    </div>
  );
}

export default App;
