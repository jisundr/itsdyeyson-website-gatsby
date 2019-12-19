import React, { Fragment } from "react"
import { Global } from "@emotion/core"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      {children}
    </Fragment>
  )
}

export default Layout
