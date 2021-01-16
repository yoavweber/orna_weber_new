import React, { useState } from "react";
// import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Banner } from "../../../../layout/components";
import SliderContent from "./sliderContent";
import Slide from "./slide";
import Arrow from "./arrow";
import Dots from "./dots";
//https://medium.com/better-programming/build-an-image-slider-with-react-es6-264368de68e4
/**
 * @function Slider
 */
const Slider = (props) => {
  if (typeof window === "undefined") {
    global.window = {};
  }

  const getWidth = () => (window ? window.innerWidth : "1000");
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.content?.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.content.length - 1) * getWidth(),
        activeIndex: props.content.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.content?.length}
      >
        {props.content?.map((content, i) => (
          <Slide key={i} content={content}>
            <Banner
              headline={content.headline}
              text={content.text}
              img={content.img}
              textStyle={{ display: "flex", color: "green" }}
              buttonText={content.buttonText}
            />
          </Slide>
        ))}
      </SliderContent>
      <Dots />
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

// const SliderDiv = styled.div`
//   position: relative;
//   height: 100vh;
//   width: 100vw;
//   margin: 0 auto;
//   overflow: hidden;
// `;

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

export default Slider;
