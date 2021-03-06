import React from 'react'
import Link from 'gatsby-link'
import '../stylesheets/navigator.scss'

const Navigator = () => (
  <div className="navigator">
    <ul className="menu">
      <li className="menu__item">
        <Link to="/guests-list/"
              className="menu__itemLink"
              activeClassName="menu__itemLink_current">
          guests list
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/dress-code/"
              className="menu__itemLink"
              activeClassName="menu__itemLink_current">
          dress code
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/termsOfConduct/"
              className="menu__itemLink"
              activeClassName="menu__itemLink_current">
          code of conduct
        </Link>
      </li>
    </ul>
  </div>
)

export default Navigator