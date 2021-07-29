// const activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

// require("dotenv").config({
//   path: `.env.${activeEnv}`,
// });
module.exports = {
  siteMetadata: {
    title: "אורנה ובר",
    titleTemplate:
      "%s - אורנה ובר - המרכז לביוטי פיוז'ן - מרכז טיפוח ואסתטיקה רפואית",
    url: "https://www.ornaweber.co.il",
    description: `המרכז לקוסמטיקת פיוז'ן הוקם ע"י אורנה ובר, ומבוסס על 37 שנות ניסיון. העשייה של אורנה כוללת יצירת קומבינציות טיפוליות ייחודיות, פיתוח מוצרים קוסמטיים, הכשרת קוסמטיקאיות והובלת רפורמות שהגיעו עד שולחן הכנסת. כיו"ר ארגון הקוסמטיקאיות בישראל היא הובילה רפורמות שתרמו לעיצוב פני התחום. את הידע והניסיון הרב שנצבר אנחנו בקליניקה רותמים בכל טיפול וטיפול, לצורך התאמתו לעור המיוחד שלך ומקסום האפקט הטיפולי. והתוצאה? כיף להסתכל במראה!`,
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
    // "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-preact`,
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "green",
        showSpinner: true,
      },
    },
    "gatsby-plugin-image",

    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `אורנה ובר`,
        short_name: `אורנה`,
        start_url: `https://www.ornaweber.co.il`,
        lang: `he`,
        // background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/layout/assets/logo.svg",
      },
    },
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
