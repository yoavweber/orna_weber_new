import React from "react";
import ReactMarkdown from "react-markdown";
import { customMobile } from "../../../../utils/isMobile";

import Img from "gatsby-image";

import { H1 } from "../../../../layout/common";

import styles from "./experienceText.module.scss";

const ExperienceText = ({ data }) => {
  const { headline, text, desktopPic, mobilePic } = data;
  const fluid = customMobile(900)
    ? mobilePic.localFile.childImageSharp.fluid
    : desktopPic.localFile.childImageSharp.fluid;
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <H1 className={styles.headline}>{headline} </H1>
        <div className={styles.content}>
          <div className={styles.text}>
            <ReactMarkdown allowDangerousHtml={true}>{text}</ReactMarkdown>
          </div>
          <Img fluid={fluid} className={styles.img} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceText;
