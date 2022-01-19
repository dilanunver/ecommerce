import React from 'react'
import '../companents.css/newproduct.css'
import { RiNumber1, RiNumber2 } from 'react-icons/ri'

const AddingNewProduct = () => {
  return (
    <div className='new-product-page'>
      <div className='new-product'>

        <div className='product-info'> <RiNumber1 className='icon'> </RiNumber1>Product Information  </div>
        <div className='product-image'><RiNumber2 className='icon'> </RiNumber2>Product Image  </div>
      </div>
      <div className='new-product-line'></div>
    </div>
  )
}

export default AddingNewProduct