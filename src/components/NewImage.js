import React, { useState } from 'react'
import '../companents.css/newproductimage.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const NewImage = () => {
  const [imgPreview, setImgPreview] = useState(null)
  const [error, setError] = useState(false)


  const handleImageChange = (e) => {
    const selected = e.target.files[0]
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image.jpg']
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result)
      }
      reader.readAsDataURL(selected)
    } else {
      setError(true)
    }
  }
  return (
    <div className="product-image-page">
      <div className='file-container'>
        {error && <p className='errorMessage'>File not supported</p>}
        <div
          className='imgPreview'
          style={{

            background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : `") no-repeat center`
          }}
        >
          {!imgPreview && (
            <>

              <label htmlFor='fileUpload' className='customFileUpload'>
                <AiOutlinePlusCircle></AiOutlinePlusCircle>
              </label>
              <p>Add an image</p>
              <input type='file' id='fileUpload' onChange={handleImageChange}></input>
              <span>(jpeg, jpg or png)</span>
            </>
          )}
        </div>

      </div>
      <div className='buttons'>
        <button className="back-button">Back</button>
        <button className="complete-button">Complete Order</button>
      </div>
    </div>
  )
}

export default NewImage