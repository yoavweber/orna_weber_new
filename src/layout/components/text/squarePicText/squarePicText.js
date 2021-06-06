import React from "react";
import ReactMarkdown from "react-markdown";

import Img from "gatsby-image";

import { H1, Button, MobileTextWrapper } from "../../../common";
import getFluid from "../../../../utils/getFluid";

import styles from "./squarePicText.module.scss";

const squarePicText = ({ data }) => {
  console.log(data, "squer pic");
  const { headline, text, buttonText, desktopPic } = data;
  const background = getFluid("backgroundSmall.png");
  const fluid = desktopPic.localFile.childImageSharp.fluid;
  return (
    <MobileTextWrapper className={styles.section}>
      <div className={styles.wrapper}>
        {/* <H1 className={styles.headline}>{headline} </H1> */}
        <div className={styles.content}>
          <Img fluid={fluid} className={styles.img} />

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
