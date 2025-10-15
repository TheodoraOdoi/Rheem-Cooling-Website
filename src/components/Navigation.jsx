import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'split-ac', label: 'Split AC' },
    { id: 'window-ac', label: 'Window AC' },
    { id: 'cassette-ac', label: 'Cassette AC' },
    { id: 'top-selling', label: 'Top Selling ACs' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleMenuClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          {/* Desktop menu */}
          <div className="desktop-menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-items">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`mobile-nav-button ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;