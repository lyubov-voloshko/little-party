import React from 'react';
import Link from 'gatsby-link'

export default function Template ({data}) {
  const guest = data.markdownRemark;

  return(
    <div>
      <h1>{guest.frontmatter.name}</h1>
      <h6>{guest.frontmatter.status}</h6>
      <div dangerouslySetInnerHTML={{__html: guest.html}}></div>

    </div>
  )
}

export const guestQuery = graphql`
  query guestByPath ($slug: String!) {
    
      markdownRemark(fields: { slug: { eq: $slug } }){
          html
          frontmatter {
              name
              status
          }
      }
    
  }
`