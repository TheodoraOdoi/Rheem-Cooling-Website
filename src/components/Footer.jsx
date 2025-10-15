import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-container">
                <h3>Rheem</h3>
              </div>
              <div className="brand-info">
                <h4>Cooling</h4>
                <p>Brighter Every Day</p>
              </div>
            </div>
            <p className="footer-description">
              Leading air conditioning retailer since 1998. We bring comfort to your life with premium cooling solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook className="icon" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="icon" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="icon" />
              </a>
              <a href="#" className="social-link">
                <Youtube className="icon" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="#">Split AC</a></li>
              <li><a href="#">Window AC</a></li>
              <li><a href="#">Cassette AC</a></li>
              <li><a href="#">Central AC</a></li>
              <li><a href="#">Portable AC</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Installation</a></li>
              <li><a href="#">Maintenance</a></li>
              <li><a href="#">Repair</a></li>
              <li><a href="#">AMC Plans</a></li>
              <li><a href="#">Extended Warranty</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info-f">
              <div className="contact-item-f">
                <Phone className="icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item-f">
                <Mail className="icon" />
                <span>info@rheemcooling.com</span>
              </div>
              <div className="contact-item-f">
                <MapPin className="icon" />
                <span>40+ Stores Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2025 Rheem Cooling. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;