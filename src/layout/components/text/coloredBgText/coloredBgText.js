import React from "react";

import { H1 } from "../../../common";
import ReactMarkdown from "react-markdown";

import styles from "./coloredBgText.module.scss";

//https://erikmartinjordan.com/parent-child-height-width-react-hooks
const ColoredBgText = ({ data }) => {
  const { icon, headline, firstPartText } = data;
  return (
    <section className={styles.section}>
      <img src={icon.url} className={styles.icon} width="5px" />
      <div className={styles.contentWrapper}>
        <H1>{headline}</H1>
        <ReactMarkdown allowDangerousHtml={true}>{firstPartText}</ReactMarkdown>
      </div>
    </section>
  );
};

export default ColoredBgText;
