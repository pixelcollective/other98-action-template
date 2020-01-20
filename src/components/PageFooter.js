import React from 'react';
import { Flex, Box, Text } from 'rebass'
import config from '../../config';

export default () => (
  <Flex
    alignItems={`top`}
    py={2}
    mx={-2}
    paddingLeft={config.theme.space[4]}
    paddingRight={config.theme.space[4]}
    marginLeft={`auto`}
    marginRight={`auto`}>
    <Box>
      <Text fontFamily={`body`}>
        &copy; {config.copyright}
      </Text>
    </Box>
  </Flex>
)

