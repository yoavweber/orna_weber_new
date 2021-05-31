import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ReactMarkdown from "react-markdown";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

import { H1, Button } from "../../../../layout/common";
import getFluid from "../../../../utils/getFluid";

import styles from "./about.module.scss";

const AboutSection = ({ data }) => {
  if (!data) {
    return <div>loading</div>;
  }
  const { button, ornaPicture, text, title } = data;

  const fluid = ornaPicture.localFile.childImageSharp.fluid;
  //TODO: add this to the CMS
  const background = getFluid("backgroundSmall.png");
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <H1 className={styles.headline}>{title} </H1>
        <div className={styles.content}>
          <BackgroundImage fluid={fluid} className={styles.img} />
          <div className={styles.text}>
            <ReactMarkdown allowDangerousHtml={true}>{text}</ReactMarkdown>
            <div className={styles.button}>
              <Button href="/test">{button}</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundWrapper}>
        <BackgroundImage
          fluid={background}
          Tag="div"
          className={styles.background}
          alt="banner picture"
        />
      </div>
    </section>
  );
};

export default AboutSection;
