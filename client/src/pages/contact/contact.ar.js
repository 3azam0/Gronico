import React from 'react';
import Layout from '../../components/layout.en';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../../components/seo';

import './contact.en.scss';

const SocialIcons = ({ icons }) => {
  return icons.map(icon => (
    <a href={icon.URL} className='social-link' key={icon.title}>
      <img className='social-img' src={icon.imgURL} alt={icon.title} />
    </a>
  ));
};

const ContactsPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageAr {
      allContactJson {
        nodes {
          social {
            imgURL
            URL
            title
          }
          title
          subtitle
          description
          contactForm {
            title
            subtitle
            fields {
              companyName
              email
              firstName
              lastName
              message
              phone
              poi
              submit
            }
          }
        }
      }
    }
  `);

  const contactData = data.allContactJson.nodes[0];

  return (
    <Layout>
      <SEO title='Gronic Contact Us' />
      <div className='contact-page'>
        <section className='gronic-contact-section-1'>
          <h1>{contactData.description}</h1>
          <div className='gronic-contact-social'>
            <SocialIcons icons={contactData.social} />
          </div>
          <p> {contactData.subtitle} </p>
        </section>
        <section className='gronic-contact-section-2'>
          <h1>{contactData.contactForm.title}</h1>
          <span>{contactData.contactForm.subtitle}</span>
          <div className='contact-form-container'>
            <form
              className='contact-form'
              method='post'
              action='https://formspree.io/xvopbpqa'
            >
              <div className='form-group-container'>
                <div className='form-group'>
                  <label>
                    {contactData.contactForm.fields.firstName}
                    <input type='text' name='first_name' id='name' />
                  </label>
                  <label>
                    {contactData.contactForm.fields.lastName}
                    <input type='text' name='last_name' id='name' />
                  </label>

                  <label>
                    {contactData.contactForm.fields.phone}
                    <input type='text' name='phone' id='subject' />
                  </label>
                </div>
                <div className='form-group'>
                  <label>
                    {contactData.contactForm.fields.companyName}
                    <input type='text' name='company_name' id='company_name' />
                  </label>

                  <label>
                    {contactData.contactForm.fields.email}
                    <input type='email' name='_replyto' id='email' />
                  </label>
                  <label>
                    {contactData.contactForm.fields.poi}
                    <input type='text' name='product' id='product' />
                  </label>
                </div>
              </div>
              <div className='form-group'>
                <label>
                  {contactData.contactForm.fields.message}
                  <textarea name='questions' id='message' rows='5' />
                </label>
              </div>
              <div className='form-group-submit'>
                <button type='submit'>
                  {contactData.contactForm.fields.submit}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactsPage;
