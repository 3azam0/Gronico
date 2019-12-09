import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { FaAngleDown, FaAngleRight, FaTimes } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

import './navbar.en.scss';

const SubNavLinks = ({
  subLinks,
  subListClassName,
  subLinkClassName,
  subListStyle,
  subLinkStyle,
}) => {
  subListClassName = subListClassName
    ? 'gronic-navSubList ' + subListClassName
    : 'gronic-navSubList';
  subLinkClassName = subLinkClassName
    ? 'gronic-navSubLink ' + subLinkClassName
    : 'gronic-navSubLink';

  const subNavLinks = subLinks
    ? subLinks.map(sublink => (
        <li key={sublink.url} className={subListClassName} style={subListStyle}>
          <Link
            className={subLinkClassName}
            style={subLinkStyle}
            to={sublink.url}
          >
            {sublink.text}{' '}
            {sublink.subLinks ? (
              <FaAngleRight className={subLinkClassName} />
            ) : null}
          </Link>
          {sublink.subLinks ? (
            <ul>
              <SubNavLinks subLinks={sublink.subLinks} />
            </ul>
          ) : null}
          <hr className='nav-separator' />
        </li>
      ))
    : null;
  return subNavLinks;
};

const MainNavLinks = ({
  links,
  listClassName,
  linkClassName,
  listStyle,
  linkStyle,
}) => {
  linkClassName = linkClassName
    ? 'gronic-navLink ' + linkClassName
    : 'gronic-navLink';
  listClassName = listClassName
    ? 'gronic-navListItem ' + listClassName
    : 'gronic-navListItem';
  const mainLinks = links.links.map(link => (
    <li key={link.url} className={listClassName} style={listStyle}>
      <Link className={linkClassName} style={linkStyle} to={link.url}>
        {link.text}{' '}
        {link.subLinks ? (
          <FaAngleDown style={{ fontSize: '1rem' }} className={linkClassName} />
        ) : null}
        <div className='underline'></div>
      </Link>
      <ul>
        <SubNavLinks subLinks={link.subLinks} />
      </ul>
    </li>
  ));
  return mainLinks;
};

const SmallNavLinks = ({
  showSmallNav,
  links,
  listClassName,
  linkClassName,
  listStyle,
  linkStyle,
}) => {
  linkClassName = linkClassName
    ? 'gronic-smallNavLink ' + linkClassName
    : 'gronic-smallNavLink';
  listClassName = listClassName
    ? 'gronic-smallNavListItem' + listClassName
    : 'gronic-smallNavListItem';

  let smallNavLinks = null;
  if (showSmallNav) {
    smallNavLinks = links.links.map(link => (
      <li key={link.url} className={listClassName} style={listStyle}>
        <Link className={linkClassName} style={linkStyle} to={link.url}>
          {link.text}
          <div className='underline'></div>
        </Link>
      </li>
    ));
  }

  return smallNavLinks;
};

const Navbar = ({ navigationClassName, navigationStyle }) => {
  const data = useStaticQuery(graphql`
    query ArabicNavLinks {
      allNavbarJson {
        nodes {
          links {
            text
            url
            subLinks {
              text
              url
              subLinks {
                text
                url
              }
            }
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 713) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const navLinksData = data.allNavbarJson.nodes[1];

  const [showSmallNav, setSmallNav] = useState(false);
  const toggleNav = () => {
    document.body.style.overflow = 'hidden';
    setSmallNav(!showSmallNav);
  };
  return (
    <>
      <nav
        role='navigation'
        className={'gronic-nav ' + navigationClassName}
        style={navigationStyle}
      >
        <Link to='/en'>
          <Img
            alt='Gronic'
            className='gronic-navLogo'
            fluid={data.logo.childImageSharp.fluid}
            objectFit='cover'
            imgStyle={{ objectFit: 'conain' }}
            style={{
              padding: '5%',
              position: 'absolute',
              height: '2rem',
              width: '3re',
            }}
          />
        </Link>
        <ul className='gronic-navUlist'>
          <MainNavLinks links={navLinksData} />
        </ul>
        <button onClick={toggleNav} href='#' className='gronic-burger'>
          <MdMenu />
        </button>
      </nav>
      {showSmallNav && (
        <nav className='gronic-smallNav'>
          <button onClick={toggleNav} className='gronic-burger'>
            <FaTimes />{' '}
          </button>
          <ul>
            <SmallNavLinks showSmallNav={showSmallNav} links={navLinksData} />
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
