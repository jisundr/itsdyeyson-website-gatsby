import React from "react"
import { Router } from "@reach/router"
import ComingSoonPage from "./coming-soon"
import LandingPage from "./landing"

import "../css/global.scss"

const IndexPage = () => {
  return (
    <Router>
      <LandingPage path="/" />
      <ComingSoonPage path="coming-soon" />
    </Router>
  )
}

export default IndexPage
