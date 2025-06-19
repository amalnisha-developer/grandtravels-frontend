import React, { useState } from 'react';
import './ContactFormStyle.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    pickupPlace: '',
    destination: '',
    people: '',
    travelDate: '',
    vacationType: '',
    carType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://grandtoursandtravelsbackend.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Travel enquiry submitted!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          nationality: '',
          pickupPlace: '',
          destination: '',
          people: '',
          travelDate: '',
          vacationType: '',
          carType: '',
          message: '',
        });
      } else {
        alert('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the enquiry');
    }
  };

  return (
    <div className="form-container">
      <h1>Submit Your Travel Enquiry</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
        <input name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} required />
        <input name="pickupPlace" placeholder="Pick-up Place" value={formData.pickupPlace} onChange={handleChange} required />
        <input name="destination" placeholder="Travel Destination" value={formData.destination} onChange={handleChange} required />
        <input name="people" type="number" placeholder="No. of People" value={formData.people} onChange={handleChange} required />
        <input name="travelDate" type="date" value={formData.travelDate} onChange={handleChange} required />
        
        <select name="vacationType" value={formData.vacationType} onChange={handleChange} required>
          <option value="">Type of Vacation</option>
          <option value="Solo Trip">Solo Trip</option>
          <option value="Group Tour">Group Tour</option>
          <option value="Family Tour">Family Tour</option>
          <option value="Honeymoon Tour">Honeymoon Tour</option>
          <option value="Student Edutours">Student Edutours</option>
        </select>

        <select name="carType" value={formData.carType} onChange={handleChange} required>
          <option value="">Preferred Car Type</option>
          <option value="Hatchback">Hatchback (WagonR, Bolt, Indica)</option>
          <option value="Sedan">Sedan (Dzire, Etios, Zest)</option>
          <option value="SUV">SUV (Xylo, Tavera)</option>
          <option value="Toyota Innova">Toyota Innova</option>
          <option value="Innova Crysta">Innova Crysta</option>
          <option value="Tempo Traveller">Tempo Traveller</option>
        </select>

        <textarea name="message" className='full-width' placeholder="Additional Message" rows="4" value={formData.message} onChange={handleChange} c />

        <div className="button-wrapper full-width">
          <button type="submit">Submit Enquiry</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
