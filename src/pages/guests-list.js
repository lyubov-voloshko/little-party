import React from 'react'
import Link from 'gatsby-link'

const GuestsList = ({ data }) => (
  <div style={{display: 'inline-block'}}>
    <h1>List of Guests</h1>
    <ul>
    {data.allMarkdownRemark.edges.map(guest => (
      <li key={guest.node.id}>
        <h4>{guest.node.frontmatter.name}</h4>
        <Link to={guest.node.fields.slug}><small>about</small></Link>
        <p>{guest.node.frontmatter.status}</p>
        <hr />
      </li>
    ))}
    </ul>
  </div>
)

export const pageQuery = graphql`
  query ListGuestsQuery {
    
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/guests-list/"}}){
        edges{
          node{
            id
            fields {
              slug
            }
            frontmatter{
              name
              status
            }
          }
        }
      }
    
  }
`

export default GuestsList