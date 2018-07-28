import React from 'react';
import Link from 'gatsby-link'
import '../stylesheets/colorPage.scss'

export default function Template ({data}) {
  const color = data.markdownRemark;

  return(
    <div className="colorPage">
      <div className="colorPageHeader">
        <div className="colorPageHeader__background"
             style={{ 'background-image': `url(${color.frontmatter.photoBackground})` }} />
        <h1 className="colorPageHeader__title">{color.frontmatter.name}</h1>
      </div>
      <div className="colorPage__article"
           dangerouslySetInnerHTML={{__html: color.html}}>
      </div>
      <span className="colorPage__copyright">&copy; "Symbolic Meanings of Colors in The Great Gatsby" by ZHANG Haibing</span>
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
              photoBackground
          }
      }
  }
`