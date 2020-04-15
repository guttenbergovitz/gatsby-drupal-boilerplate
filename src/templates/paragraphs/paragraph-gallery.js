import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

export const GalleryParagraph = ({ node }) => {
  return (
    <div css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
      `}>
      {node.relationships.gallery.map(media => (
        <Img fluid={media.item.image.file.childImageSharp.fluid} />
      ))}

    </div>
  )
}

export const fragment = graphql`
  fragment ParagraphGallery on paragraph__gallery {
    id
    relationships {
      gallery: field_gallery {
        id
        item: relationships {
          image: field_media_image {
            file: localFile {
              path: absolutePath
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
