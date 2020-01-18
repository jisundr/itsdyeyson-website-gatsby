import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "contact-bg.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <section className="min-h-screen w-full flex">
      <div
        className="w-1/3 min-h-screen"
        style={{
          backgroundImage: `url(${data.bg.publicURL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="w-2/3 min-h-screen bg-white text-primary py-20">
        <div className="container px-20">
          <div className="mb-10">
            <h1 className="font-heading font-bold text-4xl mb-4">SAY HI!</h1>
            <p className="font-body text-xl mb-16">
              If you want to get in touch, talk to about a project collaboration
              or just say hi, fill-up the form below or send to my e-mail at
              hello@dyeyson.dev and ~let’s talk.
            </p>
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white"
                    placeholder="Juan De la Cruz"
                  />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white"
                    placeholder="juan.delacruz@gmail.com"
                  />
                </div>

                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Your message
                  </label>
                  <textarea
                    rows={5}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white resize-none"
                    placeholder="Your message here..."
                  />

                  <button
                    type="submit"
                    className="inline-block text-sm p-4 leading-none border border-transparent rounded-full mt-4 lg:mt-0 bg-teal-500 text-white hover:bg-teal-600 hover:border-white"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <h1 className="font-heading font-bold text-4xl mb-4">
              LET'S CONNECT
            </h1>
            <p className="font-body text-xl mb-8">
              You may follow or connect me thru my social media accounts.
            </p>
            <div>
              <a
                href="mailto:hello@itsdyeyson.dev"
                target="_top"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              <a
                href="https://facebook.com/itsdyeyson"
                target="_blank"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </a>
              <a
                href="https://twitter.com/itsdyeyson"
                target="_blank"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              </a>
              <a
                href="https://github.com/itsdyeyson"
                target="_blank"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/itsdyeyson/"
                target="_blank"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
