import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroSlider from "../../components/heroSlider/heroSlider.en"
import SmallSlider from "../../components/smallSlider/smallSlider"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import Img from "gatsby-image"

import "./index.en.scss"
import s1 from "../../images/Export/attrasafe.png"
import s2 from "../../images/Export/bio_safe.png"
import s3 from "../../images/Export/eco_safe.png"

import p1 from "../../images/Export/partners/probodel.jpg"
import p2 from "../../images/Export/partners/pherobank.jpg"
import p3 from "../../images/Export/partners/ci.jpg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageData {
      allHomePageJson {
        nodes {
          ourClients {
            clients {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            description
            heading
          }
          ourSolutions {
            description
            heading
            solutions {
              index
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
  const images = [p1, p2, p3]
    const links = [
        "https://www.probodelt.com/?lang=en",
        "https://www.pherobank.com/",
        "http://www.chemtica.com/"
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
          <div className="gronic-clients-container">
            {clientsData.clients.map((client, index) => {
              return (
                <Img
                  key={"client_image" + index}
                  alt="client image"
                  className="clientLogo"
                  fluid={client.image.childImageSharp.fluid}
                  imgStyle={{ objectFit: "contain" }}
                />
              )
            })}
          </div>
        </section>
        <section className="gronic-partners">
          <h1 className="gronic-sectionHead"> Our Partners </h1>
          <div className="gronic-headUnderline" />
          <SmallSlider
            sliderClassName="gronic-smallSlider"
            partners={images}
            links={links}
          />
        </section>
      </div>
    </Layout>
  )
}

const GronicSolutionItems = solutions => {
  console.log(solutions.solutions)
  const solutionsImages = [s1, s2, s3]
  const gronicSolutionItems = solutions.solutions.map(item => {
    return (
      <a href={item.link} key={"solution" + item.index}>
        <div
          className="gronic-gridItem"
          style={{
            background:
              "linear-gradient(135deg, #50A68480 30%, #348650 90%), url(" +
              solutionsImages[item.index] +
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
