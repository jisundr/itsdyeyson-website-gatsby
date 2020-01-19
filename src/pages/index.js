import React, { useEffect } from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"

import ComingSoonPage from "./coming-soon"
import LandingPage from "./landing"

import "../css/global.scss"

const RedirectToComingSoonPage = () => {
  useEffect(() => {
    navigate("/coming-soon")
  }, [])
  return null
}

const IndexPage = () => {
  return (
    <Router>
      <RedirectToComingSoonPage path="/" />
      <ComingSoonPage path="coming-soon" />
      <LandingPage path="beta" />
    </Router>
  )
}

export default IndexPage
