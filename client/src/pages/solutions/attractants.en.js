import React from "react"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import background1 from "../../images/Export/templat_attracnt.png"
import Img from "gatsby-image"

import "../../components/solution.en.scss"

const AttractantsPage = () => {
  const data = useStaticQuery(graphql`
    query AttractantsData {
      allAttractantsJson {
        nodes {
          title
          section5 {
            paragraphs {
              id
              contents {
                title
                contents
              }
              backgroundImgURL {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            title
          }
          section4 {
            title
            paragraphs {
              contents {
                content
                title
              }
              id
              backgroundImgURL {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
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
                content
              }
            }
          }
          section1 {
            backgroundImgURL
            title
          }
        }
      }
    }
  `)
  const pageData = data.allAttractantsJson.nodes[0]
  return (
    <Layout>
      <SEO title="Gronic Attractants" />
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
          <div className="paragraphs-container">
            <Paragraphs data={pageData.section3.paragraphs} />
          </div>
        </section>
        <section className="gronic-solution-section solution-section-4">
          <h1>{pageData.section4.title} </h1>
          <div className="gronic-underline" />
          <Paragraphs data={pageData.section4.paragraphs} />
        </section>
        <section className="gronic-solution-section solution-section-5">
          <h1>{pageData.section5.title} </h1>
          <div className="gronic-underline" />
          <p className="section-subtitle">
            {pageData.section5.paragraphs[0].contents.content}{" "}
          </p>
          <div className="gronic-solution-paragraphs">
            <OurProducts data={pageData.section5.paragraphs.slice(1)} />
          </div>
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

const OurProducts = ({ data }) => {
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
          <p>{paragraph.contents.contents}<br/>
          <a className="product-contact-us" href="/en/contact"> Contanct Us </a>
      </p>
        </div>
      </div>
    )
  })
}
export default AttractantsPage
