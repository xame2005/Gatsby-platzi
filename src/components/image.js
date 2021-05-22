import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

function Image({ name }) {
  return (
    <StaticQuery
      query
      GET_IMAGE={graphql`
        query {
          icon: file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data[name].childImageSharp.fluid} />}
    />
  )
}

export default Image
