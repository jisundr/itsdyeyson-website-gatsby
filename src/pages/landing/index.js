import React, { Fragment, useState, useEffect } from "react"

import HeaderSection from "./header-section"
import AboutSection from "./about-section"
import ProjectSection from "./project-section"
import ContactSection from "./contact-section"
import Footer from "./footer"
import HeaderNavigation from "../../components/app/header-navigation"
import clsx from "clsx"

const LandingPage = () => {
  const [showHeader, setShowHeader] = useState(false)
  const handleScroll = () => {
    const scrollPositionY = window.scrollY
    if (scrollPositionY >= 200) {
      setShowHeader(true)
    } else if (scrollPositionY < 200) {
      setShowHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  const headerClass = clsx("w-full bg-white fixed top-0 border-b", {
    hidden: !showHeader,
  })

  return (
    //TODO: Add fixed header
    <Fragment>
      <header className={headerClass}>
        <div className="container mx-auto px-4">
          <HeaderNavigation theme="dark" />
        </div>
      </header>
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
