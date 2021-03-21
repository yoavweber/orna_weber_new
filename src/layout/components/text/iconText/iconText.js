import React from "react";
import BackgroundImage from "gatsby-background-image";
import ReactMarkdown from "react-markdown";

import { H1, ColoredHeadline, Space, MobileTextWrapper } from "../../../common";

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

  const styleReverse = reverse && {
    flexDirection: "row-reverse",
    marginLeft: "0",
    marginRight: "calc(20px + 3vw)",
  };

  const styleReverseImage = reverse && {
    marginLeft: "0",
    marginRight: "calc(10px + 3vw)",
  };
  return (
    <MobileTextWrapper className={styles.wrapper}>
      {headline && <ColoredHeadline text={headline} />}
      <div className={styles.textWrapper}>
        <div className={styles.text} style={{ ...styleReverse }}>
          <img
            src={icon?.url}
            width="100px"
            height="100%"
            style={{ ...styleReverseImage }}
          />
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
