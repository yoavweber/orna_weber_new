import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Banner, Form } from "../layout/components";
import { Space } from "../layout/common";

import Treatments from "./components/homePage/treatments/treatments";
import Slider from "./components/homePage/slider/slider";
import IntroText from "./components/homePage/introText/introText";
import About from "./components/homePage/about/about";

const Homepage = () => {
  const data = useStaticQuery(query);
  if (!data) {
    return <div>loading!!!!!!!!!!</div>;
  }
  const { strapiHomePage } = data;
  const { banner, introText, about, form, treatment } = strapiHomePage;

  const bannerArray = banner.map((content) => {
    return (
      <Banner
        data={content}
        // id number 3 is antiaging, which has green subtitle
        subTitleColor={content.id === 3 ? "green" : "white"}
      />
    );
  });

  return (
    <>
      <div>
        <Slider
          style={{
            position: "relative",
            width: "100vw",
          }}
          showElements={1}
          content={bannerArray}
        />
      </div>
      <IntroText data={introText} />
      <Treatments data={treatment} />
      <About data={about} />
      <Space />
      <Form data={form} />
    </>
  );
};

const query = graphql`
  {
    strapiHomePage {
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
      introText {
        title
        introText
        introBackground {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      about {
        title
        text
        button
        ornaPicture {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      treatment {
        headline
        bubble {
          name
          link
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 100
                  quality: 100
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
      form {
        headline
        button
      }
    }
  }
`;

export default Homepage;
