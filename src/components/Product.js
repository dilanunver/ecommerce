import React, { useState, useEffect } from "react";
import cart from '../pictures/icon-cart.png'

const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(true)


  const decreasing = () => {
    if (count === 0) {
      setCount(0)

    } else {
      setCount(count - 1)
    }
  }
  useEffect(() => {
    isDisable()
  }, [count])

  const isDisable = () => {
    if (count > 0) {
      setDisable(false)
    } else {
      setDisable(true)
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
      <div className="counting">
        <div className="adding-decreasing">
          <button className="adding" onClick={() => setCount(count + 1)}>+</button>
          <span>{count}</span>
          <button className="decreasing" onClick={decreasing}>-</button>
        </div>
        <div>
          <button disabled={disable} className="add-to-cart">
            <img src={cart} alt='cart' className="cart-image"></img>
            <p > Add to cart</p>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Product;

