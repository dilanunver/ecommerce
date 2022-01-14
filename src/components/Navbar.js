import React, { useContext, useState } from "react";
import logo from '../pictures/logo.svg'
import cart from '../pictures/icon-cart.png'
import { Link } from "react-router-dom";
import '../companents.css/navbar.css'
import { MainContext } from "../Context";




const Navbar = () => {
  const { selectedProducts, setSelectedProducts, isOpenMyBag, setIsOpenMyBag } = useContext(MainContext)

  const sumOfCount = selectedProducts.map((selectedProduct) => (selectedProduct.count));
  let sum = 0;
  for (let i = 0; i < sumOfCount.length; i++) {
    sum += sumOfCount[i];
  }

  return (
    <div className="sticky">
      <nav className="navbar">
        <div className="image-logo">
          <img src={logo} alt='logo'></img>
        </div>
        <div className="links-cart">
          <div className="links">
            <Link to="/">
              Home
            </Link>
            <Link to="/categories">
              Categories
            </Link>
            <Link to="/contact">
              Contact
            </Link>
          </div>


          <div className="image-cart" onMouseEnter={() => setIsOpenMyBag(true)} onMouseLeave={() => setIsOpenMyBag(false)} >
            <img src={cart} alt='cart' className="cart-container" ></img>
            <div style={{ marginTop: 10 }}></div>
            <div className={`mybag-container ${isOpenMyBag && 'isOpen'}`}>
              <h5 className="mybag-header">My Shopping Bag ({sum} product)</h5>
              {selectedProducts.map((selectedProduct) => {
                return (
                  <div >
                    <div className="flex">
                      <img src={selectedProduct.image} alt="modal-img" className="modal-img"></img>
                      <div className="mybag-info">
                        <div>{selectedProduct.title}</div>
                        <div>Amount: {selectedProduct.count} </div>
                        <div>€{selectedProduct.price}</div>



                      </div>

                    </div>
                    <div className="mybag-line"></div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>

      </nav >
      <div className="line"></div>
    </div >
  )

}

export default Navbar;
