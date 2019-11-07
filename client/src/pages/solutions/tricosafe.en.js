import React from "react"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import { useStaticQuery } from "gatsby"

import "../../components/solution.en.scss"

const TricoSafePage = () => {
  const data = useStaticQuery(graphql`
    query TricosafeData {
      allTricoSafeJson {
        nodes {
          title
          section1 {
            title
            paragraphs {
              contents {
                title
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
      <section className="gronic-solution-section">
        <h1>{pageData.section1.title}</h1>
        <Paragraphs data={pageData.section1.paragraphs} />
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

export default TricoSafePage
