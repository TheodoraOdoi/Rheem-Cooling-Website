import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Header = ({ cartCount = 0 }) => {
  const [visitorCount, setVisitorCount] = useState(0);
  const hasRun = useRef(false);


  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;


    const count = localStorage.getItem('visitorCount');
    let newCount = 0;
    if (count) {
      newCount = parseInt(count) + 1;
    } else {
      newCount = 1247;
    }
    setVisitorCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  return (
    <header className="header">

      {/* Main header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-section">
              <div className="logo-container">
                <h1>Rheem</h1>
              </div>
              <div className="brand-info">
                <h2>Cooling</h2>
                <p>Brighter Every Day</p>
              </div>
            </div>

            {/* Visitor counter and cart */}
            <div className="header-actions">
              <div className="visitor-counter">
                <p>Visitors Today</p>
                <p className="count">{visitorCount.toLocaleString()}</p>
              </div>
              <div className="cart-counter">
                <span className="cart-label">Cart</span>
                <span className="cart-badge">{cartCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;