import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
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
  const footerParagraph = ` Gronic is leading the way in sustainable agriculture with integrated pest management solutions for a greener planet.
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
                <Link to="/en/solutions" className="list-head">
                  Solutions
                </Link>
                <ul>
                  <li>
                    <Link to="/en/solutions#attrasafe" className="list-item">
                      Attrasafe{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/solutions#ecosafe" className="list-item">
                      EcoSafe
                    </Link>
                  </li>
                  <li>
                    <Link to="/en/solutions#biosafe" className="list-item">
                      Biosafe
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/en/about" className="list-item">
                  About Us
                </Link>
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
