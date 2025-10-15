import React from 'react';
import { Award, Users, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Rheem Cooling</h2>
          <p>Bringing comfort to your life since 1998</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="/images/about-us.webp"
              alt="Rheem Cooling Store"
            />
          </div>

          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Founded in 1998, Rheem Cooling has been at the forefront of providing exceptional 
              air conditioning solutions to customers across the nation. What started as a small 
              family business has grown into a trusted retail chain with over 40 stores nationwide.
            </p>
            <p>
              Our commitment to quality, service, and customer satisfaction has made us a preferred 
              choice for both residential and commercial cooling needs. We believe in making every 
              day "Brighter Every Day" through our innovative cooling solutions.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <Calendar className="icon" />
                </div>
                <h4>27+ Years</h4>
                <p>of Excellence</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <MapPin className="icon" />
                </div>
                <h4>40+ Stores</h4>
                <p>Nationwide</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Award className="icon" />
                </div>
                <h4>20+ Brands</h4>
                <p>Premium Quality</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Users className="icon" />
                </div>
                <h4>1M+ Customers</h4>
                <p>Satisfied</p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <Award className="icon" />
              </div>
              <h4>Quality First</h4>
              <p>
                We partner with only the most trusted brands to ensure you get the best 
                quality products that last for years.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Users className="icon" />
              </div>
              <h4>Customer Focused</h4>
              <p>
                Your satisfaction is our priority. We provide personalized service and 
                support throughout your journey with us.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <MapPin className="icon" />
              </div>
              <h4>Nationwide Service</h4>
              <p>
                With 40+ stores across the country, we're always close to you, ready to 
                serve your cooling needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;