import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Farm from "./imgCarousel/farm.jpg";
import Wheat from "./imgCarousel/QualifiedElatedChanticleer-size_restricted.gif";
import Land from "./imgCarousel/product.jpg";

export default function VegeCarousel() {

    const imageCarousel = [Wheat, Farm, Land]

    let carouselItem = imageCarousel.map((element) => (
      
      <Carousel.Item className="carousel" >
        <img className="d-block w-100 " style={{height:'55vh', padding:20}} src={element} alt={element} />
      </Carousel.Item>
    
    ));
  
    return (
      <div style={{marginBottom:45, position:'relative'}}>
        <Carousel interval={3000}>{carouselItem}</Carousel>
      </div>
    );
  }