import React from 'react'
import { Text, Flex, Box, Link } from 'rebass'
import config from './../../config'

export default () => (
  <Flex fontFamily={`body`} px={2} color="white" bg="black" alignItems="center">
    <Text p={2} fontWeight="bold">
      {config.title}
    </Text>
    <Box mx="auto" />
    <Link
      color={`white`}
      style={{ textDecoration: `none` }}
      variant="nav"
      href="#!"
    >
      Profile
    </Link>
  </Flex>
)
