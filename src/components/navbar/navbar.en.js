import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"

import "./navbar.en.scss"


const SubNavLinks = ({subLinks,subListClassName,subLinkClassName, subListStyle, subLinkStyle}) => {
    subListClassName = subListClassName? "gronic-navSubList " + subListClassName : "gronic-navSubList"
    subLinkClassName= subLinkClassName? "gronic-navSubLink " + subLinkClassName : "gronic-navSubLink"
    const subNavLinks= subLinks? subLinks.map((sublink) => 
        <li
            key={sublink.url}
            className={subListClassName} 
            style={subListStyle}
        >
            <Link
                className={subLinkClassName} 
                style={subLinkStyle} 
                to={sublink.url}
            >{sublink.text}</Link>
            <hr className="nav-separator"/>
        </li>
    ) : null
    return subNavLinks
}

const MainNavLinks = ({links,listClassName,linkClassName, listStyle, linkStyle}) => {
    linkClassName =  linkClassName? "gronic-navLink " + linkClassName : "gronic-navLink"
    listClassName = listClassName? "gronic-navListItem " + listClassName : "gronic-navListItem";
    const mainLinks = links.links.map((link)=>
        <li
            key={link.url} 
            className={listClassName}
            style={listStyle}
        >
            <Link 
                className={linkClassName} 
                style={linkStyle} 
                to={link.url}
            >
                {link.text}
                <div className="underline"></div>
            </Link>
            <ul>
                <SubNavLinks subLinks = {link.subLinks}/>
            </ul>
        </li>
    )
    return mainLinks
}

const Navbar = ({
    navigationClassName,
    navigationStyle
}) => {
    const data = useStaticQuery(graphql`
        query EnglishNavLinks{
            allNavbarJson {
                edges {
                    node {
                        id
                        english {
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
                }
            }
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width:500,height:713) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    const navLinksData = data.allNavbarJson.edges[0].node.english;
    return(
        <>
            <nav
                role="navigation"
                className={'gronic-nav '+ navigationClassName}
                style={navigationStyle}
            > 
                <Link to="/">
                    <Img
                        alt="Gronic"
                        className="gronic-navLogo"
                        fixed={data.logo.childImageSharp.fixed}
                        objectFit="cover"
                        imgStyle={{ objectFit:'conain'}}
                        style={{padding:'5%',position:'absolute',height:'2rem',width:'3re'}}
                    />
                </Link>
                <ul className="gronic-navUlist">
                    <MainNavLinks links={navLinksData}/>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
