import React from "react";
import ReactMarkdown from "react-markdown";

import { H1, Button, MobileTextWrapper } from "../../../common";
import getFluid from "../../../../utils/getFluid";

import styles from "./squarePicText.module.scss";

const squarePicText = ({ data }) => {
  console.log(data, "squer pic");
  const { headline, text, buttonText, desktopPic } = data;
  const background = getFluid("backgroundSmall.png");
  // const fluid = ornaPicture.childImageSharp.fluid;
  return (
    <MobileTextWrapper className={styles.section}>
      <div className={styles.wrapper}>
        <H1 className={styles.headline}>{headline} </H1>
        <div className={styles.content}>
          {/* <div className={styles.imgWrapper}> */}
          {/* <Img fluid={fluid} className={styles.img} /> */}
          <img
            src={desktopPic.url}
            className={styles.img}
            alt={desktopPic.alternativeText}
          />
          {/* </div> */}
          {/* <div className={styles.test} /> */}
          {/* <Img fluid={fluid} className={styles.img} /> */}
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
