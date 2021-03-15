import React from "react";

import { H1 } from "../../../common";
import ReactMarkdown from "react-markdown";
import body_icon from "../../../../layout/assets/body_icon.svg";

import styles from "./coloredBgText.module.scss";

//https://erikmartinjordan.com/parent-child-height-width-react-hooks
const ColoredBgText = ({ data }) => {
  const { icon, headline, text } = data;
  // const { rightIcon, leftIcon, headline, firstPartText } = data;

  console.log(data, icon.url, "colored text!");
  return (
    <section className={styles.wrapper}>
      <img src={icon.url} className={styles.icon} width="100%" height="100%" />
      <div className={styles.contentWrapper}>
        <H1>{headline}</H1>
        <ReactMarkdown allowDangerousHtml={true}>{text}</ReactMarkdown>
      </div>
      {/* {leftIcon ? <img src={icon} className={styles.icon} /> : <div />} */}
    </section>
  );
};

export default ColoredBgText;
