/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === "/") {
    page.matchPath = "/*"
    createPage(page)
  }
}
