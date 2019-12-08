import React from 'react';
import Layout from '../../components/layout.en';
import SEO from '../../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import background1 from '../../images/Export/templat_attracnt.png';

import '../../components/solution.en.scss';

const LuresPage = () => {
  const data = useStaticQuery(graphql`
    query LuresDataEn {
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
                content
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
        }
      }
    }
  `);

  const pageData = data.allLuresJson.nodes[1];

  return (
    <Layout>
      <SEO title='Gronic Attractants' />
      <div className='solution-page'>
        <section
          className='gronic-solution-section solution-section-1'
          style={{ backgroundImage: `url(${background1})` }}
        >
          <h1>{pageData.section1.title}</h1>
        </section>
        <section className='gronic-solution-section solution-section-2'>
          <Paragraphs data={pageData.section2.paragraphs} />
        </section>
        <section className='gronic-solution-section solution-section-3'>
          <h1>{pageData.section3.title}</h1>
          <div className='gronic-underline' />
          <div className='paragraphs-container'>
            <Paragraphs data={pageData.section3.paragraphs} />
          </div>
        </section>
        <section className='gronic-solution-section solution-section-4'>
          <h1>{pageData.section4.title} </h1>
          <div className='gronic-underline' />
          <Paragraphs data={pageData.section4.paragraphs} />
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

export default LuresPage;
