/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

const Slide = ({ content }) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      width: 100%;
    `}
  >
    <>{content} </>
  </div>
);

export default Slide;
