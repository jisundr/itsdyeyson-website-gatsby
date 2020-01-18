import React from "react"

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-4 px-8 flex justify-between">
      <span className="font-body text-sm">
        Crafted with <span className="text-red-600">♥</span> by @itsdyeyson
      </span>
      <span className="font-body text-sm">
        <a
          href="https://tailwindcss.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Made with Tailwind CSS
        </a>
      </span>
    </footer>
  )
}

export default Footer
