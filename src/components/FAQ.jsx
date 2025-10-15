import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What brands of air conditioners do you carry?",
      answer: "We carry over 20 premium brands including Rheem, LG, Samsung, Daikin, Carrier, Mitsubishi, Voltas, Godrej, and many more. Each brand is carefully selected for quality and reliability."
    },
    {
      id: 2,
      question: "Do you provide installation services?",
      answer: "Yes, we provide professional installation services for all our AC units. Our certified technicians ensure proper installation with a warranty on both the product and installation work."
    },
    {
      id: 3,
      question: "What is your warranty policy?",
      answer: "We offer comprehensive warranty coverage that varies by brand and model. Typically, compressors have 5-10 year warranties, while other components have 1-2 year warranties. We also provide extended warranty options."
    },
    {
      id: 4,
      question: "How do I choose the right tonnage for my room?",
      answer: "Room size is the primary factor. Generally: 1 ton for 100-120 sq ft, 1.5 ton for 150-180 sq ft, 2 ton for 200-250 sq ft. Other factors include ceiling height, number of windows, and heat sources."
    },
    {
      id: 5,
      question: "Do you offer financing options?",
      answer: "Yes, we offer various financing options including 0% EMI plans, credit card EMI, and partnerships with leading banks. Contact our sales team for current offers and eligibility."
    },
    {
      id: 6,
      question: "What is your return and exchange policy?",
      answer: "We offer a 7-day return policy for unused products in original packaging. Exchanges are allowed within 15 days for manufacturing defects. Installation issues are covered under our service warranty."
    },
    {
      id: 7,
      question: "Do you provide maintenance services?",
      answer: "Yes, we offer comprehensive maintenance services including annual maintenance contracts (AMC), cleaning, gas refilling, and repair services. Our trained technicians serve all major brands."
    },
    {
      id: 8,
      question: "How can I track my order?",
      answer: "You can track your order through our website using your order number and mobile number. We also send SMS and email updates for order confirmation, dispatch, and delivery."
    },
    {
      id: 9,
      question: "What are your delivery charges?",
      answer: "Delivery charges vary by location and product weight. We offer free delivery for orders above ₹25,000 in most cities. Standard delivery charges range from ₹500-1500 depending on location."
    },
    {
      id: 10,
      question: "Can I buy online and pick up from store?",
      answer: "Yes, we offer 'Buy Online, Pick Up In Store' service. You can place your order online and collect it from any of our 40+ store locations at your convenience."
    }
  ];

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our products and services</p>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {faqData.map((item) => (
              <div key={item.id} className="faq-item">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="faq-question"
                >
                  <h3>{item.question}</h3>
                  {activeItem === item.id ? (
                    <ChevronUp className="icon" />
                  ) : (
                    <ChevronDown className="icon" />
                  )}
                </button>
                {activeItem === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="contact-buttons">
            <button className="contact-button primary">
              Call Us: +91 98765 43210
            </button>
            <button className="contact-button secondary">
              Email: info@rheemcooling.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;