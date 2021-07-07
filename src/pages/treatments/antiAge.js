import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  Banner,
  Form,
  IconText,
  List,
  TextBlocks,
} from "../../layout/components";
import { isMobile } from "../../utils/isMobile";
import { H1, Space, Headline } from "../../layout/common";
import SEO from "../../utils/seo";

const AntiAge = () => {
  const data = useStaticQuery(query);
  if (!data) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>loading </div>
    );
  }
  const { strapiAntiAging } = data;
  const {
    banner,
    midText,
    iconText,
    secondIconText,
    list,
    blockText,
    endText,
    form,
  } = strapiAntiAging;

  return (
    <>
      <SEO title="אנטי איג'ינג" />
      <Banner data={banner} formId="#form" />
      <Space smallSpace="true" />
      <main>
        <div>
          <IconText data={iconText} />
          <Headline style={{ paddingTop: "50px" }}>{midText}</Headline>
        </div>
        <H1
          color="green"
          bold="true"
          style={{ textAlign: isMobile && "center" }}
        >
          {" "}
          לא כל טיפול אנטי אייג'ינג מתאים לך!
        </H1>
        <IconText data={secondIconText} />
        <List data={list} />
        <Space />
        {/* since using twice space with no element in the middle does not work, wbr is an empty element */}
        <wbr />
        <TextBlocks content={blockText} />
        <Space />
        <H1
          bold="true"
          style={{ width: "60%", textAlign: "center", margin: "0 auto" }}
        >
          {endText}
        </H1>
        <Space />
      </main>
      <Form data={form} />
    </>
  );
};

const query = graphql`
  {
    strapiAntiAging {
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

      iconText {
        headline
        icon {
          url
        }
        firstPartText
        secondPartText
      }
      midText
      secondIconText {
        icon {
          url
        }
        firstPartText
        secondPartText
      }
      blockText {
        headline
        data {
          text
          headline
        }
      }
      list {
        headline
        listElement {
          bold
          text
        }
      }
      endText
      form {
        headline
        button
      }
    }
  }
`;

export default AntiAge;
