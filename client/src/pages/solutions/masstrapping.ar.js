import React from 'react';
import Layout from '../../components/layout.ar';
import SEO from '../../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import background1 from '../../images/Export/templat_attracnt.png';
import Img from 'gatsby-image';

import '../../components/solution.en.scss';

const MassTrappingPage = () => {
  const data = useStaticQuery(graphql`
    query MassTrappingDataAr {
      allMassTrappingJson {
        nodes {
          title
          section1 {
            paragraphs {
              id
              contents {
                content
                title
              }
            }
            title
          }
          section2 {
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
            title
          }
          section3 {
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
            title
          }
          section4 {
            paragraphs {
              contents {
                content
                title
              }
              backgroundImgURL {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              id
            }
            title
          }
        }
      }
    }
  `);

  const pageData = data.allMassTrappingJson.nodes[0];

  return (
    <Layout>
      <SEO title='Gronic Mass Trapping' />
      <div className='solution-page'>
        <section
          className='gronic-solution-section solution-section-1'
          style={{ backgroundImage: `url(${background1})` }}
        >
          <h1 style={style}>{pageData.section1.title}</h1>
        </section>
        <section className='gronic-solution-section solution-section-2'>
          <Paragraphs data={pageData.section1.paragraphs} />
        </section>
        <section className='gronic-solution-section solution-section-3'>
          <h1 style={style}>{pageData.section2.title}</h1>
          <div className='gronic-underline' />
          <div className='paragraphs-container'>
            <Paragraphs data={pageData.section2.paragraphs} />
          </div>
        </section>
        <section className='gronic-solution-section solution-section-4'>
          <h1 style={style}>{pageData.section3.title}</h1>
          <div className='gronic-underline' />
          <Paragraphs data={pageData.section3.paragraphs} />
        </section>
        <section className='gronic-solution-section solution-section-5'>
          <h1 style={style}>{pageData.section4.title} </h1>
          <div className='gronic-underline' />
          <div className='gronic-solution-paragraphs'>
            <OurProducts data={pageData.section4.paragraphs} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

const Paragraphs = ({ data }) => {
  return data.map(paragraph => {
    return (
      <div id={paragraph.id} className='gronic-solution-paragraph'>
        {paragraph.backgroundImgURL ? (
          <Img
            alt={paragraph.contents.title}
            className='section-image'
            fluid={paragraph.backgroundImgURL.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
          />
        ) : null}
        <div className='content-container'>
          <h2> {paragraph.contents.title} </h2>
          <p>{paragraph.contents.content}</p>
        </div>
      </div>
    );
  });
};

const OurProducts = ({ data }) => {
  return data.map(paragraph => {
    return (
      <div id={paragraph.id} className='gronic-solution-paragraph'>
        {paragraph.backgroundImgURL ? (
          <Img
            alt={paragraph.contents.title}
            className='section-image'
            fluid={paragraph.backgroundImgURL.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
          />
        ) : null}
        <div className='content-container'>
          <h2> {paragraph.contents.title} </h2>
          <p>
            {paragraph.contents.content}
            <br />
            <a className='product-contact-us' href='/ar/contact'>
              {' '}
              اتصل بنا{' '}
            </a>
          </p>
        </div>
      </div>
    );
  });
};

const style = {
  letterSpacing: 0,
};

export default MassTrappingPage;
