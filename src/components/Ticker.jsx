import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';

const Ticker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('Loading location...');

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Location access denied');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="ticker">
      <div className="ticker-content">
        <div className="ticker-item">
          <Calendar className="icon" />
          <span>{formatDate(currentTime)}</span>
        </div>
        <div className="ticker-item">
          <Clock className="icon" />
          <span>{formatTime(currentTime)}</span>
        </div>
        <div className="ticker-item">
          <MapPin className="icon" />
          <span>{location}</span>
        </div>
        <span className="ticker-offer">🌟 Special Offer: Up to 40% off on selected ACs! 🌟</span>
        <span>📞 Call now: +91 98765 43210</span>
        <span>🏪 Visit our 40+ stores nationwide</span>
      </div>
    </div>
  );
};

export default Ticker;