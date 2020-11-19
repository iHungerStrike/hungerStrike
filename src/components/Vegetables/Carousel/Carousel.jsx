import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Cow from "./imgCarousel/dairy.gif";
import Wheat from "./imgCarousel/QualifiedElatedChanticleer-size_restricted.gif";
import Land from "./imgCarousel/eight_col_fruit.jpg";

export default function VegeCarousel() {

    const imageCarousel = [Cow, Wheat, Land]

    let carouselItem = imageCarousel.map((element) => (
      <Carousel.Item className="carousel" >
        <img className="d-block w-100 " style={{height:400}} src={element} alt={element} />
      </Carousel.Item>
    ));
  
    return (
      <div style={{marginBottom:30, position:'relative'}}>
        <Carousel interval={3000}>{carouselItem}</Carousel>
      </div>
    );
  }