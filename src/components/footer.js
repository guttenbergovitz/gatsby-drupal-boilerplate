import React from "react"
import { css } from "@emotion/core"

const Footer = ({ children }) => {
  return (
    <footer
      css={css`
        background-color: lightgray;
        padding: 1em;
      `}
    >
      {children}
    </footer>
  )
}

export default Footer
