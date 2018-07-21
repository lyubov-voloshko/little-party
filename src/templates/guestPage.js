import React from 'react';
import Link from 'gatsby-link'

export default function Template ({data}) {
  const guest = data.markdownRemark;

  return(
    <div>
      <Link to='/guestList'>Back to Guests List</Link>
      <hr />
      <h1>{guest.frontmatter.name}</h1>
      <h6>{guest.frontmatter.status}</h6>
      <div dangerouslySetInnerHTML={{__html: guest.html}}></div>

    </div>
  )
}

export const guestQuery = graphql`
  query guestByPath ($path: String!) {
    
      markdownRemark(frontmatter: {path: { eq: $path}}){
          html
          frontmatter {
              path
              name
              status
          }
      }
    
  }
`