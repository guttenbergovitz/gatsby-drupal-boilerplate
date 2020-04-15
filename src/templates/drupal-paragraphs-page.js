import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import { TextParagraph } from "./paragraphs/paragraph-text"
import { PunchlineParagraph } from "./paragraphs/paragraph-punchline"
import { ImagesParagraph } from "./paragraphs/paragraph-images"

import {getParagraph} from "./paragraphs/paragraphsHelper"

export const query = graphql`
  query($url: String!) {
    node: nodeParagraphsPage(path: { alias: { eq: $url } }) {
      id
      title
      relationships {
        paragraphs: field_paragraphs {
          __typename
          type: __typename
          ...ParagraphText
          ...ParagraphPunchline
          ...ParagraphImages
        }
      }
    }
  }
`


const DrupalParagraphsPage = ({ data: { node } }) => {
  const paragraphs = node.relationships.paragraphs.map(getParagraph)
  return (
    <Layout>
      <h1>{node.title}</h1>
      {paragraphs}
    </Layout>
  )
}

export default DrupalParagraphsPage
