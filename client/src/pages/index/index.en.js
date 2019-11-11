import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroSlider from "../../components/heroSlider/heroSlider.en"
import SmallSlider from "../../components/smallSlider/smallSlider"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"

import "./index.en.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageData {
      allHomePageJson {
        nodes {
          ourClients {
            clients {
              name
              logoUrl
            }
            description
            heading
          }
          ourSolutions {
            description
            heading
            solutions {
              description
              heading
              imageURL
              link
            }
          }
          pageTitle
          heroSlider {
            buttonLink
            buttonText
            description
            heading
            imageURL
          }
        }
      }
    }
  `)
  const solutionsData = data.allHomePageJson.nodes[0].ourSolutions
  const clientsData = data.allHomePageJson.nodes[0].ourClients
  console.log(solutionsData)
  console.log(clientsData)
  const images = [
    "/icons/images/image1.png",
    "/icons/images/image2.png",
    "/icons/images/image3.png",
  ]

  return (
    <Layout>
      <SEO title="Gronic Index" />
      <div className="index-page">
        <section>
          <HeroSlider />
        </section>
        <section id="solutions" className="gronic-ourSolutions">
          <h1 className="gronic-sectionHead">{solutionsData.heading}</h1>
          <div className="gronic-headUnderline" />
          <p className="gronic-sectionDescription">
            {solutionsData.description}
          </p>
          <div className="gronic-container3">
            <GronicSolutionItems solutions={solutionsData.solutions} />
          </div>
        </section>
        <section className="gronic-ourClients" id="clients">
          <h1 className="gronic-sectionHead"> {clientsData.heading} </h1>
          <div className="gronic-headUnderline" />
          <p className="gronic-sectionDescription">{clientsData.description}</p>
        </section>
        <section className="gronic-partners">
          <h1 className="gronic-sectionHead"> Our Partners </h1>
          <div className="gronic-headUnderline" />
          <SmallSlider sliderClassName="gronic-smallSlider" partners={images} />
        </section>
      </div>
    </Layout>
  )
}

const GronicSolutionItems = solutions => {
  console.log(solutions.solutions)
  const gronicSolutionItems = solutions.solutions.map(item => {
    return (
      <a href={item.link}>
        <div
          className="gronic-gridItem"
          key={item.heading}
          style={{
            background:
              "linear-gradient(135deg, #50A68480 30%, #348650 90%), url(" +
              item.imageURL +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h2 className="gronic-itemHead">{item.heading}</h2>
          <p className="gronic-itemDesc">{item.description}</p>
        </div>
      </a>
    )
  })
  return gronicSolutionItems
}

export default IndexPage
