import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import FilterSidebar from './FilterSidebar';
import productsData from '../data/products.json';

const ProductGrid = ({ category, showTopSelling = false, onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [filters, setFilters] = useState({
    category: category || 'All',
    brand: 'All',
    tonnage: 'All',
    color: 'All',
    coverageArea: 'All',
    priceRange: [0, 100000],
  });

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  useEffect(() => {
    if (category) {
      setFilters(prevFilters => ({
        ...prevFilters,
        category: category
      }));
    }
  }, [category]);

  useEffect(() => {
    let filtered = products;

    // Apply category filter
    if (showTopSelling) {
      filtered = filtered.filter(product => product.isTopSelling);
    } else if (filters.category !== 'All') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Apply other filters
    if (filters.brand !== 'All') {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }
    if (filters.tonnage !== 'All') {
      filtered = filtered.filter(product => product.tonnage === filters.tonnage);
    }
    if (filters.color !== 'All') {
      filtered = filtered.filter(product => product.color === filters.color);
    }
    if (filters.coverageArea !== 'All') {
      filtered = filtered.filter(product => product.coverageArea === filters.coverageArea);
    }

    // Apply price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, filters, searchTerm, sortBy, showTopSelling]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="product-grid-container">
      {/* Filter Sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      {/* Main Content */}
      <div className="product-main-content">
        <div className="product-header">
        <div className="header-top">
          <h2 className="section-title">
            {showTopSelling ? 'Top Selling ACs' : category || 'All Products'}
          </h2>
          
          <div className="header-controls">
            {/* Search */}
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="mobile-filter-button"
            >
              <Filter className="icon" />
              Filters
            </button>
          </div>
        </div>
        
        <p className="results-count">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
            <button
              onClick={() => setFilters({
                category: 'All',
                brand: 'All',
                tonnage: 'All',
                color: 'All',
                coverageArea: 'All',
                priceRange: [0, 100000],
              })}
              className="reset-filters-button"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default ProductGrid;