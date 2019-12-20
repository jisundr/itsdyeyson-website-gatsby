import React from "react"
import { Flex, Box, Button } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useColorMode, Styled } from "theme-ui"

import Layout from "../components/layout"

const ComingSoonPage = () => {
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
          justifyContent: "flex-end",
        }}
        py={3}
      >
        <Flex
          mx={4}
          sx={{
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              color: "black",
              border: "2px solid black",
            }}
            onClick={onSetDarkThemeChanged}
          >
            {colorMode === "default" ? (
              <FontAwesomeIcon icon="moon" />
            ) : (
              <FontAwesomeIcon icon="sun" />
            )}
          </Button>
          {/* <Switch mx={2} /> */}
        </Flex>
      </Flex>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Box mb={5}>
            <Styled.h1>
              Oops! This site is currently working in progress!
            </Styled.h1>
          </Box>

          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Styled.root>For the meantime, you may contact me here</Styled.root>
            <Flex
              my={4}
              width={["50%"]}
              sx={{
                justifyContent: "space-around",
              }}
            >
              <Button variant="email">
                <FontAwesomeIcon icon="envelope" />
              </Button>
              <Button variant="facebook">
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </Button>
              <Button variant="twitter">
                <FontAwesomeIcon icon={["fab", "twitter-square"]} />
              </Button>
              <Button variant="github">
                <FontAwesomeIcon icon={["fab", "github-square"]} />
              </Button>
              <Button variant="linkedin">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  )
}

export default ComingSoonPage
