import { useMemo } from "react";
import safeGet from "lodash.get";
import { graphql, useStaticQuery } from "gatsby";

// based on https://github.com/gatsbyjs/gatsby/issues/10482
const Image = (name) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(
              maxWidth: 1600
              quality: 90
              srcSetBreakpoints: [600, 800, 1280, 1600]
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
        (node) => name === node.childImageSharp?.fluid.originalName
      ),
    [data, name]
  );

  const fluid = safeGet(match, "childImageSharp.fluid");

  return fluid;
};

export default Image;
