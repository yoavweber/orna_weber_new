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
  query {
    strapiScars {
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
