import React from "react"

import HeaderSection from "./header-section"
import AboutSection from "./about-section"
import ProjectSection from "./project-section"
import ContactSection from "./contact-section"

const LandingPage = () => {
  return (
    <main>
      <HeaderSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}

export default LandingPage
