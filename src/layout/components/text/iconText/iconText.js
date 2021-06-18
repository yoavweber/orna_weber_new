import React from "react";
import ReactMarkdown from "react-markdown";

import {
  ColoredHeadline,
  Space,
  MobileTextWrapper,
  Headline,
} from "../../../common";
import { isMobile } from "../../../../utils/isMobile";
import styles from "./iconText.module.scss";

const IconText = ({ data, mobileReverse }) => {
  const { headline, icon, firstPartText, secondPartText, reverse } = data;

  const styleReverse = {
    flexDirection: isMobile
      ? mobileReverse
        ? "column"
        : "column-reverse"
      : reverse
      ? "row-reverse"
      : "row",
  };

  return (
    <div className={styles.wrapper}>
      {headline && <ColoredHeadline text={headline} />}
      <div className={styles.textWrapper}>
        <div className={styles.text} style={{ ...styleReverse }}>
          <img
            src={icon?.url}
            alt="treatment icon"
            width="100px"
            height="100%"
          />
          <ReactMarkdown>{firstPartText}</ReactMarkdown>
        </div>
        <Space smallSpace="true" isMobile="true" />
        {secondPartText && (
          <div className={styles.secondText}>
            <p>{secondPartText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconText;
