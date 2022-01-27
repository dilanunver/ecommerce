import React, { useContext } from "react";
import { MainContext } from "../Context";

const ButtonsForImagePage = () => {
  const { setShowInfo, setShowImage } = useContext(MainContext)


  const back = () => {
    setShowInfo(true)
    setShowImage(false)
  }

  return (
    <div className='buttons'>
      <button className="back-button" onClick={back} >Back</button>
      <button className="complete-button">Complete Order</button>
    </div>

  )

}

export default ButtonsForImagePage;