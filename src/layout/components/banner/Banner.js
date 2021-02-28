import React from "react";
import BackgroundImage from "gatsby-background-image";

import { Button, H1, H2 } from "../../common";

import styles from "./banner.module.scss";

const Banner = ({ data, textStyle }) => {
  const { img, title, subTitle, button, icon } = data;
  const fluid = img.localFile.childImageSharp.fluid;
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
          <H2 bold>{title}</H2>
          {subTitle && <H2 color="white"> {subTitle} </H2>}
          <Button className={styles.button}>{button}</Button>
          {icon && <img src={icon} width="80" height="80" />}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Banner;
