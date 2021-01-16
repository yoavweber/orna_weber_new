import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import showdown from "showdown";
import ReactMarkdown from "react-markdown";

import { H1, ColoredH1 } from "../../../../layout/common";

import styles from "./introText.module.scss";

// var showdown  = require('showdown'),

const Intro = () => {
  //   const data = useStaticQuery(query);
  //   const converter = new showdown.Converter();
  //   converter.setOption("noHeaderId", true);
  //   const htmlData = converter.makeHtml(data.strapiTests.test);
  return (
    <section className={styles.section}>
      <ColoredH1
        firstPart="את מחוגי השעון אי אפשר להחזיר לאחור,"
        secondPart="אבל את המראה שלך אפשר להצעיר!"
      />
      <ReactMarkdown allowDangerousHtml={true}>
        {/* {data.strapiTests.test} */}
      </ReactMarkdown>

      {/* <div dangerouslySetInnerHTML={{ __html: htmlData }} /> */}
      {/* <H1>
        {" "}
        את מחוגי השעון אי אפשר להחזיר לאחור,
        <br />{" "}
        <span style={{ color: "#9fc975" }}>אבל את המראה שלך אפשר להצעיר!</span>
      </H1> */}
    </section>
  );
};

// const query = graphql`
//   query {
//     strapiTests {
//       test
//     }
//   }
// `;

export default Intro;
