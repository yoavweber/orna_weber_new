import React from "react";
import BackgroundImage from "gatsby-background-image";

import getFluid from "../../../utils/getFluid";
import { Button, H1, H2 } from "../../common";

import styles from "./banner.module.scss";

const Banner = ({ img, headline, text, textStyle, buttonText, icon }) => {
  const fluid = getFluid(img);
  return (
    <BackgroundImage
      fluid={fluid}
      Tag="section"
      style={{ width: "100%", height: "100%" }}
      className={styles.wrapper}
      alt="banner picture"
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {/* chnage the H2 to H3 */}
          <H2 bold>{headline}</H2>
          <H2 color="white"> {text} </H2>
          <Button className={styles.button}>{buttonText}</Button>
          {icon && <img src={icon} width="80" height="80" />}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Banner;
