import React from "react"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import { useStaticQuery } from "gatsby"

import "./about.en.scss"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutEnData {
      allAboutUsPageJson {
        nodes {
          title
          ourTeam {
            name
            position
          }
          sections {
            title
            sections {
              bgURL
              description
              title
            }
          }
          advisoryBoard {
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About Gronic" />
      <AboutSections data={data.allAboutUsPageJson.nodes[0].sections} />
    </Layout>
  )
}

const AboutSections = ({data}) => {
  const aboutSections = data.map(section => {
    return (
      <div className="gronic-aboutSection">
        <h1 className="gronic-aboutTitle"> {section.title}</h1>
        <div className="gronic-underline" />
        <AboutSubSections data={section.sections} />
      </div>
    )
  })
  return aboutSections
}

const AboutSubSections = ({ data }) => {
  const aboutSubSections = data.map(section => {
    return (
      <div
        key={section.title}
        className="gronic-aboutSubSection"
        style={{ backgroundImage: `url(${section.bgURL})` }}
      >
        <h1 className={"gronic-aboutHead"}> {section.title} </h1>
        <p
          className={
            "gronic-aboutP " +
            (section.bgURL ? "noBackground" : "hasBackground")
          }
        >
          {" "}
          {section.description}
        </p>
      </div>
    )
  })

  return aboutSubSections
}

export default About
