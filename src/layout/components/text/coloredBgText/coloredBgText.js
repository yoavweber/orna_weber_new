import React from "react";

import { H1 } from "../../../common";
import ReactMarkdown from "react-markdown";

import styles from "./coloredBgText.module.scss";

//https://erikmartinjordan.com/parent-child-height-width-react-hooks
const ColoredBgText = ({ data }) => {
  const { icon, headline, firstPartText } = data;
  return (
    <section className={styles.section}>
      <div className={styles.iconWrapper}>
        <img src={icon.url} alt="ביוטי פיוזן" className={styles.icon} />
      </div>
      <div className={styles.contentWrapper}>
        <H1 className={styles.headline}>{headline}</H1>
        <ReactMarkdown allowDangerousHtml={true}>{firstPartText}</ReactMarkdown>
      </div>
    </section>
  );
};

export default ColoredBgText;
