import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Assets/M9-scaled.jpg";
import img2 from "../Assets/SDR Banner.jpg";
import img3 from "../Assets/Hispeed Banner.jpg";

function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img 
            src={img1} 
            className="d-block w-100" 
            alt="First slide"
            style={{
              height:'20rem',
              objectFit: 'fill'
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            src={img2} 
            className="d-block w-100"
            alt="Second slide"
            style={{
              height:'20rem',
              objectFit: 'fill'
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            src={img3} 
            className="d-block w-100"
            alt="Second slide"
            style={{
              height:'20rem',
              objectFit: 'fill'
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
