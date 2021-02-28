import React from "react";
import BackgroundImage from "gatsby-background-image";
import ReactMarkdown from "react-markdown";

import { H1, Space, MobileTextWrapper } from "../../../common";

import styles from "./iconText.module.scss";

const IconText = ({ data }) => {
  const {
    headline,
    headlineColor,
    icon,
    firstPartText,
    secondPartText,
    reverse,
  } = data;
  const styleReverse = reverse && { flexDirection: "row-reverse" };
  return (
    <MobileTextWrapper className={styles.wrapper}>
      <H1 color={headlineColor}>
        {headline}

        {/* <ReactMarkdown allowDangerousHtml={true}>{headline} </ReactMarkdown> */}
      </H1>
      <div className={styles.textWrapper}>
        <div className={styles.text} style={{ ...styleReverse }}>
          <img src={icon.url} width="100px" height="100%" />
          <ReactMarkdown>{firstPartText}</ReactMarkdown>
        </div>
        <Space smallSpace="true" />
        {secondPartText && (
          <div className={styles.secondText}>
            <p>{secondPartText}</p>
          </div>
        )}
      </div>
    </MobileTextWrapper>
  );
};

export default IconText;
