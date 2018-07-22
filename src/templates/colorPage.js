import React from 'react';
import Link from 'gatsby-link'
import '../stylesheets/colorPage.scss'

export default function Template ({data}) {
  const color = data.markdownRemark;

  return(
    <div>
      <h1 className="header" style={{ 'color': `${color.frontmatter.hexCode}` }}>{color.frontmatter.name}</h1>
      <div dangerouslySetInnerHTML={{__html: color.html}}></div>
    </div>
  )
}

export const guestQuery = graphql`
  query colorByPath ($slug: String!) {
    
      markdownRemark(fields: { slug: { eq: $slug } }){
          html
          frontmatter {
              name
              hexCode
          }
      }
    
  }
`