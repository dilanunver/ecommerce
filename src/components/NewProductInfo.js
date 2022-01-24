import React from "react";
import '../companents.css/productinfo.css'

const NewProductInfo = () => {
  return (
    <div className="product-information">
      <form className="information-input">
        <label htmlFor='title'>Title</label>
        <input type='text' placeholder="enter a title"></input>
        <label htmlFor='category'>Category</label>
        <select id="category">
          <option value="" disabled selected>Select your option</option>
          <option value="Men's Clothing">Men's Clothing</option>
          <option value="Women's Clothing">Women's Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Jewelery">Jewelery</option>
        </select>
        <label htmlFor='price'>Price</label>
        <input type='text' placeholder="enter a price"></input>
      </form>
      <button className="next-button">Next</button>
    </div>
  )
}

export default NewProductInfo