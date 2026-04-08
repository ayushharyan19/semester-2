import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      <div className="input-section">
        <h2>Add Products</h2>
        <div className="input-group">
          <input placeholder="Product Name" type="text" />
          <input step="0.5" min="0" placeholder="Price" type="number"/>
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="cart-section">
        <h2>Your Cart</h2>
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Actions</span>
        </div>
        
        <div className="cart-item">
          <span>test</span>
          <span>121.00</span>
          <span>- 2 +</span>
          <span>242.00</span>
          <span>
            <button className="remove-btn">Remove</button>
          </span>
        </div>
      </div>

      <div className="cart-summary">
        <div className="total-text">Total: 242.00</div>
        <button className="checkout-btn">Checkout</button>
      </div>

    </div>
  );
}

export default App;