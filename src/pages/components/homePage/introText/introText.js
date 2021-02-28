import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import showdown from "showdown";
import ReactMarkdown from "react-markdown";

import { H1, ColoredH1 } from "../../../../layout/common";

import styles from "./introText.module.scss";

// var showdown  = require('showdown'),

const Intro = () => {
  const data = useStaticQuery(query);
  const {
    introText,
    // introBackground,
  } = data.allStrapiHomePage.edges[0].node.introText;
  // const backgroundUrl = introBackground[0].url;
  // delete it after you choose which md converter to choose
  // const converter = new showdown.Converter();
  // converter.setOption("noHeaderId", true);
  // const htmlData = converter.makeHtml(introText);
  return (
    <section className={styles.section}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          {/* <ColoredH1
            firstPart="את מחוגי השעון אי אפשר להחזיר לאחור,"
            secondPart="אבל את המראה שלך אפשר להצעיר!"
          /> */}
          <ReactMarkdown allowDangerousHtml={true}>{introText}</ReactMarkdown>
        </div>
      </div>
      {/* <img
        // src={`${process.env.API_URL}${backgroundUrl}`}
        src={`https://stark-forest-78751.herokuapp.com${backgroundUrl}`}
        className={styles.img}
      /> */}
    </section>
  );
};

const query = graphql`
  query {
    allStrapiHomePage {
      edges {
        node {
          id
          introText {
            introText
            # introBackground {
            #   url
            # }
          }
        }
      }
    }
  }
`;

export default Intro;
