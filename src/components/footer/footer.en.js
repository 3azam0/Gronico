import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { MdHome, MdEmail, MdPhone } from "react-icons/md"

import "./footer.en.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 713) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const footerParagraph = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`
  return (
    <>
      <div className="gronic-footer">
        <div className="footer-container">
          <div className="footer-col">
            <Img
              atl="Gronic"
              className="gronic-footerLogo"
              fluid={data.logo.childImageSharp.fluid}
              objectFit="cover"
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
          <div className="footer-col">
            <p className="gronic-footerP">{footerParagraph}</p>
          </div>
          <div className="footer-col footer-list">
            <h4>Web Map</h4>
            <div className="footer-underline"></div>
            <ul>
              <li>
                <span className="list-head">Solutions </span>
                <ul>
                  <li>
                    <span className="list-item">Altra safe </span>
                  </li>
                  <li>
                    <span className="list-item">Eco safe </span>
                  </li>
                  <li>
                    <span className="list-item">Bio Safe </span>
                  </li>
                </ul>
              </li>
              <li>
                <span className="list-head"> About Us</span>
              </li>
              <li>
                <span className="list-head">Latest News</span>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-list">
            <h4> Contact Us </h4>
            <div className="footer-underline"></div>
            <span className="footer-contact">
              <MdHome className="footer-icon" />
              Level 3, 2 Elizabeth St. Malebourne , Victoria 3000 , Australia.{" "}
            </span>
            <span className="footer-contact">
              <MdEmail className="footer-icon" /> support@gronic.com
            </span>
            <span className="footer-contact">
              <MdPhone className="footer-icon" /> +(1)123 456 789{" "}
            </span>
          </div>
        </div>
        <div className="copyrights">
          <span>Copyrights &copy; GRONIC . Designed by Nova Solutions CO.</span>
        </div>
      </div>
    </>
  )
}

export default Footer
