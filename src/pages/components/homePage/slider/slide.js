/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

const Slide = ({ content, children }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      margin: 0 40px;
    `}
  >
    <>{content} </>
  </div>
);

export default Slide;
