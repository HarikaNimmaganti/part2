 import React from 'react'
import { useState } from 'react';
function ProductItem({ product, onAddToCart }) {
    return (
      <div className="product-item">
        <span>{product.name}</span>
        <span>${product.price.toFixed(2)}</span>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    );
  }
  
export default function ProductList({products}) {
    const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => { 
    setCart([...cart, product]);
  };
  return (
    <div>
        <h2>ProductList</h2>
        {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
