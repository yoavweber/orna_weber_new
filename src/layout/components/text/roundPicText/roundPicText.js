import React from "react";
import { H3, H2, Space, MobileTextWrapper } from "../../../common";
import Img from "gatsby-image";
import getFluid from "../../../../utils/getFluid";

import styles from "./roundPicText.module.scss";

const PicText = ({ data }) => {
  const { headline, headlineColor, desktopPicName, text } = data;
  // const { headline, headlineColor, desktopPicName, text } = data;

  // const fluid = getFluid(desktopPicName);
  console.log(data, "round pic");
  return (
    <MobileTextWrapper className={styles.wrapper}>
      <H2 bold={true} color="grey">
        {headline}
      </H2>
      <div className={styles.textWrapper}>
        {/* <div className={styles.text}> */}
        <img src={desktopPicName} className={styles.img} />

        {/* <Img fluid={fluid} className={styles.img} /> */}
        <p>{text}</p>
      </div>
      {/* </div> */}
    </MobileTextWrapper>
  );
};

export default PicText;
