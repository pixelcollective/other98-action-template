import React from 'react'
import { Text, Flex, Box, Image } from 'rebass'
import config from './../../config'

import Logos from './../assets/images/logos.png'

export default () => (
  <Flex fontFamily={`body`} px={4} py={4} color="white" bg={config.theme.colors.blue} alignItems="center">
    <Text pb={2} width={[1]} mx={[`auto`]} fontWeight="bold" style={{textTransform: `uppercase`, letterSpacing: `0.8`}}>
      <span style={{fontWeight: 100, display: `block`, marginBottom: `0.25em`}}>Take Action</span>
      {config.title}
    </Text>

    <Box mx="auto" />
  </Flex>
)
