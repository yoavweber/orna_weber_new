import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import { Banner, Form, IconText, TextBlocks } from "../../layout/components";
import { H1, Space } from "../../layout/common";

const Acne = () => {
  const data = useStaticQuery(query);
  const { strapiAcne } = data;
  const { banner, BlockText, firstIconText, secondIconText, form } = strapiAcne;

  return (
    <div>
      <Banner data={banner} />
      <main>
        <Space />
        <IconText data={firstIconText} />
        <IconText data={secondIconText} />
        <Space />
        {/* TODO: change the headline color to green */}
        <TextBlocks content={BlockText} />
      </main>
      <Space />
      <Form data={form} />
    </div>
  );
};

const query = graphql`
  query {
    strapiAcne {
      banner {
        subTitle
        headline
        button
        desktopBackground {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
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
