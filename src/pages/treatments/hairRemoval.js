import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import {
  Banner,
  Form,
  IconText,
  List,
  IconBox,
  PlainText,
} from "../../layout/components";
import { H1, Space, MobileTextWrapper } from "../../layout/common";

const HairRemoval = () => {
  const data = useStaticQuery(query);
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

  console.log(introText.headline, "!!!");
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
        <Space smallSpace={true} />
        <IconText data={firstIconText} />
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
            }}
          >
            {lastText}
          </H1>
        </FinalTextWrapper>
      </main>

      <Space />
      <Form data={form} />
    </div>
  );
};

const query = graphql`
  query {
    strapiHairRemoval {
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

      introText {
        headline
        text
      }
      firstIconText {
        firstPartText
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
