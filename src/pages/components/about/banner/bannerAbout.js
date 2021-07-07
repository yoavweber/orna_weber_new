import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { Button, H1, H3 } from "../../../../layout/common";
import { splitText } from "../../../../utils/utils";
import { isMobile } from "../../../../utils/isMobile";

import styles from "./bannerAbout.module.scss";

const AboutBanner = ({ data }) => {
  if (!data) {
    return <div>error</div>;
  }
  const { mobileBackground, headline, subTitle, button, icon } = data;
  const fluid = mobileBackground?.localFile.childImageSharp.gatsbyImageData;
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

            <Link href="#form" className={styles.button}>
              <Button>{button}</Button>
            </Link>
            {icon && !isMobile && <img src={icon.url} width="80" height="80" />}
          </div>
        </div>
        <GatsbyImage
          image={fluid}
          placeholder="blurred"
          Tag="div"
          alt="banner picture"
        />
      </div>
    </>
  );
};

export default AboutBanner;
