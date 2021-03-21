import React from "react";
import Img from "gatsby-image";

import { H2, MobileTextWrapper } from "../../../common";
import { isMobile } from "../../../../utils/isMobile";

import styles from "./roundPicText.module.scss";

const PicText = ({ data }) => {
  const {
    headline,
    headlineColor,
    desktopPic,
    mobilePic,
    text,
    reverse,
  } = data;
  const styleReverse = reverse && { flexDirection: "row-reverse" };
  const deskTopFluid = desktopPic?.localFile?.childImageSharp.fluid;
  const mobileFluid = mobilePic?.localFile?.childImageSharp.fluid;

  return (
    <MobileTextWrapper className={styles.wrapper}>
      <H2 bold={true} color="grey">
        {headline}
      </H2>
      <div className={styles.contentWrapper} style={{ ...styleReverse }}>
        {isMobile ? (
          <Img fluid={mobileFluid} className={styles.img} />
        ) : (
          <Img fluid={deskTopFluid} className={styles.img} />
        )}

        <p>{text}</p>
      </div>
    </MobileTextWrapper>
  );
};

export default PicText;
