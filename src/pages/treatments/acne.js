import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Spinner from "react-spinner-material";

import { Banner, Form, IconText, TextBlocks } from "../../layout/components";
import { Space } from "../../layout/common";

const Acne = () => {
  const data = useStaticQuery(query);
  if (!data) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>loading </div>
    );
  }
  const { strapiAcne } = data;

  const { banner, BlockText, firstIconText, secondIconText, form } = strapiAcne;
  return (
    <div>
      <Banner data={banner} />
      <main>
        <IconText data={firstIconText} />
        <IconText data={secondIconText} />
        <Space />
        {/* TODO: change the headline color to green */}
        <TextBlocks content={BlockText} />
      </main>
      <Space isMobile="true" />
      <Form data={form} />
    </div>
  );
};

const query = graphql`
  {
    strapiAcne {
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
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        icon {
          url
        }
      }
      form {
        button
        headline
        id
      }
      BlockText {
        data {
          headline
          id
          text
        }
        headline
      }
      firstIconText {
        headline
        firstPartText
        icon {
          id
          url
        }
      }
      secondIconText {
        firstPartText
        reverse
        icon {
          id
          url
        }
      }
    }
  }
`;

export default Acne;
