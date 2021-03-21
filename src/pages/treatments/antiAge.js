import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  Banner,
  Form,
  IconText,
  List,
  TextBlocks,
} from "../../layout/components";
import { H1, Space } from "../../layout/common";

import styles from "./antiAge/antiAge.module.scss";

const AntiAge = () => {
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
  return (
    <>
      <Banner data={banner} />
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
            bold={true}
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
        headline
        button
        desktopBackground {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
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
