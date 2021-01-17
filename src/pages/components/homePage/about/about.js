import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";
import BackgroundImage from "gatsby-background-image";

import { H1, Button } from "../../../../layout/common";
import getFluid from "../../../../utils/getFluid";

import styles from "./about.module.scss";

const About = () => {
  const data = useStaticQuery(query);
  console.log(data);
  const {
    text,
    title,
    button,
    ornaPicture,
  } = data.allStrapiHomePage.edges[0].node.about;
  const fluid = getFluid("backgroundSmall.png");

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <H1 className={styles.headline}>{title} </H1>
        <div className={styles.content}>
          <img
            src={`${process.env.API_URL}${ornaPicture.url}`}
            className={styles.img}
          />
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
          fluid={fluid}
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
              url
            }
          }
        }
      }
    }
  }
`;

export default About;
