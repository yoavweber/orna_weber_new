// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /react-particle-animation/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };

// const path = require(`path`);
// const { slash } = require(`gatsby-core-utils`);

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // query content for WordPress posts
//   const {
//     data: {
//       allWpPost: { nodes: allPosts },
//     },
//   } = await graphql(`
//     query MyQuery {
//       pages {
//         edges {
//           node {
//             title
//           }
//         }
//       }
//     }
//   `);

//   console.log(data);

//   //   const postTemplate = path.resolve(`./src/templates/post.js`);

//   //   allPosts.forEach((post) => {
//   //     createPage({
//   //       // will be the url for the page
//   //       path: post.uri,
//   //       // specify the component template of your choice
//   //       component: slash(postTemplate),
//   //       // In the ^template's GraphQL query, 'id' will be available
//   //       // as a GraphQL variable to query for this post's data.
//   //       context: {
//   //         id: post.id,
//   //       },
//   //     });
//   //   });
// };
