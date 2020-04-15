import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

export const ImagesParagraph = ({ node }) => {
  return (
    <div css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
      `}>
      {node.relationships.images.map( image => (
        <Img fluid={image.file.childImageSharp.fluid} />
    ))}
    </div>
  )
  // return <pre>{JSON.stringify(node.relationships.images, null, 2)}</pre>
}

export const fragment = graphql`
  fragment ParagraphImages on paragraph__images {
    id
    relationships {
      images: field_images {
        id
        file: localFile {
          path: absolutePath
          childImageSharp {
            fixed(width: 800, height: 600) {
              ...GatsbyImageSharpFixed

            }
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
