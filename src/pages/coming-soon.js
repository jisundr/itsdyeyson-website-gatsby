import React, { useState } from "react"
import { Flex, Box, Button } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"

const ComingSoonPage = () => {
  const [isDark, setDarkTheme] = useState(false)
  const onSetDarkThemeChanged = () => setDarkTheme(!isDark)

  console.log("isDark", isDark)
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
            {!isDark ? (
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
          <h1>Oops! This site is currently work in progress!</h1>

          <p>For the meantime, you may contact me here</p>
        </Box>
      </Flex>
    </Layout>
  )
}

export default ComingSoonPage
