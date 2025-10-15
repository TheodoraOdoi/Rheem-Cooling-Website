import React, { useState } from 'react';
import { X, Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRating, setUserRating] = useState(0);

  if (!product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const renderStars = (rating, interactive = false) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`star ${i <= rating ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
          onClick={interactive ? () => setUserRating(i) : undefined}
        />
      );
    }
    return stars;
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{product.name}</h2>
          <button onClick={onClose} className="close-button">
            <X className="icon" />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-grid">
            {/* Image Gallery */}
            <div className="image-section">
              <div className="main-image-container">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="main-image"
                />
                {product.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="image-nav prev">
                      <ChevronLeft className="icon" />
                    </button>
                    <button onClick={nextImage} className="image-nav next">
                      <ChevronRight className="icon" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="thumbnail-container">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="details-section">
              <div className="product-brand">{product.brand}</div>
              <h3 className="product-title">{product.name}</h3>

              <div className="rating-section">
                <div className="stars">{renderStars(product.rating)}</div>
                <span className="review-count">({product.reviews} reviews)</span>
              </div>

              <div className="pricing-section">
                <span className="current-price">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                )}
                {discount > 0 && (
                  <span className="discount-badge">{discount}% OFF</span>
                )}
              </div>

              <div className="specifications">
                <h4>Specifications:</h4>
                <div className="spec-grid">
                  <div className="spec-item">
                    <span className="spec-label">Tonnage:</span>
                    <span className="spec-value">{product.tonnage} Ton</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Color:</span>
                    <span className="spec-value">{product.color}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Coverage:</span>
                    <span className="spec-value">{product.coverageArea}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Category:</span>
                    <span className="spec-value">{product.category}</span>
                  </div>
                </div>
              </div>

              <div className="description-section">
                <h4>Description:</h4>
                <p>{product.description}</p>
              </div>

              <div className="features-section">
                <h4>Key Features:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="user-rating-section">
                <h4>Rate this product:</h4>
                <div className="user-rating">
                  {renderStars(userRating, true)}
                  <span className="rating-text">
                    {userRating > 0 ? `You rated ${userRating} stars` : 'Click to rate'}
                  </span>
                </div>
              </div>

              <div className="action-buttons">
                <button className="wishlist-main">
                  <Heart className="icon" />
                </button>
                <button
                  className="add-to-cart-button"
                  onClick={() => onAddToCart && onAddToCart(product)}
                  style={{ marginLeft: 12 }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;