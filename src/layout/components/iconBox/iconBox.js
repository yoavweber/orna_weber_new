import React from "react";
import { H2, Space } from "../../common";

import styles from "./iconBox.module.scss";

const IconBox = ({ data }) => {
  const { headline, icons, buttomText } = data;

  const iconElements = icons.map((node) => (
    <div className={styles.iconItem}>
      <img src={node.icon.url} alt="icon text" />
      <p>{node.text}</p>
    </div>
  ));
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <H2 className={styles.headline}>{headline}</H2>
        <div className={styles.iconWrapper}> {iconElements}</div>
        {buttomText && <H2 className={styles.headline}>{buttomText}</H2>}
      </div>
    </section>
  );
};

export default IconBox;
