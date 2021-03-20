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
// TODO: add data handler
const Slider = ({ content, width, showElements, autoPlay }) => {
  if (typeof window === "undefined") {
    global.window = {};
  }
  let getWidth;
  if (width === undefined) {
    getWidth = window ? window.innerWidth : "1000";
  } else {
    getWidth = width;
  }
  //--------------------------------------------
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    _slides: content,
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

    const interval = autoPlay ? setInterval(play, autoPlay * 1000) : undefined;
    const transitionEnd = window.addEventListener("transitionend", smooth);

    return () => {
      clearInterval(interval);
      window.removeEventListener("transitionend", transitionEnd);
    };
  }, []);

  const smoothTransition = () => {
    let movedSlides = moveElements(_slides, showElements);
    setState({
      ...state,
      _slides: movedSlides,
      transition: 0,
      translate: ((content.length - 1) * getWidth) / showElements,
    });
  };

  const nextSlide = () => {
    let movedSlides = moveElements(_slides, showElements);

    setState({
      ...state,
      _slides: movedSlides,
      translate: (activeIndex * getWidth) / showElements,
      activeIndex:
        activeIndex === content?.length - showElements ? 0 : activeIndex + 1,
    });
  };

  const prevSlide = () => {
    let movedSlides = moveElements(_slides, showElements);

    setState({
      ...state,
      _slides: movedSlides,
      translate: (activeIndex * getWidth) / showElements,
      activeIndex:
        activeIndex === 0 ? content?.length - showElements : activeIndex - 1,
    });
  };

  if (!_slides) {
    return <div>hey</div>;
  }
  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={(getWidth / showElements) * content?.length}
      >
        {_slides.map((Content, i) => (
          <Slide key={i} content={Content} />
        ))}
      </SliderContent>
      <Dots />
      <Arrow direction="left" notFullWidth={width} handleClick={prevSlide} />
      <Arrow direction="right" notFullWidth={width} handleClick={nextSlide} />
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  overflow: hidden;
`;

export default Slider;
