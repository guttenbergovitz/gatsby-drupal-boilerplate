import React from "react"
import Layout from "../components/layout"
import useDrupalBasicPages from "../hooks/drupal-basic-pages"
import useDrupalParagraphsPages from "../hooks/drupal-paragraphs-pages"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const HomePage = () => {
  const drupalBasicPages = useDrupalBasicPages()
  const drupalParagraphsPages = useDrupalParagraphsPages()
  return (
    <Layout>
      <h1>Sourced Drupal Pages</h1>
      <p>
        Currently sourcing only <em>Basic Pages</em> and{" "}
        <em>Paragraphs Pages</em>.
      </p>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 1em;
        `}
      >
        <div>
          <h2>Basic Pages</h2>
          <ul>
            {drupalBasicPages.map(node => (
              <li>
                <Link to={node.slug}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Paragraphs Pages</h2>
          <ul>
            {drupalParagraphsPages.map(node => (
              <li>
                <Link to={node.slug}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
