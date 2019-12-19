import React from "react"
import { Router } from "@reach/router"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import ComingSoonPage from "./coming-soon"

library.add(fab, faSun, faMoon)

const IndexPage = () => (
  <Router>
    <ComingSoonPage path="/" />
  </Router>
)

export default IndexPage
