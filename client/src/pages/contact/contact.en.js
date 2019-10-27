import React from "react"
import Layout from "../../components/layout.en"
import { useStaticQuery } from "gatsby"

import SEO from "../../components/seo"

import "./contact.en.scss"

const SocialIcons = ({ icons }) => {
  const socialIcons = icons.map(icon => {
    return (
      <a href={icon.URL} className="social-link">
        <img className="social-img" src={icon.imgURL} />{" "}
      </a>
    )
  })
  return socialIcons
}
const ContactsPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageEN {
      allContactJson {
        nodes {
          social {
            imgURL
            URL
            title
          }
          title
          subtitle
            contactForm{
                title
                subtitle
            }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Gronic Contact Us" />
      <section className="gronic-contact-section-1">
        <h1> Check out our latest news, events and partnerships here</h1>
        <div className="gronic-contact-social">
          <SocialIcons icons={data.allContactJson.nodes[0].social} />
        </div>
        <p> {data.allContactJson.nodes[0].subtitle} </p>
      </section>
      <section className="gronic-contact-section-2">
          <h1>{data.allContactJson.nodes[0].contactForm.title}</h1>
          <span>{data.allContactJson.nodes[0].contactForm.subtitle}</span>
      </section>
    </Layout>
  )
}

export default ContactsPage
