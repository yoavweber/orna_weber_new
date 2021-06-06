import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

import {
  Banner,
  Form,
  ColoredBgText,
  RoundPicText,
  SquarePicText,
} from "../layout/components";

import ExperienceText from "./components/about/experienceText/experienceText";
import BannerAbout from "./components/about/banner/bannerAbout";

import { H1, Space } from "../layout/common";

const About = () => {
  const data = useStaticQuery(query);
  const { strapiAbout } = data;
  const {
    banner,
    squerPic,
    greenText,
    roundPic,
    form,
    finalText,
  } = strapiAbout;

  const FinalTextWrapper = styled.div`
    @media (max-width: 800px) {
      background-color: #f8f9f6;
    }
  `;
  return (
    <div>
      {/* <Banner data={banner} /> */}
      <BannerAbout data={banner} />
      <SquarePicText data={squerPic} />
      <ColoredBgText data={greenText} />
      <Space />
      <ExperienceText data={roundPic} />
      <Space />
      <FinalTextWrapper>
        <H1
          bold={true}
          style={{
            width: "60%",
            textAlign: "center",
            margin: "0 auto",
            paddingBottom: "50px",
          }}
        >
          {finalText}
        </H1>
      </FinalTextWrapper>
      <Form data={form} />
    </div>
  );
};

const query = graphql`
  query {
    strapiAbout {
      banner {
        subTitle
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
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      squerPic {
        id
        text
        desktopPic {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
      greenText {
        headline
        text
        icon {
          url
        }
      }
      finalText
      roundPic {
        headline
        text
        desktopPic {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                # ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
        mobilePic {
          localFile {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                # ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
      finalText
      form {
        headline
        button
      }
    }
  }
`;

export default About;
