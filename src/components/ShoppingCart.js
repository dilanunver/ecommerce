import React, { useContext } from 'react';
import Modal from 'react-modal';
import { MainContext } from '../Context';

const ShoppingCart = () => {
  const { modalIsOpen, setIsOpen, selectedProducts, setSelectedProducts } = useContext(MainContext)

  const sumOfCount = selectedProducts.map((selectedProduct) => (selectedProduct.count));
  let sum = 0;
  for (let i = 0; i < sumOfCount.length; i++) {
    sum += sumOfCount[i];
  }
  return (
    <Modal

      isOpen={modalIsOpen}
      className="add-to-cart-modal"
      ariaHideApp={false}
    >
      <h5>My Shopping Bag ({sum} product)</h5>
      {selectedProducts.map((selectedProduct) => {
        return (
          <>

            <div className="modal-flex">
              <img src={selectedProduct.image} alt="modal-img" className="modal-img"></img>
              <div className="modal-info">
                <div>{selectedProduct.title}</div>
                <div>Amount:{selectedProduct.count} </div>
                <div>€{selectedProduct.price}</div>

              </div>
            </div>
          </>
        )

      })}
      <button onClick={() => setIsOpen(false)}>Back to the shopping</button>
    </Modal>
  )
}

export default ShoppingCart;