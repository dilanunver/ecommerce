import React, { useContext } from "react";
import '../companents.css/productinfo.css'
import { MainContext } from "../Context";

const NewProductInfo = ({ title, setTitle, category, setCategory, price, setPrice }) => {
  const { setShowInfo, setShowImage } = useContext(MainContext)



  const next = () => {
    setShowImage(true)
    setShowInfo(false)


  }


  return (
    <div className="product-information">
      <form className="information-input">
        <label htmlFor='title'>Title</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} defaultValue="enter a title" placeholder="enter a title"></input>
        <label htmlFor='category'>Category</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled selected>Select your option</option>
          <option value="Men's Clothing">Men's Clothing</option>
          <option value="Women's Clothing">Women's Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Jewelery">Jewelery</option>
        </select>
        <label htmlFor='price'>Price</label>
        <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder="enter a price" defaultValue="enter a price"></input>
      </form>
      <button className="next-button" onClick={next}>Next</button>
    </div>
  )
}

export default NewProductInfo