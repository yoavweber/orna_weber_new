import React from "react";
import Img from "gatsby-image";

import { H2, MobileTextWrapper } from "../../../common";
import { isMobile } from "../../../../utils/isMobile";

import styles from "./roundPicText.module.scss";

const PicText = ({ data }) => {
  const { headline, desktopPic, mobilePic, text, reverse } = data;
  const styleReverse = reverse && { flexDirection: "row-reverse" };
  const fluid = isMobile
    ? mobilePic?.localFile.childImageSharp.fluid
    : desktopPic?.localFile.childImageSharp.fluid;

  return (
    <MobileTextWrapper className={styles.wrapper}>
      <H2 bold={true} color="grey">
        {headline}
      </H2>
      <div className={styles.contentWrapper} style={{ ...styleReverse }}>
        <Img fluid={fluid} className={styles.img} />

        <p>{text}</p>
      </div>
    </MobileTextWrapper>
  );
};

export default PicText;
