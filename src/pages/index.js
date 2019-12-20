import React, { useState } from "react"
import { Router } from "@reach/router"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import ComingSoonPage from "./coming-soon"
import LandingPage from "./landing"

library.add(fab, faSun, faMoon)

const IndexPage = () => {
  const [isDark, setDarkTheme] = useState(false)

  return (
    <Router>
      <LandingPage path="/" />
      <ComingSoonPage path="coming-soon" />
    </Router>
  )
}

export default IndexPage
