import React from "react";
import Img from "gatsby-image";

import showdown from "showdown";
import ReactMarkdown from "react-markdown";

import { ColoredHeadline } from "../../../../layout/common";

import styles from "./introText.module.scss";

const Intro = ({ data }) => {
  if (!data) {
    return <div>loading...</div>;
  }
  const { introText, title, introBackground } = data;
  const fluid = introBackground.localFile.childImageSharp.fluid;
  return (
    <section className={styles.section}>
      <Img fluid={fluid} className={styles.img} />
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <ColoredHeadline className={styles.coloredHeadline} text={title} />
          <ReactMarkdown allowDangerousHtml={true}>{introText}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Intro;
