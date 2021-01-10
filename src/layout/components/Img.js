import React, { useMemo } from "react";
import safeGet from "lodash.get";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

//@depricated: DELETE!
// based on https://github.com/gatsbyjs/gatsby/issues/10482
const Image = ({ name, type, tag, children, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(
              maxWidth: 1600
              quality: 60
              srcSetBreakpoints: [600, 800, 1280, 1600]
            ) {
              ...GatsbyImageSharpFluid_noBase64
              originalName
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () =>
      data.allFile.nodes.find(
        (node) => name === node.childImageSharp.fluid.originalName
      ),
    [data, name]
  );

  const fluid = safeGet(match, "childImageSharp.fluid");

  console.log(props, "fluod");

  return fluid ? (
    type === "background" ? (
      <BackgroundImage
        fluid={fluid}
        Tag={tag ? tag : "div"}
        style={{ width: "100%" }}
        {...props}
      >
        {children}
      </BackgroundImage>
    ) : (
      <Img fluid={fluid} Tag="div" style={{ width: "100%" }} {...props} />
    )
  ) : null;
};

export default Image;
