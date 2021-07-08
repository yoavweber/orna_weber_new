import React from "react";
import ReactMarkdown from "react-markdown";
import { customMobile } from "../../../../utils/isMobile";
import { GatsbyImage } from "gatsby-plugin-image";

import { H1, MobileTextWrapper } from "../../../../layout/common";

import styles from "./experienceText.module.scss";

const ExperienceText = ({ data }) => {
  if (!data) {
    // TODO: return 404 page
    return <div>error</div>;
  }
  const { headline, text, desktopPic, mobilePic } = data;
  const fluid = customMobile(900)
    ? mobilePic.localFile.childImageSharp.gatsbyImageData
    : desktopPic.localFile.childImageSharp.gatsbyImageData;
  return (
    <MobileTextWrapper className={styles.section}>
      <div className={styles.wrapper}>
        <H1 className={styles.headline}>{headline} </H1>
        <div className={styles.content}>
          <div className={styles.text}>
            <ReactMarkdown allowDangerousHtml={true}>{text}</ReactMarkdown>
          </div>
          <GatsbyImage image={fluid} className={styles.img} />
        </div>
      </div>
    </MobileTextWrapper>
  );
};

export default ExperienceText;
