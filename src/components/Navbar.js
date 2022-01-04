import React from "react";
import logo from '../pictures/logo.svg'
import { Link } from "react-router-dom";
import '../companents.css/navbar.css'




const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt='logo'></img>
      <Link to="/">
        Home
      </Link>
      <Link to="/categories">
        Categories
      </Link>
      <Link to="/contact">
        Contact
      </Link>

    </nav>
  )

}

export default Navbar;
