import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Banner, Form } from "../layout/components";
import pigmentation from "../layout/assets/icons/banner/pigmentation.svg";
import face from "../layout/assets/icons/banner/face.svg";
import twoBottles from "../layout/assets/icons/banner/twoBottles.svg";

import Treatments from "./components/homePage/treatments/treatments";
import Slider from "./components/homePage/slider/slider";
import IntroText from "./components/homePage/introText/introText";
import About from "./components/homePage/about/about";

const Homepage = () => {
  const data = useStaticQuery(query);
  const { strapiHomePage } = data;
  const { banner, introText, about, form } = strapiHomePage;
  const content = [
    {
      headline: "המרכז לקוסמטיקת פיוז'ן",
      subTitle: "שילוב מיוחד לכל אחת ",
      img: "beautyFusion.png",
      buttonText: "לשילוב המיוחד שלך",
      icon: face,
    },
    {
      headline: "מעיין הנעורים הפרטי שלך",
      text: "השילובים שיאפשרו לך להיראות ולהרגיש צעירה ",
      img: "antiaging.png",
      buttonText: "קחו אותי למעיין הנעורים",
      icon: twoBottles,
    },
    {
      headline: "הכתמים לא עוזבים?",
      text: "טיפולי פיגמנטציה בהתאמה מלאה לעור המיוחד שלך ",
      img: "pigmentation.png",
      buttonText: "לטיפול מוכח ויעיל",
      icon: pigmentation,
    },
  ];

  const bannerArray = banner.map((content) => {
    return <Banner data={content} />;
  });

  return (
    <>
      <div>
        <Slider
          style={{
            position: "relative",
            height: "25vw",
            width: "100vw",
          }}
          showElements={1}
          content={bannerArray}
        />
      </div>
      <IntroText data={introText} />
      <Treatments />
      <About data={about} />
      <Form data={form} />
    </>
  );
};

const query = graphql`
  query {
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
                # ...GatsbyImageSharpFluid
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
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
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
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
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
