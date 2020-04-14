import React from "react"
import { graphql } from "gatsby"

export const ImagesParagraph = ({ node }) => {
  return <div>{node.relationships.images.map()}</div>
}

export const fragment = graphql`
  fragment ParagraphImages on paragraph__images {
    relationships {
      images: field_images {
        file: localFile {
          path: relativePath
        }
      }
    }
  }
`
