import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  Banner,
  Form,
  IconText,
  List,
  TextBlocks,
  RoundPicText,
  ColoredBgText,
} from "../layout/components";
import SEO from "../utils/seo";

import ListNumber from "./components/beautyFusion/numList/numList";
import { Space } from "../layout/common";

const AntiAge = () => {
  const data = useStaticQuery(query);
  if (!data) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>loading </div>
    );
  }

  const { strapiBeautyFusion } = data;
  const {
    banner,
    iconText,
    coloredBackground,
    textPic,
    enumList,
    list,
    blockText,
    form,
  } = strapiBeautyFusion;

  return (
    <>
      <SEO title="שיטת ביוטי פיוז'ן" />
      <Banner data={banner} subTitleColor="black" />
      <Space smallSpace="true" />
      <main>
        <IconText data={iconText} />
        <Space />
      </main>
      <ColoredBgText data={coloredBackground} />
      <main>
        <ListNumber data={enumList} />
        <RoundPicText data={textPic} />
        <Space />
        <TextBlocks content={blockText} />
        <List data={list} />
        <Space isMobile="true" />
      </main>
      <Form data={form} />
    </>
  );
};

const query = graphql`
  {
    strapiBeautyFusion {
      banner {
        subTitle
        headline
        button
        desktopBackground {
          alternativeText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        mobileBackground {
          alternativeText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      iconText {
        headline
        firstPartText
        secondPartText
        icon {
          url
        }
      }
      coloredBackground {
        headline
        firstPartText
        icon {
          url
        }
      }
      enumList {
        headline
        listElement {
          bold
          text
        }
      }
      textPic {
        headline
        text
        desktopPic {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        mobilePic {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      blockText {
        data {
          headline
          text
        }
      }
      enumList {
        headline
        listElement {
          text
          bold
        }
      }
      list {
        headline
        listElement {
          text
          bold
        }
      }
      form {
        headline
        button
      }
    }
  }
`;

export default AntiAge;
