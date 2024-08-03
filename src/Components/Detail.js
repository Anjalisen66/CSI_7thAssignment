// Detail.js
import React, { useState, useEffect, useContext } from 'react';
import './Detail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Components/AddToCart/CartContext';

const Detail = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const getProducts = async () => {
    try {
      console.log('Fetching products for category:', category);
      const response = await axios.get(`http://localhost:7000/api/get-products/${category}`);
      console.log(response);
      if (response.data && response.data.data) {
        setProducts(response.data.data);
      } else {
        console.error('No products found in response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  const isInCart = (productId) => {
    return cart.some((item) => item._id === productId);
  };

  const handleCartToggle = (product) => {
    if (isInCart(product._id)) {
      removeFromCart(product._id);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <h1>Products in {category}</h1>
      <div className='Main-card'>
        {products.length > 0 ? (
          products.map((item) => (
            <div className='content' key={item._id}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <h3>{item.category}</h3>
              <h4>{item.price}/-</h4>
              <h4>{item.description}</h4>
              <button
                onClick={() => handleCartToggle(item)}
                style={{ backgroundColor: isInCart(item._id) ? 'red' : 'blue', color: 'white' }}
              >
                {isInCart(item._id) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
};

export default Detail;
