import React, { useContext, useEffect } from "react";
import { ButtonBack, ButtonNext, DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";
import styled from "styled-components";
import Arrow from "./arrow.svg";
import Card from "./Card";
import useWindowSize from "../hooks/windowSize";
import "./CarouselSlider.css"; 

const CarouselSlider = ({ setSlideCount, setCurrentSlide, recipe }) => {
  const screenWidth = useWindowSize();
  const carouselContext = useContext(CarouselContext);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible) => {
      const { currentSlide, totalSlides, visibleSlides } = carouselContext.state;
      setSlideCount(slideToBeVisible);

      if (currentSlide >= totalSlides - visibleSlides || currentSlide >= totalSlides - slideToBeVisible) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 832) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1088) {
      updateCarouselSlide(2);
    } else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <Wrapper>
      <Slider>
        {recipe.instructions.map((instruction, index) => (
          <Slide key={index} index={index} className="slide">
            <Card index={index + 1} recipe={recipe} instruction={instruction} />
          </Slide>
        ))}
      </Slider>
      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonNext>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``; // Removed CSS here as it's now in a separate file

export default CarouselSlider;