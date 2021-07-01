import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  Banner,
  Form,
  IconText,
  List,
  TextBlocks,
  RoundPicText,
} from "../../layout/components";
import { Space } from "../../layout/common";

const Scars = () => {
  const data = useStaticQuery(query);
  const { strapiScars } = data;
  const { banner, iconText, roundPic, blockText, list, form } = strapiScars;
  return (
    <div>
      <Banner data={banner} />
      <main>
        <Space />
        <IconText data={iconText} />
        <Space />
        <RoundPicText data={roundPic} />
        <Space />
        <TextBlocks content={blockText} />
        <List data={list} />
      </main>
      <Form data={form} />
    </div>
  );
};

const query = graphql`
  {
    strapiScars {
      banner {
        headline
        button
        desktopBackground {
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
      roundPic {
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
      list {
        headline
        listElement {
          text
        }
      }
      form {
        button
        headline
        id
      }
    }
  }
`;

export default Scars;
