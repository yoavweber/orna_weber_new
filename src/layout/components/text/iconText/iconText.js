import React from "react";
import ReactMarkdown from "react-markdown";

import { H1, ColoredHeadline, Space, MobileTextWrapper } from "../../../common";

import styles from "./iconText.module.scss";

const IconText = ({ data }) => {
  const { headline, icon, firstPartText, secondPartText, reverse } = data;

  const styleReverse = reverse && {
    flexDirection: "row-reverse",
  };

  return (
    <MobileTextWrapper className={styles.wrapper}>
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
    </MobileTextWrapper>
  );
};

export default IconText;
