import React from 'react'
import GuestCard from '../components/guestCard'
import Link from 'gatsby-link'
import '../stylesheets/content.scss'
import '../stylesheets/guestsList.scss'

const GuestsList = ({ data }) => (
  <div className="content">
    <h1 className="pageName">List of Guests</h1>
    <ul className="guestsList">
      {data.allMarkdownRemark.edges.map(guest => (
        <GuestCard key={guest.node.id}
                   photoLink={guest.node.frontmatter.photo}
                   name={guest.node.frontmatter.name}
                   status={guest.node.frontmatter.status}
                   link={guest.node.fields.slug}
        />
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
              photo
            }
          }
        }
      }
    
  }
`

export default GuestsList