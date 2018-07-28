import React from 'react';
import Link from 'gatsby-link'
import '../stylesheets/guestsPage.scss'

export default function Template ({data}) {
  const guest = data.markdownRemark;

  return(
    <div className="content">
      <div className="guestPageHeader">
        <img src={guest.frontmatter.photo} className="guestPageHeader__photo"/>
        <div className="guestPageHeader__info">
          <h1 className="guestPageHeader__name">{guest.frontmatter.name}</h1>
          <p className="guestPageHeader__status">
            <span className="guestPageHeader__status_type">{guest.frontmatter.status}</span>
            &nbsp;guest
          </p>
        </div>
      </div>
      <div className="guestPage__article" dangerouslySetInnerHTML={{__html: guest.html}}></div>
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
              photo
          }
      }
    
  }
`