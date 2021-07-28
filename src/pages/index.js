import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { Carousel } from "react-bootstrap";

import { Banner, Form } from "../layout/components";
import { Space } from "../layout/common";
import SEO from "../utils/seo";
// import image from "../../src/images/homePage/acneBanner.png";

import Treatments from "./components/homePage/treatments/treatments";
import Slider from "./components/homePage/slider/slider";
import IntroText from "./components/homePage/introText/introText";
import About from "./components/homePage/about/about";

const Homepage = () => {
  const data = useStaticQuery(query);
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
      <SEO />
      {data && (
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
          {/* <Carousel>
        <Carousel.Item>
          <img src={image} />
          <div style={{ backgroundColor: "green" }}>sdfd</div>
          <Banner
            data={banner[0]}
            // id number 3 is antiaging, which has green subtitle
            // subTitleColor={content.id === 3 ? "green" : "white"}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />

          <div style={{ backgroundColor: "red" }}>etst</div>
          <Banner
            data={banner[1]}
            // id number 3 is antiaging, which has green subtitle
            // subTitleColor={content.id === 3 ? "green" : "white"}
          />
        </Carousel.Item>
      </Carousel>
      <Carousel>
        {banner.map((content) => {
          <Carousel.Item>
            <Banner
              data={content}
              // id number 3 is antiaging, which has green subtitle
              subTitleColor={content.id === 3 ? "green" : "white"}
            />
          </Carousel.Item>;
        })}
      </Carousel> */}

          <IntroText data={introText} />
          <Treatments data={treatment} />
          <About data={about} />
          <Space />
          <Form data={form} />
        </>
      )}
    </>
  );
};

const query = graphql`
  {
    strapiHomePage {
      banner {
        id
        subTitle
        headline
        button
        desktopBackground {
          alternativeText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        mobileBackground {
          alternativeText
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
          alternativeText
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
              gatsbyImageData(width: 300, quality: 100)
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
            alternativeText
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
