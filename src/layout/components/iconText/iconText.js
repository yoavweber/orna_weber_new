import BackgroundImage from "gatsby-background-image";
import React from "react";
import { H1, Space, MobileTextWrapper } from "../../common";

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
      <H1 color={headlineColor}>{headline}</H1>
      <div className={styles.textWrapper}>
        <div className={styles.text} style={{ ...styleReverse }}>
          <img src={icon.url} width="100px" height="100%" />
          <p>{firstPartText}</p>
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
