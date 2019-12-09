import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header.en';
import Footer from './footer/footer.en.js';
import './layout.en.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query EnglishLayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  console.log('english');

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
