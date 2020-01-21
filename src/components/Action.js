import React from 'react'
import { Heading, Box, Text } from 'rebass'
import config from '../../config'

export default function Footer() {
  return (
    <Box maxWidth={`100%`} marginBottom={[4]}>
      <Heading
        fontFamily={`heading`}
        style={{ textTransform: `uppercase` }}
        fontSize={[2, 3]}
        marginBottom={[2]}
        marginTop={[3]}
        fontWeight={300}
        paddingBottom={[2]}
      >
        {config.callToAction}
      </Heading>

      <Text fontFamily={`body`} fontSize={[1, 2, 3]} fontWeight={`normal`}>
        <Box
          id={`can-petition-area-${config.action}`}
          sx={{
            width: `100%`,
            maxWidth: `100%`,
            [`.can_embed.v3.petition > div > div`]: {
              [`> h2`]: {
                display: `none`,
              },
              [`> h3`]: {
                display: `none`,
              },
              [`> h4`]: {
                display: `none`,
              },
              [`> div`]: {
                display: `none`,
              },
            },
            div: {
              li: {
                display: `inline-block`,
                listStyle: `none`,
              },
            },
            [`.core_field`]: {
              width: `100%`,
              marginBottom: `1em`,
              div: {
                display: `flex`,
                flexDirection: `column`,
                input: {
                  paddingTop: `0.5em`,
                  paddingBottom: `0.5em`,
                  paddingLeft: `1em`,
                  paddingRight: `1em`,
                },
                label: {
                  fontSize: `0.7em`,
                  paddingBottom: `0.5em`,
                },
              },
            },
            [`#form_col1`]: {
              maxWidth: `100%`,
              [`.international_link-wrap`]: {
                display: `none`,
              },
              [`.country_drop_wrap`]: {
                display: `none`,
              },
            },
            [`#form_col2`]: {
              [`label[for="form-comments"]`]: {
                display: `none`,
              },
              [`textarea[name="signature[message_to_target]"]`]: {
                display: `none`,
              },
              [`input[type="submit"]`]: {
                backgroundColor: config.theme.colors.blue,
                color: `white`,
                paddingTop: `0.5em`,
                paddingBottom: `0.5em`,
                paddingLeft: `1em`,
                paddingRight: `1em`,
                textTransform: `uppercase`,
                fontWeight: `bold`,
                fontSize: `0.8em`,
                borderRadius: `5px`,
                cursor: `pointer`,
                transition: `all 0.2s ease-in-out`,
                [`&:hover`]: {
                  transition: `all 0.2s ease-in-out`,
                  backgroundColor: config.theme.colors.darkBlue,
                  color: `white`,
                },
              },
              [`#d_sharing`]: {
                ul: {
                  paddingLeft: 0,
                },
                label: {
                  fontSize: `0.8em`,
                },
              },
            },
          }}
        />
      </Text>
    </Box>
  );
}
