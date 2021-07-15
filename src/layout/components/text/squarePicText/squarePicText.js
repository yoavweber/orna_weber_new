import React from "react";
import ReactMarkdown from "react-markdown";

import { GatsbyImage } from "gatsby-plugin-image";

import { H1, Button, MobileTextWrapper } from "../../../common";

import styles from "./squarePicText.module.scss";

const squarePicText = ({ data }) => {
  const { headline, text, buttonText, desktopPic } = data;
  const fluid = desktopPic.localFile.childImageSharp.gatsbyImageData;
  const altText = desktopPic.localFile.alternativeText;

  return (
    <MobileTextWrapper className={styles.section}>
      <div className={styles.wrapper}>
        {/* <H1 className={styles.headline}>{headline} </H1> */}
        <div className={styles.content}>
          <GatsbyImage image={fluid} className={styles.img} alt={altText} />

          <div className={styles.text}>
            <ReactMarkdown allowDangerousHtml={true}>{text}</ReactMarkdown>
            {buttonText && (
              <div className={styles.button}>
                <Button
                  href="/test"
                  style={{ width: "70%", maxWidth: "300px" }}
                >
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MobileTextWrapper>
  );
};

export default squarePicText;
