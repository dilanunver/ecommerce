import React, { useContext, useState } from 'react'
import '../companents.css/newproduct.css'
import { RiNumber1, RiNumber2 } from 'react-icons/ri'
import NewProductInfo from './NewProductInfo'
import NewImage from './NewImage'
import { MainContext } from "../Context";


const AddingNewProduct = () => {

  const { showInfo, setShowInfo, showImage, setShowImage } = useContext(MainContext)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [imgPreview, setImgPreview] = useState(null)

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
      {showInfo && <NewProductInfo title={title} setTitle={setTitle} category={category} setCategory={setCategory} price={price} setPrice={setPrice}></NewProductInfo>}
      {showImage && <NewImage imgPreview={imgPreview} setImgPreview={setImgPreview} title={title} category={category} price={price}></NewImage>}
    </div>
  )
}

export default AddingNewProduct