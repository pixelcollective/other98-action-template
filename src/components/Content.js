import React from 'react';
import { Box, Text, Heading, Image } from 'rebass';

import config from '../../config';

export default function Footer() {
  return (
    <Box marginTop={[2]} marginLeft={[0]} marginRight={[0, 4]} marginBottom={[0, 2]}>
      <Heading fontSize={[3, 4, 5]} fontFamily={`heading`}>
        {config.title}
      </Heading>

      <Text
        fontWeight={[300]}
        dangerouslySetInnerHTML={{ __html: config.content }}
        fontFamily={`body`}
        fontSize={[2]} />
    </Box>
  );
}
