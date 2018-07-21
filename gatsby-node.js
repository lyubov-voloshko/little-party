const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators;
  const guestPageTemlate = path.resolve('src/templates/guestPage.js');
  return graphql(`
    {
      allMarkdownRemark{
        edges{
          node{
            html
            id
            frontmatter{
              path
              name
              status
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
        path: node.frontmatter.path,
        component: guestPageTemlate
      })
    })
  });
}