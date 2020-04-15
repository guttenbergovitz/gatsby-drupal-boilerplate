import React from "react"
import useSiteMetadata from "../hooks/site-metadata"
import Header from "./header"
import Footer from "./footer"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const { title, slogan } = useSiteMetadata()
  return (
    <div
      id="app"
      css={css`
        display: grid;
        grid-template-rows: 4em minmax(calc(100vh - 10em), auto) 6em;
      `}
    >
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

          :root {
            --maxPageWidth: 56em;
          }

          html {
            box-sizing: border-box;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            font-family: "Roboto", sans-serif;
            font-weight: 300;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 400;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={slogan} />
      </Helmet>
      <Header>
        <div className="title">
          <Link
            to=""
            css={css`
              text-decoration: none;
            `}
          >
            {title}
          </Link>
        </div>
        <div className="slogan">{slogan}</div>
      </Header>
      <main
        css={css`
          padding: 1em calc((100vw - 72em) / 2);
        `}
      >
        {children}
      </main>
      <Footer>
        <div
          css={css`
            font-size: 0.75em;
          `}
        >
          © {new Date().getFullYear()}, Guttenbergovitz
        </div>
      </Footer>
    </div>
  )
}

export default Layout
