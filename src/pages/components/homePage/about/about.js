import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

import { H1, Button } from "../../../../layout/common";
import getFluid from "../../../../utils/getFluid";

import styles from "./about.module.scss";

const About = () => {
  const data = useStaticQuery(query);
  const {
    text,
    title,
    button,
    ornaPicture,
  } = data.allStrapiHomePage.edges[0].node.about;
  const background = getFluid("backgroundSmall.png");
  const fluid = ornaPicture.childImageSharp.fluid;
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* <div className={styles.imgWrapper}>
          <H1 className={styles.headline}>{title} </H1>
          <Img fluid={fluid} className={styles.img} />
        </div> */}
        <H1 className={styles.headline}>{title} </H1>
        <div className={styles.content}>
          <Img fluid={fluid} className={styles.img} />
          <div className={styles.text}>
            <ReactMarkdown allowDangerousHtml={true}>{text}</ReactMarkdown>
            <div className={styles.button}>
              <Button href="/test" style={{ width: "70%" }}>
                {button}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundWrapper}>
        <BackgroundImage
          fluid={background}
          Tag="div"
          className={styles.background}
          //   style={{ position: "absolute" }}
          alt="banner picture"
        />
      </div>
    </section>
  );
};

const query = graphql`
  query {
    allStrapiHomePage {
      edges {
        node {
          about {
            text
            title
            button
            ornaPicture {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default About;
