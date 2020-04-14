import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($url: String!) {
    node: nodePage(path: { alias: { eq: $url } }) {
      title
      body {
        processed
      }
    }
  }
`

const DrupalBasicPage = ({ data: { node } }) => {
  return (
    <Layout>
      <h1>{node.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: node.body.processed }} />
    </Layout>
  )
}

export default DrupalBasicPage
