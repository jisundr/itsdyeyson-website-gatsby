import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Link as RouterLink } from "@reach/router"
import clsx from "clsx"

const HeaderNavigation = ({ fixed, theme }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "itsdyeyson-logo-default.png" }) {
        publicURL
      }
      defaultThemeLogo: file(
        relativePath: { eq: "itsdyeyson-logo-default.png" }
      ) {
        publicURL
      }

      darkThemeLogo: file(relativePath: { eq: "itsdyeyson-logo-dark.png" }) {
        publicURL
      }
    }
  `)

  const navClassName = clsx("flex items-center justify-between flex-wrap p-6", {
    "top-0 fixed": fixed,
  })

  return (
    <nav className={navClassName}>
      <div className="flex items-center flex-shrink-0 mr-6">
        <RouterLink to="/">
          <img
            className="h-5"
            src={data[`${theme}ThemeLogo`].publicURL}
            alt="logo"
          />
        </RouterLink>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            HOME
          </Link>
          <a
            href="#about-section"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            ABOUT
          </a>
          <a
            href="#project-section"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            PROJECTS
          </a>
        </div>
        <div>
          <a
            href="#contact-section"
            className="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded-full mt-4 lg:mt-0 bg-teal-500 text-white hover:bg-teal-600 hover:border-white"
          >
            SAY HI!
          </a>
        </div>
      </div>
    </nav>
  )
}

HeaderNavigation.defaultProps = {
  fixed: false,
  theme: "default",
}

export default HeaderNavigation
