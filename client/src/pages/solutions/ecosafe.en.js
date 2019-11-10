import React from "react"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import background1 from "../../images/Export/templat_attracnt.png"
import Img from "gatsby-image"

import "../../components/solution.en.scss"

const EcoSafePage = () => {
  const data = useStaticQuery(graphql`
    query EcosafeData {
      allEcosafeJson {
        nodes {
          section1 {
            title
          }
          section3 {
            title
            paragraphs {
              id
              backgroundImgURL {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              contents {
                content
                title
              }
            }
          }
          section2 {
            paragraphs {
              id
              contents {
                title
                content
              }
            }
          }
          section4 {
            title
            paragraphs {
              id
              contents {
                title
                content
              }
              backgroundImgURL {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const pageData = data.allEcosafeJson.nodes[0]
  return (
    <Layout>
      <SEO title="Gronic Ecosafe" />
      <div className="solution-page">
        <section
          className="gronic-solution-section solution-section-1"
          style={{ backgroundImage: `url(${background1})` }}
        >
          <h1>{pageData.section1.title}</h1>
        </section>
        <section className="gronic-solution-section solution-section-2">
          <Paragraphs data={pageData.section2.paragraphs} />
        </section>
        <section className="gronic-solution-section solution-section-3">
          <h1>{pageData.section3.title}</h1>
          <div className="gronic-underline" />
          <p className="section-subtitle">
            {pageData.section3.paragraphs[0].contents.content}
          </p>
        </section>
        <section className="gronic-solution-section solution-section-4">
          <h1>{pageData.section4.title}</h1>
          <div className="gronic-underline" />
          {pageData.section4.paragraphs.map(paragraph => {
            return (
              <p
                id={paragraph.id}
                className="section-subtitle"
                style={{ textAlign: "center" }}
              >
                {paragraph.contents.content}
              </p>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

const Paragraphs = ({ data }) => {
  return data.map(paragraph => {
    return (
      <div id={paragraph.id} className="gronic-solution-paragraph">
        {paragraph.backgroundImgURL ? (
          <Img
            alt={paragraph.contents.title}
            className="section-image"
            fluid={paragraph.backgroundImgURL.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          />
        ) : null}
        <div className="content-container">
          <h2> {paragraph.contents.title} </h2>
          <p>{paragraph.contents.content}</p>
        </div>
      </div>
    )
  })
}
export default EcoSafePage
