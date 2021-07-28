import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

import { Form, ColoredBgText, SquarePicText } from "../layout/components";
import SEO from "../utils/seo";

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
    <>
      <SEO title="עלינו" />
      {data && (
        <>
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
        </>
      )}
    </>
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
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 600
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
          alternativeText
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
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                quality: 100
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
        mobilePic {
          alternativeText
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
