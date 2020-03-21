import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { MdHome, MdEmail, MdPhone } from 'react-icons/md';

import './footer.en.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQueryEn {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 713) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const footerParagraph = ` Gronic is leading the way in sustainable agriculture with integrated pest management solutions for a greener planet.
`;
  return (
    <>
      <div className='gronic-footer'>
        <div className='parent-container'>
          <div className='footer-container'>
            <div className='footer-col'>
              <Img
                atl='Gronic'
                className='gronic-footerLogo'
                fluid={data.logo.childImageSharp.fluid}
                objectFit='cover'
                imgStyle={{ objectFit: 'cover' }}
              />
            </div>
            <div className='footer-col' style={{ padding: '1rem' }}>
              <p className='gronic-footerP'>{footerParagraph}</p>
            </div>
            <div
              className='footer-col footer-list'
              style={{ marginLeft: '2rem' }}
            >
              <h4>Web Map</h4>
              <div className='footer-underline'></div>
              <ul>
                <li>
                  <Link to='/en/solutions' className='list-head'>
                    Solutions
                  </Link>
                  <ul>
                    <li>
                      <Link to='/en/solutions#attrasafe' className='list-item'>
                        Attrasafe{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='/en/solutions#ecosafe' className='list-item'>
                        EcoSafe
                      </Link>
                    </li>
                    <li>
                      <Link to='/en/solutions#biosafe' className='list-item'>
                        Biosafe
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/en/about' className='list-item'>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className='footer-col footer-list'>
              <h4> Contact Us </h4>
              <div className='footer-underline'></div>
              <span className='footer-contact'>
                <MdHome className='footer-icon' />
                Villa No. 13, Omar Ebin Elktab St. , District No.7, Neighboring No.3 , District No.7, Neighboring No.3, Egypt12564.{' '}
              </span>
              <span className='footer-contact'>
                <MdEmail className='footer-icon' /> info@gronic.co
              </span>
              <span className='footer-contact'>
                <MdPhone className='footer-icon' />
                <ul class="design-phono">
                  <li>+(20) 1009401184</li>
                  <li>+(20) 1118916015</li>
                  <li>+(20) 1026884468</li>
                </ul>
              </span>
            </div>
          </div>
          <div className='copyrights'>
            <span>
              Copyrights &copy; GRONIC . Designed by{' '}
              <a
                className='nova'
                href='https://www.novasolutionsco.net'
                target='blank'
              >
                NOVA Solutions Co.
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
