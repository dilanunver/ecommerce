import React, { useContext } from "react";
import { MainContext } from "../Context";


const ButtonsForImagePage = ({ title, category, price, imgPreview, completeOrder, completedImage }) => {
  const { setShowInfo, setShowImage } = useContext(MainContext)



  const back = () => {
    setShowInfo(true)
    setShowImage(false)
  }
  console.log(completedImage)


  return (
    <div className='buttons'>
      <button className="back-button" onClick={back} >Back</button>
      {!completedImage ? <button className="complete-button-disable" >Complete Order</button> :
        <button className="complete-button" onClick={completeOrder}>Complete Order</button>
      }

    </div>

  )

}

export default ButtonsForImagePage;