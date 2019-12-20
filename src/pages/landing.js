import React, { useEffect } from "react"
import { navigate } from "gatsby"

const LandingPage = () => {
  useEffect(() => {
    navigate("/coming-soon")
  }, [])
  return null
}

export default LandingPage
