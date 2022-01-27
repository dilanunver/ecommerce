import React, { useContext } from "react";
import { MainContext } from "../Context";

const ButtonsForImagePage = ({ title, setTitle, category, setCategory, price, setPrice, imgPreview, setImgPreview }) => {
  const { setShowInfo, setShowImage } = useContext(MainContext)


  const back = () => {
    setShowInfo(true)
    setShowImage(false)
  }

  const completeOrder = () => {
    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(
        {
          title,
          price,
          image: imgPreview,
          category
        }
      )
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }

  return (
    <div className='buttons'>
      <button className="back-button" onClick={back} >Back</button>
      <button className="complete-button" onClick={completeOrder}>Complete Order</button>
    </div>

  )

}

export default ButtonsForImagePage;