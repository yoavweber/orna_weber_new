import React, { useState, useEffect, useRef } from "react";
// import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Banner } from "../../../../layout/components";
import SliderContent from "./sliderContent";
import Slide from "./slide";
import Arrow from "./arrow";
import Dots from "./dots";
import { moveElements } from "../../../../utils/utils";
//https://medium.com/better-programming/build-an-image-slider-with-react-es6-264368de68e4
/**
 * @function Slider
 */
// TODO: adjust the slider to fit the banner as well
// TODO: change the move elements to move only one element in a time
// TODO: make the transition effect
// TODO: fix the design
// TODO: add the option to prevent autoplay and check if it working fine when hovering
const Slider = (props) => {
  if (typeof window === "undefined") {
    global.window = {};
  }
  let getWidth;
  if (props.width === undefined) {
    getWidth = window ? window.innerWidth : "1000";
  } else {
    getWidth = props.width;
  }
  //--------------------------------------------
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    _slides: props.content,
  });

  const { translate, transition, activeIndex, _slides } = state;
  const autoPlayRef = useRef();
  const transitionRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const smooth = () => {
      transitionRef.current();
    };

    const interval = setInterval(play, props.autoPlay * 1000);
    const transitionEnd = window.addEventListener("transitionend", smooth);

    return () => {
      clearInterval(interval);
      window.removeEventListener("transitionend", transitionEnd);
    };
  }, []);

  const smoothTransition = () => {
    let movedSlides = moveElements(_slides, props.showElements);
    console.log(movedSlides, "slides from the smoth transition!!!");
    setState({
      ...state,
      _slides: movedSlides,
      transition: 0,
      translate: ((props.content.length - 1) * getWidth) / props.showElements,
    });
  };

  const nextSlide = () => {
    let movedSlides = moveElements(_slides, props.showElements);

    setState({
      ...state,
      _slides: movedSlides,
      translate: (activeIndex * getWidth) / props.showElements,
      activeIndex:
        activeIndex === props.content?.length - props.showElements
          ? 0
          : activeIndex + 1,
    });
  };

  const prevSlide = () => {
    let movedSlides = moveElements(_slides, props.showElements);

    setState({
      ...state,
      _slides: movedSlides,
      translate: (activeIndex * getWidth) / props.showElements,
      activeIndex:
        activeIndex === 0
          ? props.content?.length - props.showElements
          : activeIndex - 1,
    });
  };
  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={(getWidth / props.showElements) * props.content?.length}
      >
        {_slides.map((Content, i) => (
          <Slide key={i} content={Content}>
            {/* <Content /> */}
            {/* <Banner
              headline={content.headline}
              text={content.text}
              img={content.img}
              textStyle={{ display: "flex", color: "green" }}
              buttonText={content.buttonText}
            /> */}
          </Slide>
        ))}
      </SliderContent>
      <Dots />
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  ${
    "" /* height: 25vw;
  min-height: 300px;
  width: 100vw;
  overflow: hidden; */
  }
`;

export default Slider;
