// const activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

// require("dotenv").config({
//   path: `.env.${activeEnv}`,
// });
module.exports = {
  siteMetadata: {
    title: "orna weber",
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      // options: {
      //   apiURL: "http://localhost:1337",
      //   contentTypes: ["article", "category", "writer", "tests"],
      //   singleTypes: [`homepage`, `global`],
      //   queryLimit: 1000,
      // },
      options: {
        apiURL: "https://ancient-headland-46960.herokuapp.com",
        // apiURL: process.env.API_URL,
        // apiURL: "http://localhost:1337",
        contentTypes: ["article", "category", "writer", "tests"],
        singleTypes: [
          `global`,
          "home-page",
          "acne",
          "about",
          "anti-aging",
          "scars",
          "hair-removal",
          "beauty-fusion",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-plugin-sass",

    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-nprogress",

    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
