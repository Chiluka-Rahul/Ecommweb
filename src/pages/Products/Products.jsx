// Products.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import './Products.css';
import data from '../../data';
import { useHid } from '../../context/HidContext';
import ProductHeader from '../../components/ProductHeader/ProductHeader';

const Products = () => {
  const { setHid } = useHid();
  const [productData, setProductData] = useState(data); 
  const [category, setCategory] = useState("All"); 
  const [search, setSearch] = useState(""); 
  const menuItem = ["All", ...new Set(data.map(product => product.category))];


  useEffect(() => {
    setHid(false); 
    return () => setHid(true); 
  }, [setHid]);

  const filterData = (cat) => {
    setCategory(cat); 
    setSearch(""); 

    if (cat === 'All') {
      setProductData(data); 
    } else {
      const filteredData = data.filter((item) => item.category === cat);
      setProductData(filteredData);
      console.log(filterData)
    }
  };


  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm) &&
      (category === 'All' || item.category === category)
    );

    setProductData(filteredData);
  };

  return (
    <>
      <Nav setHid={setHid} />
      <div className='product-heading-container'>
        <h1 className='product-heading'>Products</h1>
      </div>
      <div className='products-container'>
        <ProductHeader
          menuItem={menuItem}
          filterData={filterData}
          category={category}
          search={search}
          handleSearch={handleSearch}
        />
        <div className='products-containerrrs'>
          <div className='products-containers'>
            {/* {console.log("Product Data:", productData)} */}
            {productData.length > 0 ? productData.map((product, index) => (
              <div key={index} className="product-list">  
                <img src={product.img} alt={product.name} className='product-image' />
                <div className='product-details'>
                  <span className='product-name'>{product.name}</span> 
                  <div className='product-button-container'>
                    <span className='product-pricee'>Rs. {product.price}/-</span>
                    <Link to={`/products/${product.id}`}>
                      <button className='button'>View</button>
                    </Link>
                  </div>
                </div>
              </div>
            )) : <p className="no-products">No products found</p>}

          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
