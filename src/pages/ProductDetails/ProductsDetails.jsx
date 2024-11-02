// ProductDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import Nav from '../../components/Nav';
import './ProductsDetails.css';

const ProductsDetails = ({ addToCart }) => {
  const [products] = useState(data);
  const { id } = useParams();
  const productId = id.startsWith(':') ? id.slice(1) : id;
  const productdetail = products.find((product) => product.id === productId);


  const [quantity, setQuantity] = useState(1);


  const increaseQuantity = () => setQuantity(quantity + 1);


  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <Nav />
      <div className='product-details-container'>
        <div className='product-details'>
          <img src={productdetail.img} alt={productdetail.name} className='product-image'/>
          <div className='product-item-list'>
            <h1 className='product-name'>{productdetail.name}</h1>
            <span className='product-seller'>{productdetail.seller}</span>
            <p className='product-price'>Rs. {productdetail.price}/-</p>
            <div className='product-description'>
              <h3>Description</h3>
              <p>{productdetail.description}</p>
            </div>    
            <div className='product-details-cart-container'>
              <p className='product-stock'>{`Only ${productdetail.stock} left in stock`}</p>
              <div className='product-increase-decrease'>
                <div className='flex-product'>
                  <p onClick={increaseQuantity} className='increase-qut'>+</p>
                  <span>{quantity}</span>
                  <p onClick={decreaseQuantity} className='decrease-qut'>-</p>
                </div>    
                <button 
                  className='product-addcart' 
                  onClick={() => addToCart({ ...productdetail, quantity })}
                >
                  Add to Cart
                </button>
              </div>    
            </div>    
          </div>    
        </div>    
      </div>
    </>
  );
};

export default ProductsDetails;
