import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <div className='card'>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <div className='grid'>
                <li key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>

                  <div className='quantity'>
                    <button onClick={() => incrementQuantity(item._id)}>+</button>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => decrementQuantity(item._id)}>-</button>
                  </div>
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
