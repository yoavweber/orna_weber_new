import React from "react";
import BackgroundImage from "gatsby-background-image";

import { Button, H1, H2 } from "../../../../layout/common";
import { splitText } from "../../../../utils/utils";
import { isMobile } from "../../../../utils/isMobile";

import styles from "./bannerAbout.module.scss";

const Banner = ({ data, textStyle }) => {
  const {
    desktopBackground,
    mobileBackground,
    headline,
    subTitle,
    button,
    icon,
  } = data;

  const fluid = isMobile
    ? mobileBackground?.localFile.childImageSharp.fluid
    : desktopBackground?.localFile.childImageSharp.fluid;
  let headlineColor;
  let isColor;
  if (subTitle) {
    headlineColor = subTitle ? splitText(subTitle) : undefined;
    isColor = headlineColor.length > 1 ? headlineColor[1] : false;
  }
  return (
    <BackgroundImage
      fluid={fluid}
      Tag="div"
      style={{ width: "100%", height: "100%" }}
      className={styles.wrapper}
      alt="banner picture"
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <H1 bold>{headline}</H1>
          <p>{subTitle}</p>

          <a className={styles.button}>
            <Button>{button}</Button>
          </a>
          {icon && !isMobile && <img src={icon.url} width="80" height="80" />}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Banner;
