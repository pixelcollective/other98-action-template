import React from 'react'
import { Box, Text, Heading } from 'rebass'

import config from '../../config'

export default function Footer() {
  return (
    <Box
      marginTop={[2]}
      marginLeft={[0]}
      marginRight={[0, 4]}
      marginBottom={[0, 2]}>
      <Heading fontSize={[3, 4, 5]} fontFamily={`heading`}>
        {config.title}
      </Heading>

      <Box bg={`lightBlue`} style={{borderLeft: `5px solid orange`}} color={`white`} p={[3, 4]} my={[2]}>
        <Text fontWeight={`bold`} fontFamily={`body`} style={{textTransform: `uppercase`}} mb={[2]}>TO: {config.actionTarget}</Text>
        <Text fontFamily={`body`}>{config.actionCopy}</Text>
      </Box>

      <Text
        fontWeight={[300]}
        dangerouslySetInnerHTML={{ __html: config.content }}
        fontFamily={`body`}
        fontSize={[2]} />
    </Box>
  )
}
