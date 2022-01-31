import React, { useContext } from "react";
import '../companents.css/productinfo.css'
import { MainContext } from "../Context";

const NewProductInfo = ({ title, setTitle, category, setCategory, price, setPrice, desc, setDesc, size, setSize, completedOrder }) => {
  const { setShowInfo, setShowImage } = useContext(MainContext)

  const handleSize = (e) => {
    const nameOfTarget = e.target.name;
    if (e.target.checked && !size.includes(nameOfTarget)) {

      setSize([...size, nameOfTarget])
    } else {
      const newSize = [...size].filter(oneSize => oneSize !== e.target.name)
      setSize(newSize)
    }
  }

  const next = () => {
    setShowImage(true)
    setShowInfo(false)


  }
  console.log(completedOrder)

  return (
    <div className="product-information">
      <form className="information-input">
        <label htmlFor='title'>Title</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="enter a title"></input>
        <label htmlFor='category'>Category</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled defaultValue>Select your option</option>
          <option value="Men's Clothing">Men's Clothing</option>
          <option value="Women's Clothing">Women's Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Jewelery">Jewelery</option>
        </select>
        <div className="checkbox-container">
          <div className="checkbox-container-label">
            <p>Choose size you want to buy</p>
          </div>
          <div className="checkbox-container-size">
            <input type="checkbox" onChange={handleSize} id="small" name="small" />
            <label htmlFor="small" className="small">Small</label>
            <input type="checkbox" onChange={handleSize} id="medium" name="medium" />
            <label htmlFor="medium" className="medium">Medium</label>
            <input type="checkbox" onChange={handleSize} id="large" name="large" />
            <label htmlFor="large" className="large">Large</label>
          </div>
        </div>
        <label htmlFor='price'>Price</label>
        <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder="enter a price"></input>
        <label htmlFor='description'>Description</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="enter a description"></textarea>
      </form>
      {!completedOrder ? <button className="next-button-disable">Next</button> :
        <button className="next-button" onClick={next}>Next</button>}

    </div>
  )
}

export default NewProductInfo