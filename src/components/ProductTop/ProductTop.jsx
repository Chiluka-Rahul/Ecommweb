import React from 'react'
import data from '../../data.json'
import { useNavigate } from 'react-router-dom';
import './ProductTop.css'

const randomProducts = data
    .sort(() => Math.random() - 0.5) 
    .slice(0, 3)



const ProductTop = () => {
    const navigate = useNavigate();
    const setOpen = (id) => {
        navigate(`/products/${id}`);
    };
  const h = "New Arrivals +"
  return (
    <div className='product-top-container'>
        <div className='inner-top-container'>
            <h1 className='product-top-heading'>
            {h}
            </h1>
            <div className='product-top-list-container'>
                {randomProducts.map((list, index) => {
                    return <div className='product-top-list' key={index} onClick={() => setOpen(list.id)}>
                        <img src={list.img} alt={list.name} className='product-top-image'/>
                        <span className='product-category-name'>{list.category}</span>
                        <div className='product-top-details'>
                            <h1>{list.name}</h1>
                            <p>{`Rs. ${list.price} /-`}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductTop