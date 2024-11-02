// Cart.jsx
import React from 'react';
import Nav from '../../components/Nav';
import './Cart.css';

const Cart = ({ cart, setCart }) => {

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };


  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    }
  };


  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };


  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <>
      <Nav />
      <div className="cart-container">
        <h2 className='cart-heading'>Your Cart</h2>
        <div className='cart-items-container'>

        
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <span className='cart-seller'>{item.seller}</span>
                <p className='cart-price'>Price: Rs. {item.price}/-</p>
                <div className='flex-cart'>
                  <div className='cart-quantity-controls'>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                    <p className='cart-span'>{item.quantity}</p>
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                  </div>
                  <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="cart-empty-message">

            <img src={`${process.env.PUBLIC_URL}/empty.jpg`}/>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Cart;
