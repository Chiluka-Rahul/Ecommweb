import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from '../../data.json';
import './ProductFeatures.css';

const productFeaturesList = data
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

const ProductFeatures = () => {
  const navigate = useNavigate();

  const setOpen = (id) => {
    navigate(`/products/${id}`);
  };

  const h = "FEATURES +";

  return (
    <div className='product-features-container'>
      <div className='inner-features-container'>
        <div className='product-features-heading-container'>
          <h1 className='product-features-heading'>{h}</h1>
          <Link to={"/products"}>
            <button className='product-features-button-view'>View All</button>
          </Link>
        </div>
        <div className='product-features-list-container'>
          {productFeaturesList.map((list, index) => (
            <div
              className='product-features-list'
              key={index}
              onClick={() => setOpen(list.id)}
            >
              <img
                src={list.img}
                alt={list.name}
                className='product-feature-image'
              />
              <span className='product-category-name'>{list.category}</span>
              <div className='product-features-details'>
                <h1>{list.name}</h1>
                <p>{`Rs. ${list.price} /-`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
