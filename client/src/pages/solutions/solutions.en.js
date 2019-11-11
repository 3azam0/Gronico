import React from "react"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import "./solutions.en.scss"

const SolutionsPage = () => {
  const data = useStaticQuery(graphql`
    query SolutionsPageEN {
      allSolutionsPageJson {
        nodes {
          section6 {
            description
            title
          }
          section2 {
            title
            tableItems {
              conventional
              gronic
              title
            }
          }
          section3 {
            description1
            description2
            title
          }
          section4 {
            subSections {
              buttonLink
              buttonText
              description
              title
            }
            title
          }
          section5 {
            subSections {
              buttonLink
              buttonText
              description
              title
            }
            title
          }
          section1 {
            description
            title
          }
        }
      }
    }
  `)
  const solutionsData = data.allSolutionsPageJson.nodes[0]
  return (
    <Layout>
      <SEO title="Gronic Solutions" />
      <div className="about-page">
      <section className="gronic-solutionsSection section1">
        <h1>{solutionsData.section1.title}</h1>
        <p>{solutionsData.section1.description}</p>
      </section>
      <section className="gronic-solutionsSection section2">
        <h1>{solutionsData.section2.title}</h1>
        <div className="gronic-underline" />
        <div className="solutionsTable">
          <SolutionsTable data={solutionsData.section2.tableItems} />
        </div>
      </section>
      <section className="gronic-solutionsSection section3">
        <h1>{solutionsData.section3.title}</h1>
        <div className="gronic-underline" />
        <p> {solutionsData.section3.description1}</p>
        <p> {solutionsData.section3.description2}</p>
      </section>
      <section id="attrasafe" className="gronic-solutionsSection section4">
        <h1>{solutionsData.section4.title}</h1>
        <div className="gronic-underline" />
        <div className="subSections-container">
          <div className="sol-subsection">
            <h2>{solutionsData.section4.subSections[0].title}</h2>
            <p>{solutionsData.section4.subSections[0].description} </p>
          </div>

          <div className="sol-subsection">
            <h2>{solutionsData.section4.subSections[1].title}</h2>
            <p>{solutionsData.section4.subSections[1].description} </p>
          </div>
          <div className="sol-subsection">
            <h2>{solutionsData.section4.subSections[2].title}</h2>
            <p>{solutionsData.section4.subSections[2].description} </p>
          </div>
        </div>
      </section>
      <section id="biosafe" className="gronic-solutionsSection section5">
        <h1>{solutionsData.section5.title}</h1>
        <div className="gronic-underline" />
        <div className="subSections-container">
          <div className="sol-subsection">
            <h2>{solutionsData.section4.subSections[0].title}</h2>
            <p>{solutionsData.section5.subSections[0].description} </p>
          </div>

          <div className="sol-subsection">
            <h2>{solutionsData.section5.subSections[1].title}</h2>
            <p>{solutionsData.section5.subSections[1].description} </p>
          </div>
          <div className="sol-subsection">
            <h2>{solutionsData.section4.subSections[2].title}</h2>
            <p>{solutionsData.section4.subSections[2].description} </p>
          </div>
        </div>
      </section>
      <section id="ecosafe" className="gronic-solutionsSection section6">
          <h1>{solutionsData.section6.title} </h1>
          <div className="gronic-underline"/>
          <div className="section-6-container">
              <p>{solutionsData.section6.description}</p>
              <a className="gronic-btn" href="/en/ecosafe">Learn more </a>
          </div>
      </section>
  </div>
    </Layout>
  )
}

const SolutionsTable = ({ data }) => {
  const solutionsData = data.map(item => {
    return (
      <div key={item.title} className="tableItem">
        <div className="title"> {item.title} </div>
        <div className="conventional"> {item.conventional} </div>
        <div className="gronic"> {item.gronic} </div>
      </div>
    )
  })

  return solutionsData
}

export default SolutionsPage
