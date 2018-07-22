import React from 'react'
import Link from 'gatsby-link'
import '../stylesheets/navigator.scss'

const Navigator = () => (
  <ul className="navigator">
    <li className="navigator__item">
      <Link to="/guests-list/" className="navigator__itemLink">guests list</Link>
    </li>
    <li className="navigator__item">
      <Link to="/dress-code/" className="navigator__itemLink">dress code</Link>
    </li>
    <li className="navigator__item">
      <Link to="/termsOfConduct/" className="navigator__itemLink">code of conduct</Link>
    </li>
  </ul>
)

export default Navigator