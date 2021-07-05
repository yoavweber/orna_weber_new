import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import ReactMarkdown from "react-markdown";

import { ColoredHeadline } from "../../../../layout/common";

import styles from "./introText.module.scss";

const Intro = ({ data }) => {
  if (!data) {
    return <div>loading...</div>;
  }
  const { introText, title, introBackground } = data;
  const fluid = introBackground.localFile.childImageSharp.gatsbyImageData;
  return (
    <section className={styles.section}>
      <GatsbyImage image={fluid} className={styles.img} style={{ opacity: 1 }} />
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
