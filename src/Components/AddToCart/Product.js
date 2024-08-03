// Product.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
