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
import { Space } from "../layout/common";

const AntiAge = () => {
  const data = useStaticQuery(query);
  const { strapiBeautyFusion } = data;
  const {
    banner,
    iconText,
    coloredBackground,
    roundPic,
    list,
    blockText,
    form,
  } = strapiBeautyFusion;
  if (!strapiBeautyFusion) {
    return <div>loading.....</div>;
  }

  console.log(roundPic, "!!!");

  return (
    <>
      <Banner data={banner} subTitleColor="black" />
      <main>
        <IconText data={iconText} />
        <ColoredBgText data={coloredBackground} />
        <RoundPicText data={roundPic} />
        <List data={list} />
        <Space />
        <TextBlocks content={blockText} />
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
      # roundPic {
      #   headline
      #   firstPartText
      #   desktopPic {
      #     localFile {
      #       childImageSharp {
      #         fluid {
      #           ...GatsbyImageSharpFluid_withWebp_noBase64
      #         }
      #       }
      #     }
      #   }
      #   mobilePic {
      #     localFile {
      #       childImageSharp {
      #         fluid {
      #           ...GatsbyImageSharpFluid_withWebp_noBase64
      #         }
      #       }
      #     }
      #   }
      # }
      # roundPic {
      #   icon {
      #     localFile {
      #       id
      #       childImageSharp {
      #         fluid {
      #           ...GatsbyImageSharpFluid_withWebp_noBase64
      #         }
      #       }
      #     }
      #   }
      # }
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
