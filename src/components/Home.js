import React, { useContext } from "react";
import homePhoto from '../pictures/homephoto.png'
import '../companents.css/home.css'
import Products from "./Products";
import { MainContext } from "../Context";
import ShoppingCart from "./ShoppingCart";
const Home = () => {

  const { modalIsOpen, selectedProducts } = useContext(MainContext)

  console.log(selectedProducts)


  return (
    <div>
      <div className="home-photo">
        <img src={homePhoto} alt="homephoto" ></img>
      </div>
      <Products></Products>
      {modalIsOpen && <ShoppingCart />}
    </div>
  )

}

export default Home;