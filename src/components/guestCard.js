import React from 'react'
import Link from 'gatsby-link'
import '../stylesheets/guestCard.scss'

const GuestCard = ({ photoLink, name, status, link}) => (
  <li className="guestCard">
    <div style={{'background-image': `url(${photoLink})`}} className="guestCard__photo" />
    <div className="guestInfo">
      <p className="guestInfo__name">{name}</p>
      <span className="guestInfo__status">{status}</span>
      <Link to={link} className="guestInfo__link">about</Link>
    </div>
  </li>
)

export default GuestCard
