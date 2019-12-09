import Navbar from './navbar/navbar.en';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => {
  return <Navbar title={siteTitle} />;
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
