import React from "react"
import { css } from "@emotion/core"

const Footer = ({ children }) => {
  return (
    <footer
      css={css`
        background-color: lightgray;
        padding: 1em calc((100vw - 72em) / 2);
      `}
    >
      {children}
    </footer>
  )
}

export default Footer
