import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const  BrandCarosoul = () => {


  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/70x70.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/50x50.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BrandCarosoul;