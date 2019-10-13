import React from "react"
import {useStaticQuery, graphql} from "gatsby"


const SubNavLinks = ({subLinks,subListClassName,subLinkClassName, subListStyle, subLinkStyle}) => {
    subListClassName = subListClassName? "gronic-navSubList " + subListClassName : "gronic-navSubList"
    subLinkClassName= subLinkClassName? "gronic-navSubLink " + subLinkClassName : "gronic-navSubLink"
    const subNavLinks= subLinks? subLinks.map((sublink) => 
        <li key={sublink.url} className={subListClassName} style={subListStyle}><a className={subLinkClassName} style={subLinkStyle} href={sublink.url}>{sublink.text}</a></li>
    ) : null
    return subNavLinks
}

const MainNavLinks = ({links,listClassName,linkClassName, listStyle, linkStyle}) => {
    linkClassName =  linkClassName? "gronic-navLink " + linkClassName : "gronic-navLink"
    listClassName = listClassName? "gronic-navListItem " + listClassName : "gronic-navListItem";
    const mainLinks = links.links.map((link)=>
        <li key={link.url} className={listClassName} style={listStyle}>
            <a className={linkClassName} style={linkStyle} href={link.url}>{link.text}</a>
            <ul>
                <SubNavLinks subLinks = {link.subLinks}/>
            </ul>
        </li>
    )
    return mainLinks
}

const Navbar = () => {
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
        }
    `)
    const navLinksData = data.allNavbarJson.edges[0].node.english;
    return(
        <>
            <nav> 
                <ul>
                    <MainNavLinks links={navLinksData}/>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
