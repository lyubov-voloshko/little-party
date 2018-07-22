import React from 'react'
import Link from 'gatsby-link'

const GuestsList = ({ data }) => (
  <div style={{display: 'inline-block'}}>
    <h1>List of Colors</h1>
    <ul>
    {data.allMarkdownRemark.edges.map(color => (
      <li key={color.node.id}>
        <h4>{color.node.frontmatter.name}</h4>
        <p>{color.node.frontmatter.hexCode}</p>
        <Link to={color.node.fields.slug}><small>about</small></Link>
        <hr />
      </li>
    ))}
    </ul>
  </div>
)

export const pageQuery = graphql`
  query ListColorsQuery {
    
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/dress-code/"}}){
        edges{
          node{
            id
            fields {
              slug
            }
            frontmatter{
              name
              hexCode
            }
          }
        }
      }
    
  }
`

export default GuestsList