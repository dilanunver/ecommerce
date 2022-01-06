import React from "react";
import homePhoto from '../pictures/homephoto.png'
import '../companents.css/home.css'
import Products from "./Products";
const Home = () => {



  return (
    <div>
      <div className="home-photo">
        <img src={homePhoto} alt="homephoto" ></img>
      </div>
      <Products></Products>
    </div>
  )

}

export default Home;