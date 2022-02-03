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
    <div>
      <Carousel showThumbs={false} autoPlay infiniteLoop className="carousel-photo">

        <div className="home-photo"> <img src={homePhoto} alt="homephoto" ></img> </div>
        <div className="home-photo"> <img src={homePhoto2} alt="homephoto" ></img> </div>
        <div className="home-photo"><img src={homePhoto3} alt="homephoto"  ></img> </div>
        <div className="home-photo"><img src={homePhoto4} alt="homephoto"  ></img> </div>

      </Carousel>
      <Products></Products>
    </div>

  )

}

export default Home;