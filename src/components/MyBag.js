import react, { useContext, useState } from "react";
import { MainContext } from "../Context";
import '../companents.css/mybag.css'

const MyBag = () => {
  const { selectedProducts, setSelectedProducts, increaseProductCount } = useContext(MainContext)

  const sumOfCount = selectedProducts.map((selectedProduct) => (selectedProduct.count));
  let sum = 0;
  for (let i = 0; i < sumOfCount.length; i++) {
    sum += sumOfCount[i];
  }

  const more = (product) => {
    increaseProductCount(product, 1)

  }
  const less = (product) => {
    increaseProductCount(product, -1)
  }


  return (
    <div className="mybag-products">
      <div className="mybag-complete-order">
        My Bag ({sum} Product)
      </div>
      {selectedProducts.map((selectedProduct) => {
        return (
          <div>
            <div className="mybag-flex">
              <img src={selectedProduct.image} alt="modal-img" className="modal-img"></img>
              <div className="mybagpage-info">
                <div >{selectedProduct.title}</div>
                <div className="mybag-amount">
                  <div className="mybag-adding-decreasing">
                    {selectedProduct.count < 2 ? <button className="mybag-decreasing disable" onClick={() => less(selectedProduct)} >-</button> :
                      <button className="mybag-decreasing" onClick={() => less(selectedProduct)} >-</button>}
                    <span className="selected-product-count">   {selectedProduct.count < 1 ? selectedProduct.count = 1 : selectedProduct.count}</span>
                    <button className="mybag-adding" onClick={() => more(selectedProduct)}>+</button>
                  </div>
                </div>
                <div className="mybagpage-price">€{selectedProduct.price}</div>
              </div>
            </div>
            <div className="mybagpage-line"></div>
          </div>

        )
      })}
      <div>

      </div>
    </div>
  )
}
export default MyBag