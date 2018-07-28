import React from 'react'
import Link from 'gatsby-link'
import '../stylesheets/colorCard.scss'

const ColorCard = ({ photoOutfit, name, hexCode, link, photoBackground}) => (
  <li className="colorCard">
    <div style={{'background-image': `url(${photoOutfit})`}} className="colorCard__photo" />
    <div style={{ 'background-color': `${hexCode}` }} className="colorInfo">
      <p className="colorInfo__name">{name}</p>
      <span className="colorInfo__hexCode">{hexCode}</span>
      <Link to={link} className="guestInfo__link">about</Link>
    </div>
  </li>
)

export default ColorCard
