import React from "react";
import homePhoto from '../pictures/homephoto.png'
import homePhoto2 from '../pictures/homephoto2.png'
import homePhoto3 from '../pictures/homephoto3.png'
import homePhoto4 from '../pictures/homephoto4.png'


import '../companents.css/home.css'
import Products from "./Products";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home = () => {

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <div className="home-photo">
          <img src={homePhoto} alt="homephoto" ></img>
          <img src={homePhoto2} alt="homephoto" ></img>
          <img src={homePhoto3} alt="homephoto" ></img>
          <img src={homePhoto4} alt="homephoto" ></img>
        </div>
        <Products></Products>

      </div>
    </Carousel>
  )

}

export default Home;