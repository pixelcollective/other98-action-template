import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import config from './../../config'
class Layout extends Component {
  constructor() {
    super()
    this.state = {
      isPreloaded: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isPreloaded: false })
    }, 1000)
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Eventually' },
                { name: 'keywords', content: 'site, web' },
              ]}>
              <html lang="en" />
              <script src={`https://actionnetwork.org/widgets/v3/petition/${config.action}?format=js&source=widget`}></script>
            </Helmet>

            {children}
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
