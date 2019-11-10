import React from "react"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import background1 from "../../images/Export/templat_attracnt.png"
import Img from "gatsby-image"

import "../../components/solution.en.scss"

const TricoSafePage = () => {
  const data = useStaticQuery(graphql`
    query TricosafeData {
      allTricoSafeJson {
        nodes {
          section1 {
            title
          }
          section5 {
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
        }
      }
    }
  `)
  const pageData = data.allTricoSafeJson.nodes[0]
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
          <Img
            alt={pageData.section4.paragraphs[0].contents.content}
            fluid={
              pageData.section3.paragraphs[0].backgroundImgURL.childImageSharp
                .fluid
            }
            style={{
              width: `80%`,
              margin: `0 auto`,
              paddingBottom: `5%`,
            }}
            imgStyle={{ objectFit: "contain" }}
          />
          <p className="section-subtitle">
            {pageData.section3.paragraphs[0].contents.content}
          </p>
        </section>
        <section className="gronic-solution-section solution-section-3">
          <h1>{pageData.section4.title}</h1>
          <div className="gronic-underline" />
<Img
            alt={pageData.section4.paragraphs[0].contents.content}
            fluid={
              pageData.section4.paragraphs[0].backgroundImgURL.childImageSharp
                .fluid
            }
            style={{
              width: `80%`,
              margin: `0 auto`,
              paddingBottom: `5%`,
            }}
            imgStyle={{ objectFit: "contain" }}
          />

          <div className="paragraphs-container">
            <Paragraphs data={pageData.section4.paragraphs} hideImage={true} />
          </div>
        </section>
        <section className="gronic-solution-section solution-section-4">
          <h1>{pageData.section5.title} </h1>
          <div className="gronic-underline" />
          <p className="section-subtitle">
            {pageData.section5.paragraphs[0].contents.content}
          </p>
          <Paragraphs data={pageData.section5.paragraphs.slice(1)} />
        </section>
      </div>
    </Layout>
  )
}

const Paragraphs = ({ data,hideImage }) => {
  return data.map(paragraph => {
    return (
      <div id={paragraph.id} className="gronic-solution-paragraph">
        {paragraph.backgroundImgURL && !hideImage ? (
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

export default TricoSafePage
