/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.ar.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query ArabicLayoutQuery{
        site {
            siteMetadata {
                title
            }
        }
        allArJson {
            nodes {
                siteTitle
            }
        }
    }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}
                        {` `}
                        <a href="https://www.gatsbyjs.org">{data.allArJson.nodes[0].siteTitle}</a>
                    </footer>
                </div>
            </>
            )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
