import React from "react";
import homePhoto from '../pictures/homephoto.png'
import '../companents.css/home.css'
const Home = () => {
  return (
    <div className="home-photo">
      <img src={homePhoto} alt="homephoto" ></img>
    </div>
  )

}

export default Home;