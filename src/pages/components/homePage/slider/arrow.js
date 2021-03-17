import React from "react";
/** @jsx jsx */
// import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import leftArrow from "../../../../layout/assets/left-arrow.svg";
import rightArrow from "../../../../layout/assets/right-arrow.svg";

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === "right" ? `right: 20px` : `left: 20px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      opacity: 0.3;
      &:hover {
        opacity: 1;
      }
      img {
        transform: translateX(${direction === "left" ? "-2" : "2"}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === "right" ? <img src={rightArrow} /> : <img src={leftArrow} />}
  </div>
);

export default Arrow;
