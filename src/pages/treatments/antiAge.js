import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  Banner,
  Form,
  IconText,
  List,
  TextBlocks,
} from "../../layout/components";
import bag from "../../layout/assets/icons/bag.svg";
import antiBottle from "../../layout/assets/icons/antiBottle.svg";
import { H1, Space } from "../../layout/common";

import styles from "./antiAge/antiAge.module.scss";

const AntiAge = () => {
  //------------banner data
  const content = {
    headline: "מעיין הנעורים הפרטי שלך",
    img: "antiaging.png",
    buttonText: "לעור בריא וחיוני",
  };

  const data = useStaticQuery(query);
  const { strapiAntiAging } = data;
  const {
    banner,
    midText,
    iconText,
    secondIconText,
    list,
    blockText,
    endText,
    form,
  } = strapiAntiAging;
  if (!strapiAntiAging) {
    return <div>loading.....</div>;
  }
  console.log(list, "icon text");
  return (
    <>
      <Banner data={banner} />
      {/* <Banner
        headline={content.headline}
        img={content.img}
        buttonText={content.buttonText}
      /> */}
      <Space />
      <main>
        <div className={styles.text}>
          <IconText data={iconText} />
          <H1
            style={{
              textAlign: "center",
              width: "50%",
              margin: "calc(10px + 3vw) auto",
            }}
          >
            {midText}
          </H1>
        </div>
        <IconText data={secondIconText} />
        <List data={list} />
        <Space />
        <TextBlocks content={blockText} />
        <Space />
        <H1 style={{ width: "60%", textAlign: "center", margin: "0 auto" }}>
          {endText}
        </H1>
        <Space />
      </main>
      <Form data={form} />
    </>
  );
};

const query = graphql`
  query {
    strapiAntiAging {
      banner {
        title
        button
        img {
          localFile {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }

      iconText {
        headline
        icon {
          url
        }
        firstPartText
        secondPartText
      }

      midText
      secondIconText {
        icon {
          url
        }
        firstPartText
        secondPartText
      }
      blockText {
        headline
        data {
          text
          headline
        }
      }
      list {
        headline
        listElement {
          bold
          text
        }
      }
      endText
      form {
        headline
        button
      }
    }
  }
`;

export default AntiAge;
