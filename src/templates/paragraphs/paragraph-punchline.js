import React from "react"
import { graphql } from "gatsby"

export const PunchlineParagraph = ({ node }) => {
  return <h3>{node.punchline}</h3>
}

export const fragment = graphql`
  fragment ParagraphPunchline on paragraph__punchline {
    punchline: field_punchline
  }
`
