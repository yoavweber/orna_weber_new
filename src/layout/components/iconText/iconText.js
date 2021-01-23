import React from "react";
import { H1, Space } from "../../common";

import styles from "./iconText.module.scss";

const IconText = ({
  headline,
  headlineColor,
  icon,
  firstPartText,
  secondPartText,
}) => {
  return (
    <section className={styles.wrapper}>
      <H1 color={headlineColor}>{headline}</H1>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <img src={icon} width="100px" height="100%" />
          {/* <div /> */}
          <p>{firstPartText}</p>
        </div>
        <Space smallSpace="true" />
        {secondPartText && (
          <div className={styles.secondText}>
            <p>{secondPartText}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default IconText;
