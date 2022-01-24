import React, { useState } from 'react'
import '../companents.css/newproduct.css'
import { RiNumber1, RiNumber2 } from 'react-icons/ri'
import NewProductInfo from './NewProductInfo'
import NewImage from './NewImage'


const AddingNewProduct = () => {
  const [showInfo, setShowInfo] = useState(true)
  const [showImage, setShowImage] = useState(false)
  const productInfo = () => {
    setShowInfo(true)
    setShowImage(false)
  }

  const productImage = () => {
    setShowImage(true)
    setShowInfo(false)
  }
  return (
    <div className='new-product-page'>
      <div className='new-product'>

        <div className='product-info' onClick={productInfo}> <RiNumber1 className='icon'> </RiNumber1>Product Information  </div>
        <div className='product-image' onClick={productImage}><RiNumber2 className='icon'> </RiNumber2>Product Image  </div>
      </div>
      <div className='new-product-line'></div>
      {showInfo && <NewProductInfo></NewProductInfo>}
      {showImage && <NewImage></NewImage>}
    </div>
  )
}

export default AddingNewProduct