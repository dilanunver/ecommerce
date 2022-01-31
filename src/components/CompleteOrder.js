import React from 'react'
import '../companents.css/completeorder.css'
import { useLocation } from 'react-router-dom'




const CompleteOrder = () => {
  const { state } = useLocation();
  console.log(state.size)
  return (
    <div className='complete-order-page'>
      <div className='complete-order-header'>Your New Products</div>
      <div className='product-details-container'>
        <div className='product-details'>
          <div className='complete-order-image'>
            <img src={state.image} alt='order-img' className='order-img'></img>
          </div>
          <div className='complete-order-details'>
            <div className='product-order-title'>{state.title}</div>
            <div className='product-order-size'>{state.size.join()}</div>
            <div className='product-order-price'> €{state.price} </div>
            <div className='product-order-desc'> {state.description} </div>
            <div className='complete-order-line'></div>
          </div>
        </div>

      </div>


    </div>
  )



}

export default CompleteOrder;