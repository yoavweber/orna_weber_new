import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const SliderContent = (props) => (
  <div
    css={css`
      ${"" /* transform: translateX(${props.translate}px); */}
      ${"" /* transform: translateX(0); */}

      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
);
export default SliderContent;
