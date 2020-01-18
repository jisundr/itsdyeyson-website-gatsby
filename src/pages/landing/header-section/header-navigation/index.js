import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link as RouterLink } from "@reach/router"

const HeaderNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "itsdyeyson-logo-default.png" }) {
        publicURL
      }
    }
  `)
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <RouterLink to="/">
          <img className="h-5" src={data.logo.publicURL} alt="logo" />
        </RouterLink>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <RouterLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            HOME
          </RouterLink>
          <RouterLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            ABOUT
          </RouterLink>
          <RouterLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            PROJECTS
          </RouterLink>
        </div>
        <div>
          <RouterLink
            to="/"
            className="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded-full mt-4 lg:mt-0 bg-teal-500 text-white hover:bg-teal-600 hover:border-white"
          >
            SAY HI!
          </RouterLink>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNavigation
