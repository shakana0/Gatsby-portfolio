const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const prodcutSlugs = await graphql(
    `
      query getAllProjectSlugs {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );
  const categorySlugs = await graphql(`
    query getAllCategorySlugs {
      allContentfulCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
    `);

  prodcutSlugs.data.allContentfulProject.edges.forEach((edge) => {
    actions.createPage({
      //URL
      path: "/project/" + edge.node.slug,
      //Template
      component: path.resolve("./src/templates/singleProject.tsx"),
      context: { slug: edge.node.slug },
    });
  });

  categorySlugs.data.allContentfulCategory.edges.forEach((edge) => {
    actions.createPage({
      //URL
      path: "/category/" + edge.node.slug,
      //Template
      component: path.resolve("./src/templates/categories.tsx"),
      context: { slug: edge.node.slug },
    });
  });
};
