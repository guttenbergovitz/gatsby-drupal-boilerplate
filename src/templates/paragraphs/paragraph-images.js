import React from "react"
import { graphql } from "gatsby"

export const ImagesParagraph = ({ node }) => {
  return <div>{node.relationships.images.map()}</div>
}

export const fragment = graphql`
  fragment ParagraphImages on paragraph__images {
    id
    relationships {
      images: field_images {
        id
        file: localFile {
          path: relativePath
        }
      }
    }
  }
`
