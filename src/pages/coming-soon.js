import React from "react"
import { Flex, Box } from "rebass"
import { Switch } from "@rebass/forms"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"

const ComingSoonPage = () => {
  return (
    <Layout>
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

      <Flex
        as="footer"
        width={1}
        sx={{
          position: "fixed",
          bottom: 0,
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
          <FontAwesomeIcon icon="sun" />
          <Switch mx={2} />
          <FontAwesomeIcon icon="moon" />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default ComingSoonPage
