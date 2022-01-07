import React, { useState } from "react";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);

  const decreasing = () => {
    if (count === 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className="img-info">
      <div className="image-div">
        <img src={product.image} alt="product-img"></img>
      </div>
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-price">€{product.price}</p>
      </div>
      <div className="adding-decreasing">
        <p className="adding" onClick={() => setCount(count + 1)}>+</p>
        <span>{count}</span>
        <p className="decreasing" onClick={decreasing}>-</p>
      </div>

    </div>
  )
}

export default Product;

