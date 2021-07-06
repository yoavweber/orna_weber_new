import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import Spinner from "react-spinner-material";

import { Form, ColoredBgText, SquarePicText } from "../layout/components";

import ExperienceText from "./components/about/experienceText/experienceText";
import BannerAbout from "./components/about/banner/bannerAbout";

import { H1, Space } from "../layout/common";

const About = () => {
  const data = useStaticQuery(query);
  if (!data) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>loading </div>
    );
  }
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
  {
    strapiAbout {
      banner {
        subTitle
        headline
        button
        mobileBackground {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                quality: 100
                placeholder: BLURRED
                layout: CONSTRAINED
              )
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
              gatsbyImageData(
                width: 1800
                quality: 100
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
      }
      greenText {
        headline
        firstPartText
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
              gatsbyImageData(
                width: 400
                quality: 100
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
        mobilePic {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 200
                quality: 100
                placeholder: BLURRED
                layout: CONSTRAINED
              )
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
