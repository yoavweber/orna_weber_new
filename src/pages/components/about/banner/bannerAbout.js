import React from "react";
import Img from "gatsby-image";
import { Button, H1, H3 } from "../../../../layout/common";
import { splitText } from "../../../../utils/utils";
import { isMobile } from "../../../../utils/isMobile";

import styles from "./bannerAbout.module.scss";

const AboutBanner = ({ data }) => {
  const { mobileBackground, headline, subTitle, button, icon } = data;

  const fluid = mobileBackground?.localFile.childImageSharp.fluid;
  let headlineColor;
  let isColor;
  if (subTitle) {
    headlineColor = subTitle ? splitText(subTitle) : undefined;
    isColor = headlineColor.length > 1 ? headlineColor[1] : false;
  }
  return (
    <>
      <div className={styles.wrapper} style={{ backgroundColor: "#f2f2f2" }}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <H1 bold>{headline}</H1>
            <H3 bold color="grey">
              {subTitle}
            </H3>

            <a className={styles.button}>
              <Button>{button}</Button>
            </a>
            {icon && !isMobile && <img src={icon.url} width="80" height="80" />}
          </div>
        </div>
        <Img
          fluid={fluid}
          Tag="div"
          className={styles.imageWrapper}
          alt="banner picture"
        />
      </div>
    </>
  );
};

export default AboutBanner;
