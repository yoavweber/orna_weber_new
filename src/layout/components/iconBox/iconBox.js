import React from "react";
import { H2, Space } from "../../common";

import styles from "./iconBox.module.scss";

const IconBox = ({ data }) => {
  const { headline, icons, footline } = data;

  const iconElements = icons.map((node) => (
    <div className={styles.iconItem}>
      <img src={node.src} alt="icon text" />
      <p>{node.text}</p>
    </div>
  ));
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <H2 className={styles.headline}>{headline}</H2>
        <div className={styles.iconWrapper}> {iconElements}</div>
        {footline && <H2 className={styles.headline}>{footline}</H2>}
      </div>
    </section>
  );
};

export default IconBox;
