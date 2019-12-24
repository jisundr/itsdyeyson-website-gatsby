/** @jsx jsx */
import { Flex, Box } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useColorMode, Styled, jsx } from "theme-ui"
import { Link, Button, Heading, Image } from "@theme-ui/components"
import { useStaticQuery, graphql } from "gatsby"
import { Link as RouterLink } from "@reach/router"

import Layout from "../components/layout"

const ComingSoonPage = () => {
  const data = useStaticQuery(graphql`
    query {
      darkThemeLogo: file(relativePath: { eq: "itsdyeyson-logo-default.png" }) {
        publicURL
      }

      defaultThemeLogo: file(relativePath: { eq: "itsdyeyson-logo-dark.png" }) {
        publicURL
      }
    }
  `)
  const [colorMode, setColorMode] = useColorMode()
  const onSetDarkThemeChanged = () =>
    setColorMode(colorMode === "default" ? "dark" : "default")

  return (
    <Layout>
      <Flex
        as="header"
        width={1}
        sx={{
          position: "fixed",
          top: 0,
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "66px",
        }}
        px={[3, 4]}
        py={3}
      >
        <RouterLink to="/">
          <Image
            src={data[`${colorMode}ThemeLogo`].publicURL}
            sx={{
              height: "1.5rem",
            }}
          />
        </RouterLink>
        <Button variant="link" onClick={onSetDarkThemeChanged}>
          {colorMode === "default" ? (
            <FontAwesomeIcon icon="moon" />
          ) : (
            <FontAwesomeIcon icon="sun" />
          )}
        </Button>
      </Flex>
      <Flex
        as="main"
        px={[3, 0]}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          paddingTop: "66px",
          paddingBottom: "168px",
          minHeight: "300px",
        }}
      >
        <Box>
          <Heading>Oops!</Heading>
          <Styled.h2>This site is currently working in progress!</Styled.h2>
        </Box>
      </Flex>
      <Box
        as="footer"
        width={1}
        py={4}
        sx={{
          position: "fixed",
          bottom: 0,
          textAlign: "center",
        }}
      >
        <Box pb={3}>
          <Styled.root>Connect me thru:</Styled.root>
        </Box>
        <Box mb={4}>
          <Link href="mailto:hello@itsdyeyson.dev" target="_top">
            <FontAwesomeIcon icon="envelope" />
          </Link>
          <Link href="https://facebook.com/itsdyeyson" target="_blank">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </Link>
          <Link href="https://twitter.com/itsdyeyson" target="_blank">
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </Link>
          <Link href="https://github.com/itsdyeyson" target="_blank">
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </Link>
          <Link href="https://www.linkedin.com/in/itsdyeyson/" target="_blank">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </Link>
        </Box>
        <Box>
          <Styled.root>
            Developed with{" "}
            <span
              sx={{
                color: "red",
              }}
            >
              ❤
            </span>
          </Styled.root>
        </Box>
      </Box>
    </Layout>
  )
}

export default ComingSoonPage
