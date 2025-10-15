import React from 'react';
import { Filter, X } from 'lucide-react';

const FilterSidebar = ({ filters, onFilterChange, isOpen, onClose }) => {
  const brands = ['All', 'Rheem', 'LG', 'Samsung', 'Daikin', 'Carrier', 'Mitsubishi', 'Voltas', 'Godrej'];
  const tonnages = ['All', '1', '1.5', '2', '2.5', '3', '4', '5'];
  const colors = ['All', 'White', 'Silver', 'Black', 'Blue'];
  const coverageAreas = ['All', '100-150 sq ft', '150-200 sq ft', '200-300 sq ft', '300-400 sq ft', '400+ sq ft'];
  const categories = ['All', 'Split AC', 'Window AC', 'Cassette AC'];

  const handleFilterChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    onFilterChange({
      category: 'All',
      brand: 'All',
      tonnage: 'All',
      color: 'All',
      coverageArea: 'All',
      priceRange: [0, 100000],
    });
  };

  return (
    <>
      
      {isOpen && <div className="filter-overlay" onClick={onClose} />}
      
      {/* Filter sidebar */}
      <div className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="filter-content">
          <div className="filter-header">
            <h2>
              <Filter className="icon" />
              Filters
            </h2>
            <button onClick={onClose} className="close-filter">
              <X className="icon" />
            </button>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h3>Category</h3>
            <div className="filter-options">
              {categories.map((category) => (
                <label key={category} className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="filter-group">
            <h3>Brand</h3>
            <div className="filter-options">
              {brands.map((brand) => (
                <label key={brand} className="filter-option">
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={filters.brand === brand}
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          
           <div className="filter-group">
            <h3>Tonnage</h3>
            <div className="filter-options">
              {tonnages.map((tonnage) => (
                <label key={tonnage} className="filter-option">
                  <input
                    type="radio"
                    name="tonnage"
                    value={tonnage}
                    checked={filters.tonnage === tonnage}
                    onChange={(e) => handleFilterChange('tonnage', e.target.value)}
                  />
                  <span>{tonnage} {tonnage !== 'All' ? 'Ton' : ''}</span>
                </label>
              ))}
            </div>
          </div>

          
          <div className="filter-group">
            <h3>Color</h3>
            <div className="filter-options">
              {colors.map((color) => (
                <label key={color} className="filter-option">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={filters.color === color}
                    onChange={(e) => handleFilterChange('color', e.target.value)}
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          Coverage Area Filter
          <div className="filter-group">
            <h3>Coverage Area</h3>
            <div className="filter-options">
              {coverageAreas.map((area) => (
                <label key={area} className="filter-option">
                  <input
                    type="radio"
                    name="coverageArea"
                    value={area}
                    checked={filters.coverageArea === area}
                    onChange={(e) => handleFilterChange('coverageArea', e.target.value)}
                  />
                  <span>{area}</span>
                </label>
              ))}
            </div>
          </div>

          
          <div className="filter-group">
            <h3>Price Range</h3>
            <div className="price-filter">
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                className="price-slider"
              />
              <div className="price-labels">
                <span>₹0</span>
                <span>₹{filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          
          <button onClick={resetFilters} className="reset-button">
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;