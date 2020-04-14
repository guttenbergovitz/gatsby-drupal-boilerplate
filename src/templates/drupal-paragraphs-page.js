import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { TextParagraph } from "./paragraphs/paragraph-text"

export const query = graphql`
  query($url: String!) {
    node: nodeParagraphsPage(path: { alias: { eq: $url } }) {
      title
      relationships {
        paragraphs: field_paragraphs {
          type: __typename
          ...ParagraphText
        }
      }
    }
  }
`

const DrupalParagraphsPage = ({ data: { node } }) => {
  const paragraphs = node.relationships.paragraphs
  return (
    <Layout>
      <h1>{node.title}</h1>
      {paragraphs.map(paragraph => (
        <pre>{JSON.stringify(paragraph, null, 2)}</pre>
      ))}
    </Layout>
  )
}

export default DrupalParagraphsPage
