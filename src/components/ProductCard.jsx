import { Star, Heart } from 'lucide-react';

const ProductCard = ({ product, onProductClick, onAddToCart }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <div className="product-image-container">
        <img src={product.images[0]} alt={product.name} />
        {product.isTopSelling && (
          <span className="product-badge top-selling">Top Selling</span>
        )}
        {discount > 0 && (
          <span className="product-badge discount">{discount}% OFF</span>
        )}
        <button className="wishlist-button" onClick={e => { e.stopPropagation(); /* wishlist logic here */ }}>
          <Heart className="icon" />
        </button>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand} • {product.tonnage} Ton</p>
        
        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="review-count">({product.reviews})</span>
        </div>
        
        <div className="product-pricing">
          <span className="current-price">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-actions">
          <button className="view-details-button">View Details</button>
          <button
            className="add-to-cart-button"
            onClick={e => {
              e.stopPropagation();
              if (onAddToCart) onAddToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;