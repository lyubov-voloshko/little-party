import ColorCard from '../components/colorCard'
import React from 'react'
import Link from 'gatsby-link'
import '../stylesheets/dressCode.scss'

const GuestsList = ({ data }) => (
  <div className="content">
    <h1 className="pageName">Colors of the Party</h1>
    <p>Colors matter on Gatsby's perties. Pay attention to the colors in your outfit.</p>
    <ul className="colorList">
    {data.allMarkdownRemark.edges.map(color => (
      <ColorCard key={color.node.id}
                 photoOutfit={color.node.frontmatter.photoOutfit}
                 name={color.node.frontmatter.name}
                 hexCode={color.node.frontmatter.hexCode}
                 link={color.node.fields.slug}
                 photoBackground={color.node.frontmatter.photoBackground}
      />
    ))}
    </ul>
    <p>Illustration Catherine Martin/Warner Bros <a href=""></a></p>
  </div>
)

export const pageQuery = graphql`
  query ListColorsQuery {
    
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/dress-code/"}}){
        edges{
          node{
            id
            fields {
              slug
            }
            frontmatter{
              name
              hexCode
              photoOutfit
              photoBackground
            }
          }
        }
      }
    
  }
`

export default GuestsList