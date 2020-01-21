import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeaderNavigation from "../../../components/app/header-navigation"

const HeaderSection = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "header-bg.jpg" }) {
        publicURL
      }

      me: file(relativePath: { eq: "me.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <section
      id="header-section"
      className="bg-scroll h-screen text-white"
      style={{
        backgroundImage: `url(${data.bg.publicURL})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4">
        <HeaderNavigation />
        <div
          className="flex justify-center items-center py-20"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <div className="text-center">
            <img
              src={data.me.publicURL}
              className="rounded-full h-56 mb-12 mx-auto"
              alt="Jayson De los Reyes"
            />
            <h2 className="font-body text-2xl line leading-relaxed">
              My Name is Jayson
            </h2>
            <h1 className="font-heading font-bold text-4xl leading-relaxed">
              I AM A WEB DEVELOPER
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection
