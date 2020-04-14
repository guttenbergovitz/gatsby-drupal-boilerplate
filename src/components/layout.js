import React from "react"
import useSiteMetadata from "../hooks/site-metadata"
import Header from "./header"
import Footer from "./footer"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const { title, slogan } = useSiteMetadata()
  return (
    <div id="app">
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
          body {
            font-family: "Roboto", sans-serif;
            font-weight: 300;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={slogan} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
