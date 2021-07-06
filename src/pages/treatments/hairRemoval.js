import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Spinner from "react-spinner-material";

import {
  Banner,
  Form,
  IconText,
  List,
  IconBox,
  PlainText,
} from "../../layout/components";
import { H1, Space } from "../../layout/common";

const HairRemoval = () => {
  const data = useStaticQuery(query);
  if (!data) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>loading </div>
    );
  }

  const { strapiHairRemoval } = data;
  const {
    banner,
    introText,
    firstIconText,
    list,
    secondIconText,
    iconsBlock,
    secondText,
    lastText,
    form,
  } = strapiHairRemoval;

  //TODO: move it to scss
  const FinalTextWrapper = styled.div`
    @media (max-width: 800px) {
      background-color: #f8f9f6;
    }
  `;

  return (
    <div>
      <Banner data={banner} />
      <Space smallSpace={true} />
      <main>
        <PlainText data={introText} />
        <Space smallSpace={true} isMobile="true" />
        <IconText data={firstIconText} mobileReverse="true" />
        <Space smallSpace={true} />
        <List data={list} />
        <Space />
        <IconText data={secondIconText} />
        <Space />
        <IconBox data={iconsBlock} />
        <Space />
        <PlainText headlineColor="green" data={secondText} />
        <Space />
        <FinalTextWrapper>
          <H1
            style={{
              width: "60%",
              textAlign: "center",
              margin: "0 auto",
              padding: "50px 0",
            }}
          >
            {lastText}
          </H1>
        </FinalTextWrapper>
      </main>

      <Form data={form} />
    </div>
  );
};

const query = graphql`
  {
    strapiHairRemoval {
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
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }

      introText {
        headline
        text
      }
      firstIconText {
        firstPartText
        secondPartText
        icon {
          url
        }
      }
      list {
        headline
        listElement {
          text
        }
      }
      secondIconText {
        headline
        firstPartText
        secondPartText
        icon {
          url
        }
      }
      iconsBlock {
        headline
        buttomText
        icons {
          text
          icon {
            url
          }
        }
      }
      secondText {
        headline
        text
      }
      lastText
      form {
        headline
        button
      }
    }
  }
`;

export default HairRemoval;
