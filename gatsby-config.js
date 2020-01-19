require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `itsdyeyson: Web Developer`,
    description: `I'm Jayson De los Reyes, a software engineer and web developer from the Philippines.`,
    author: `@itsdyeyson`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `itsdyeyson`,
        short_name: `itsdyeyson`,
        start_url: `/`,
        background_color: `#011627`,
        theme_color: `#011627`,
        display: `minimal-ui`,
        icon: `src/images/itsdyeyson-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito`, `Open Sans`, `Fira Code`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
