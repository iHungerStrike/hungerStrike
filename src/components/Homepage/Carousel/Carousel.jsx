import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Farming from "./imgCarousel/cultures.jpg";
import Fishing from "./imgCarousel/fishing2.jpg";
import Land from "./imgCarousel/cows3.jpg";
import "./carousel.css"

export default function Header() {

    const imageCarousel = [Fishing, Farming, Land]

    let carouselItem = imageCarousel.map((element) => (
      <Carousel.Item className="carousel" >
        <img className="d-block w-100 " style={{height:500}} src={element} alt={element} />
      </Carousel.Item>
    ));
  
    return (
      <div style={{margin:50}}>
        <Carousel interval={3000}>{carouselItem}</Carousel>
      </div>
    );
  }