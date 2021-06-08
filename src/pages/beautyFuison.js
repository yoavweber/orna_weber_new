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

import ListNumber from "./components/beautyFusion/numList/numList";
import { Space } from "../layout/common";

const AntiAge = () => {
  const data = useStaticQuery(query);
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
  if (!strapiBeautyFusion) {
    return <div>loading.....</div>;
  }

  return (
    <>
      <Banner data={banner} subTitleColor="black" />
      <Space smallSpace="true" />
      <main>
        <IconText data={iconText} />
      </main>

      <ColoredBgText data={coloredBackground} />
      <main>
        <ListNumber data={enumList} />
        <RoundPicText data={textPic} />
        <TextBlocks content={blockText} />
        <Space />
        <List data={list} />
        <Space />
      </main>
      <Form data={form} />
    </>
  );
};

const query = graphql`
  query {
    strapiBeautyFusion {
      banner {
        button
        subTitle
        headline
        desktopBackground {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }

        mobileBackground {
          localFile {
            id
            childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
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
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        mobilePic {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
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
