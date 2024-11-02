// ProductHeader.jsx
import React from 'react';
import "./ProductHeader.css";

const ProductHeader = ({ menuItem, filterData, category, search, handleSearch }) => {
  return (
    <div className='product-header-container'>
      <input
        type='search'
        className='input-search'
        placeholder='Search products...'
        value={search}
        onChange={handleSearch}
      />
      <div className='product-header-ulist'>
        {menuItem.map((cat, index) => (
          <button
            className={`category-button ${category === cat ? 'active-button' : ''}`}
            onClick={() => filterData(cat)}
            key={index}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductHeader;
