import React from "react";
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { H1, H2 } from "../../common";
import styles from "./textBlocks.module.scss";

const TextBlocks = ({ headline, data }) => {
  const blockColors = ["#ebf1e6", "#dce8d0", "#cae3b1"];

  const StyledBlock = ({ index, children }) => (
    <div
      css={css`
        background-color: ${blockColors[index]};
        padding: calc(10px + 3vw);
        @media (max-width: 800px) {
          padding: 60px 40px;
        }
      `}
    >
      {children}
    </div>
  );

  const blockComponent = data.map((data, index) => {
    return (
      <StyledBlock index={index}>
        <H2 color="black" bold="true">
          {data.headline}
        </H2>
        <p>{data.text}</p>
      </StyledBlock>
    );
  });

  return (
    <section>
      <H1>{headline}</H1>
      <div className={styles.blockWrapper}>{blockComponent}</div>
    </section>
  );
};

export default TextBlocks;