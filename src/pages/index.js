import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import { Box, Flex } from 'rebass'

import config from './../../config'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Content from '../components/Content'
import Action from '../components/Action'
import PageFooter from '../components/PageFooter'

const App = () => (
  <ThemeProvider theme={config.theme}>
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          background: ${config.theme.colors.lightgray}
        }
      `}
    />
    <Nav />

    <Layout>
      <Flex
        flexDirection={[`column-reverse`, `row`]}
        alignItems={`top`}
        py={2}
        mx={-2}
        paddingLeft={config.theme.space[4]}
        paddingRight={config.theme.space[4]}
        marginLeft={`auto`}
        marginRight={`auto`}
      >
        <Box minWidth={[1, 2 / 3]} width={[1, 2 / 3]}>
          <Content />
        </Box>

        <Box minWidth={[1, 1 / 3]} width={[1, 1 / 3]}>
          <Action />
        </Box>
      </Flex>

      <PageFooter />
    </Layout>
  </ThemeProvider>
);

export default App
