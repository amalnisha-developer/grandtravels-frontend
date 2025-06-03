import React from 'react';
import Hero from '../components/Hero';
import kutralam from '../assets/change.png';
import waterfall1 from '../assets/waterfall6.jpg'; // Add appropriate image paths
import waterfall2 from '../assets/waterfall2.jpeg';
import waterfall3 from '../assets/waterfall7.jpg';
import './KutralamStyles.css'; // Ensure the path is correct

const Kutralam = () => {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroImg={kutralam}
        title="Kutralam"
        url="/kutralam"
      />
      <div className="kutralam-content">
        <div className="content-section">
          <h1>Scenic Beauty of Kutralam</h1> {/* Custom heading for the first section */}
          <p>
            Kutralam, often referred to as the "Spa of South India," is a small town located in the Western Ghats of Tamil Nadu. It is renowned for its picturesque waterfalls, lush green surroundings, and therapeutic qualities of its waters. The town's waterfalls attract tourists from all over the country, who come to enjoy the scenic beauty and the rejuvenating baths.
          </p>
          <img src={waterfall1} alt="Kutralam Waterfall 1" className="content-image" />
        </div>
        <div className="content-section reverse">
          <h1>Attractions in Kutralam</h1> {/* Custom heading for the second section */}
          <p>
            The main attractions in Kutralam include the Main Falls, Five Falls, Old Falls, and Tiger Falls. Each of these waterfalls has its unique charm and offers a refreshing experience. Apart from the waterfalls, Kutralam is also known for its pleasant climate, rich flora and fauna, and tranquil atmosphere, making it an ideal destination for nature lovers and those seeking relaxation.
          </p>
          <img src={waterfall2} alt="Kutralam Waterfall 2" className="content-image" />
        </div>
        <div className="content-section">
          <h1>Exploring Nature in Kutralam</h1> {/* Custom heading for the third section */}
          <p>
            Visitors to Kutralam can also explore the nearby attractions such as the Palaruvi Falls, Thenmala Dam, and the Courtallam Wildlife Sanctuary. Whether you are looking to unwind in the natural beauty or seeking adventure in the wilderness, Kutralam has something to offer for everyone.
          </p>
          <img src={waterfall3} alt="Kutralam Waterfall 3" className="content-image" />
        </div>
      </div>
    </div>
  );
};

export default Kutralam;
