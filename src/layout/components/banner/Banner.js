import React from "react";
import BackgroundImage from "gatsby-background-image";

import { Button, H1, H2 } from "../../common";
import { splitText } from "../../../utils/utils";

import styles from "./banner.module.scss";

const Banner = ({ data, textStyle }) => {
  const { desktopBackground, headline, subTitle, button, icon } = data;
  const fluid = desktopBackground?.localFile.childImageSharp.fluid;
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
          <H2 bold>{headline}</H2>
          {subTitle && (
            <H2 color={isColor ? isColor : "white"}> {headlineColor[0]} </H2>
          )}
          <Button className={styles.button}>{button}</Button>
          {icon && <img src={icon.url} width="80" height="80" />}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Banner;
