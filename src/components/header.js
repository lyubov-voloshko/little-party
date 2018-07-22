import React from 'react'
import Link from 'gatsby-link'
import '../stylesheets/header.scss'

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link className="header__siteName" to="/">{siteTitle}</Link>
  </header>
)

export default Header
