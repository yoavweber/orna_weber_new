import React from "react";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { H1, H2 } from "..//../../common";
import styles from "./textBlocks.module.scss";

const TextBlocks = ({ content }) => {
  if (!content) {
    //TODO: add data handler
    return <div>loading</div>;
  }
  const { data, headline } = content;
  const blockColors = ["#ebf1e6", "#dce8d0", "#cae3b1"];

  //TODO: try to create media quary with the styled components
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
        <ReactMarkdown allowDangerousHtml={true}>{data.text}</ReactMarkdown>
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
