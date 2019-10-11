import React from "react"
import {useStaticQuery, graphql} from "gatsby"


const navbar = () => {
    const data = useStaticQuery(graphql`

    `)
    return(
        <react-container>
            <nav> 
            </nav>
            </react-container>
    )
}

export default navbar
