import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <ul style={{
    display: 'flex',
    'justify-content': 'center',
    background: '#ccc',
    width: '100%',
    'list-style-type': 'none',
    'margin-left': '0',
  }}>
    <li style={{padding: '10px'}}><Link to="/guestlist/">Guest List</Link></li>
    <li style={{padding: '10px'}}><Link to="/termsOfConduct/">Go to Terms</Link></li>
  </ul>
)

export default Menu