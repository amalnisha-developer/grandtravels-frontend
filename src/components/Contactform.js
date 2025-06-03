import React, { useState } from 'react';
import './ContactFormStyle.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message');
        }
    };

    return (
        <div className='form-container'>
            <h1>Send a Message to Us!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Name'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder='Email'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder='Phone Number'
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <textarea
                    placeholder='Message'
                    rows='4'
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
