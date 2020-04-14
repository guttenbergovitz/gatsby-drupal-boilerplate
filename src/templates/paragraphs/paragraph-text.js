import React from "react"
import { graphql } from "gatsby"

export const TextParagraph = ({ node }) => {
  return <div dangerouslySetInnerHTML={{ __html: node.text.processed }} />
}

export const fragment = graphql`
  fragment ParagraphText on paragraph__text {
    text: field_text {
      processed
    }
  }
`
