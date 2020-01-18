import React, { Fragment } from "react"

import HeaderSection from "./header-section"
import AboutSection from "./about-section"
import ProjectSection from "./project-section"
import ContactSection from "./contact-section"
import Footer from "./footer"

const LandingPage = () => {
  return (
    //TODO: Add fixed header
    <Fragment>
      <main>
        <HeaderSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </Fragment>
  )
}

export default LandingPage
