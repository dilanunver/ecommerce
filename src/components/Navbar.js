import React, { useContext } from "react";
import logo from '../pictures/logo.svg'
import cart from '../pictures/icon-cart.png'
import { Link } from "react-router-dom";
import '../companents.css/navbar.css'

import { MainContext } from "../Context";
import ShoppingCart from "./ShoppingCart";



const Navbar = () => {

  const { openModal, setOpenModal, modalIsOpen, setIsOpen, } = useContext(MainContext)
  const modalOpen = () => {
    setOpenModal(true)
    setIsOpen(true)
  }
  const modalClose = () => {
    setOpenModal(false)
    setIsOpen(false)
    console.log('modal close')
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


          <div className="image-cart">
            <img src={cart} alt='cart' onMouseEnter={modalOpen}></img>
            {modalIsOpen ? <ShoppingCart></ShoppingCart> : ''}
          </div>

        </div>

      </nav >
      <div className="line"></div>
    </div >
  )

}

export default Navbar;
