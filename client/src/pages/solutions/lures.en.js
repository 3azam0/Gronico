import React from "react"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import "../../components/solution.en.scss"

const LuresPage = () => {
  const data = useStaticQuery(graphql`
    query LuresData {
      allLuresJson {
        nodes {
          title
          section1 {
            backgroundImgURL
            title
          }
          section2 {
            paragraphs {
              contents {
                content
              }
              id
            }
          }
          section3 {
            paragraphs {
              contents {
                backgroundImgURL
                content
              }
              id
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
              imageURL
            }
          }
        }
      }
    }
  `)
  const pageData = data.allLuresJson.nodes[0]
  return (
    <Layout>
      <SEO title="Gronic Attractants" />
      <section className="gronic-solution-section">
        <h1>{pageData.section1.title}</h1>
      </section>
      <section className="gronic-solution-section">
        <Paragraphs data={pageData.section2.paragraphs} />
      </section>
      <section className="gronic-solution-section">
        <h1>{pageData.section3.title}</h1>
        <Paragraphs data={pageData.section3.paragraphs} />
      </section>
      <section className="gronic-solution-section">
        <h1>{pageData.section4.title} </h1>
        <Paragraphs data={pageData.section4.paragraphs} />
      </section>
    </Layout>
  )
}

const Paragraphs = ({ data }) => {
  return data.map(paragraph => {
    return (
      <div id={paragraph.id} className="gronic-solution-paragraph">
        <h2> {paragraph.contents.title} </h2>
        <p>{paragraph.contents.content}</p>
      </div>
    )
  })
}

export default LuresPage
