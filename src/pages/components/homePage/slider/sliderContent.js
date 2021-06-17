// import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const SliderContent = ({ translate, width, children }) => {
  if (!width) {
    return <div>loading!!!</div>;
  }
  return (
    <div
      css={css`
        transform: translateX(${translate}px);
        transition: transform ease-out 0.45s;
        height: 100%;
        width: ${width}px;
        display: flex;
      `}
    >
      {children}
    </div>
  );
};
export default SliderContent;
