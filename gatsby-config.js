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
      options: {
        apiURL: "https://ancient-headland-46960.herokuapp.com",
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
    "gatsby-plugin-image",

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
