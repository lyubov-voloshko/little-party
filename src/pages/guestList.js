import React from 'react'
import Link from 'gatsby-link'

const GuestsList = ({ data }) => (
  <div style={{display: 'inline-block'}}>
    <h1>List of Guests</h1>
    <ul>
    {data.allMarkdownRemark.edges.map(guest => (
      <li key={guest.node.id}>
        <h4>{guest.node.frontmatter.name}</h4>
        <Link to={guest.node.frontmatter.path}><small>about</small></Link>
        <p>{guest.node.frontmatter.status}</p>
        <hr />
      </li>
    ))}
    </ul>
  </div>
)

export const pageQuery = graphql`
  query ListIndexQuery {
    
      allMarkdownRemark{
        edges{
          node{
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
`

export default GuestsList