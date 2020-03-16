import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { MdHome, MdEmail, MdPhone } from 'react-icons/md';

import './footer.en.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQueryAr {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 713) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const footerParagraph = `جرونيك هي شركة رائدة في مجال الزراعة المستدامة من خلال حلول متكاملة لإدارة الآفات الزراعية
`;
  return (
    <>
      <div className='gronic-footer' dir='rtl'>
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
              <h4>خريطة الويب</h4>
              <div className='footer-underline'></div>
              <ul>
                <li>
                  <Link to='/ar/solutions' className='list-head'>
                    خدماتنا
                  </Link>
                  <ul>
                    <li>
                      <Link to='/ar/solutions#attrasafe' className='list-item'>
                        اتراسيف{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='/ar/solutions#ecosafe' className='list-item'>
                        ايكوسيف
                      </Link>
                    </li>
                    <li>
                      <Link to='/ar/solutions#biosafe' className='list-item'>
                        بيوسيف
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/ar/about' className='list-item'>
                    تعرف عنا
                  </Link>
                </li>
              </ul>
            </div>
            <div className='footer-col footer-list'  >
              <h4 > اتصل بنا </h4>
              <div className='footer-underline'  ></div>
              <span className='footer-contact' dir='rtl'>
                <MdHome className='footer-icon' />
               فيلا رقم 13 ,شارع عمر بن الخطاب ,المنطقه 7,بجوار المنطقه2 , مدينة السادس من اكتوبر, محافظه الجيزه ,<br></br> مصر 12564{' '}
              </span>
              <span className='footer-contact' dir='rtl'>
                <MdEmail className='footer-icon' /> info@gronic.co
              </span>
              <span className='footer-contact' dir='rtl'>
                <MdPhone className='footer-icon' />
                <ul class="design-phono">
                  <li>1009401184 (0)+2</li>
                  <li>1118916015 (0)+2</li>
                  <li>1026884468 (0)+2</li>
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
