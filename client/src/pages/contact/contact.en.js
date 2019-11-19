import React from "react"
import Layout from "../../components/layout.en"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../../components/seo"

import "./contact.en.scss"

const SocialIcons = ({ icons }) => {
  const socialIcons = icons.map(icon => {
    return (
      <a href={icon.URL} className="social-link">
        <img className="social-img" src={icon.imgURL} alt={icon.title} />
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
          contactForm {
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
      <div className="contact-page">
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
          <div className="contact-form-container">
            <form
              className="contact-form"
              method="post"
              action="https://formspree.io/xvopbpqa"
            >
              <div className="form-group-container">
                <div className="form-group">
                  <label>
                    First Name
                    <input type="text" name="first_name" id="name" />
                  </label>
                  <label>
                    Last Name
                    <input type="text" name="last_name" id="name" />
                  </label>

                  <label>
                    Phone
                    <input type="text" name="phone" id="subject" />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Company Name
                    <input type="text" name="company_name" id="company_name" />
                  </label>

                  <label>
                    Email
                    <input type="email" name="_replyto" id="email" />
                  </label>
                  <label>
                    Product or service of interest
                    <input type="text" name="product" id="product" />
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Message
                  <textarea name="questions" id="message" rows="5" />
                </label>
              </div>
              <div className="form-group-submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ContactsPage
