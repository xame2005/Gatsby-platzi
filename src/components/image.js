import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function Image({ name }) {
  const data = useStaticQuery(
    graphql`
      query GET_NAME {
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <Img fluid={data[name].childImageSharp.fluid} />
}

export default Image
