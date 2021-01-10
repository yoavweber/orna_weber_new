import React from "react";
import BackgroundImage from "gatsby-background-image";

import getFluid from "../../../utils/getFluid";
import { Button, H1, H2 } from "../../common";

import styles from "./banner.module.scss";

const Banner = ({ img, headline, text, textStyle, buttonText, icon }) => {
  const fluid = getFluid("pigmentation.png");
  return (
    <BackgroundImage
      fluid={fluid}
      Tag="section"
      style={{ width: "100%", height: "60%" }}
      className={styles.wrapper}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <H1 bold>{headline}</H1>
          <H2 color="white"> {text} </H2>
          <Button>{buttonText}</Button>
          {icon && <img src={icon} width="80" height="80" />}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Banner;
