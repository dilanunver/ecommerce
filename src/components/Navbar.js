import React from "react";
import logo from '../pictures/logo.svg'
import cart from '../pictures/icon-cart.svg'
import { Link } from "react-router-dom";
import '../companents.css/navbar.css'




const Navbar = () => {
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
            <img src={cart} alt='cart'></img>
          </div>
        </div>

      </nav>
      <div className="line"></div>
    </div>
  )

}

export default Navbar;
