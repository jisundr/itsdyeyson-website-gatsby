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
  const onSetDarkThemeChanged = () => setDarkTheme(!isDark)

  console.log("isDark", isDark)
  return (
    <Router>
      <LandingPage path="/" />
      <ComingSoonPage
        path="coming-soon"
        isDark={isDark}
        onSetDarkThemeChanged={onSetDarkThemeChanged}
      />
    </Router>
  )
}

export default IndexPage
