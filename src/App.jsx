// App.jsx

import React, { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const calculateDiscount = () => {
    if (price && discount) {
      const discountAmount = (price * discount) / 100;
      setDiscountedPrice(price - discountAmount);
    } else {
      alert('Please enter valid price and discount values.');
    }
  };

  return (
    <div className="back">
      <div className="app-container">
      <h1 style={{fontSize:"38px", fontWeight:"800", marginBottom:"35px", color:"yellow", textDecoration:"underline", marginTop:"82px"}}>Discount <br /> Calculator</h1>
      <input
        type="number"
        placeholder="Enter original price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      /> <br />
      <input
        type="number"
        placeholder="Enter discount %"
        value={discount}
        onChange={(e) => setDiscount(Number(e.target.value))}
      /> <br />
      <button onClick={calculateDiscount}>Calculate Discount</button>

      {discountedPrice !== null && (
        <div className="result" style={{color:"white", fontSize:"22px" , fontWeight:"bolder"}}>
          Discounted Price: ${discountedPrice.toFixed(2)}
        </div>
      )}
    </div>
    </div>
  );
}

export default App;

