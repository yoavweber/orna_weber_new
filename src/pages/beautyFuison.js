import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Spinner from "react-spinner-material";

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
        button
        subTitle
        headline
        desktopBackground {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED)
            }
          }
        }
        mobileBackground {
          localFile {
            id
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED)
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
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        mobilePic {
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
