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
        // apiURL: "https://stark-forest-78751.herokuapp.com",
        // apiURL: process.env.API_URL,
        apiURL: "http://localhost:1337",
        contentTypes: ["article", "category", "writer", "tests"],
        singleTypes: [`global`, "home-page"],
        queryLimit: 1000,
      },
    },
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    // "gatsby-plugin-offline",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
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
