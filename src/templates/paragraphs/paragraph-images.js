import React from "react"
import { graphql } from "gatsby"

export const ImagesParagraph = ({ node }) => {
  return (
    node.relationships.images.map( image => (
      <img src={image.file.path}/>
    ))
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
        }
      }
    }
  }
`
