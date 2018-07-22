const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark{
        edges{
          node{
            html
            id
            fields {
              slug
            }
            frontmatter{
              type
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/${node.frontmatter.type}Page.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug: node.fields.slug,
        }
      })
    })
  });
}