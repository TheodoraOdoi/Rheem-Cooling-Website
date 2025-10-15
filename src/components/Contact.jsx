import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: ' ',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our cooling experts</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have questions about our products or services? We're here to help! 
              Contact us through any of the following methods or visit one of our stores.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone className="icon" />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail className="icon" />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>info@rheemcooling.com</p>
                  <p>support@rheemcooling.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin className="icon" />
                </div>
                <div className="contact-details">
                  <h4>Head Office</h4>
                  <p>
                    123 Cooling Street,<br />
                    Technology Park,<br />
                    Mumbai - 400001
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock className="icon" />
                </div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="submit-button">
                <Send className="icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Store Locations */}
        <div className="store-locations">
          <h3>Our Store Locations</h3>
          <div className="locations-grid">
            {[
              { city: 'Mumbai', stores: 12, address: 'Multiple locations' },
              { city: 'Delhi', stores: 8, address: 'Multiple locations' },
              { city: 'Bangalore', stores: 6, address: 'Multiple locations' },
              { city: 'Chennai', stores: 5, address: 'Multiple locations' },
              { city: 'Pune', stores: 4, address: 'Multiple locations' },
              { city: 'Hyderabad', stores: 3, address: 'Multiple locations' },
              { city: 'Kolkata', stores: 2, address: 'Multiple locations' },
              { city: 'Ahmedabad', stores: 2, address: 'Multiple locations' },
            ].map((location, index) => (
              <div key={index} className="location-card">
                <h4>{location.city}</h4>
                <p className="store-count">{location.stores} Stores</p>
                <p className="store-address">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;