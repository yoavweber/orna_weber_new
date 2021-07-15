import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { H2, MobileTextWrapper } from "../../../common";
import { isMobile } from "../../../../utils/isMobile";

import styles from "./roundPicText.module.scss";

const PicText = ({ data }) => {
  const { headline, desktopPic, mobilePic, text, reverse } = data;
  const styleReverse = reverse && { flexDirection: "row-reverse" };
  const fluid = isMobile
    ? mobilePic?.localFile.childImageSharp?.gatsbyImageData
    : desktopPic?.localFile.childImageSharp?.gatsbyImageData;

  const altText = isMobile
    ? mobilePic?.alternativeText
    : desktopPic?.alternativeText;

  return (
    <MobileTextWrapper className={styles.wrapper}>
      <H2 bold={true} color="grey">
        {headline}
      </H2>
      <div className={styles.contentWrapper} style={{ ...styleReverse }}>
        <GatsbyImage image={fluid} className={styles.img} alt={altText} />

        <p>{text}</p>
      </div>
    </MobileTextWrapper>
  );
};

export default PicText;
