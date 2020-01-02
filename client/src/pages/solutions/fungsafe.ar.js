import React from 'react';
import Layout from '../../components/layout.ar';
import SEO from '../../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import background1 from '../../images/Export/templat_attracnt.png';
import Img from 'gatsby-image';

import '../../components/solution.en.scss';

const FungSafePage = () => {
  const data = useStaticQuery(graphql`
    query FungSafeDataAr {
      allFungsafeJson {
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
  `);

  const pageData = data.allFungsafeJson.nodes[0];

  return (
    <Layout>
      <SEO title='Gronic Attractants' />
      <div className='solution-page'>
        <section
          className='gronic-solution-section solution-section-1'
          style={{ backgroundImage: `url(${background1})` }}
        >
          <h1 style={style}>{pageData.section1.title}</h1>
        </section>
        <section className='gronic-solution-section solution-section-2'>
          <div className='parent-container'>
            <Paragraphs data={pageData.section2.paragraphs} />
          </div>
        </section>
        <section className='gronic-solution-section solution-section-3'>
          <div className='parent-container'>
            <h1 style={style}>{pageData.section3.title}</h1>
            <div className='gronic-underline' />
            <p className='section-subtitle'>
              {pageData.section3.paragraphs[0].contents.content}
            </p>
          </div>
        </section>
        <section className='gronic-solution-section solution-section-3'>
          <div className='parent-container'>
            <h1 style={style}>{pageData.section4.title}</h1>
            <div className='gronic-underline' />
            <p className='section-subtitle'>
              {pageData.section4.paragraphs[0].contents.content}
            </p>
          </div>
        </section>
        <section className='gronic-solution-section solution-section-4'>
          <div className='parent-container'>
            <h1 style={style}>{pageData.section5.title} </h1>
            <div className='gronic-underline' />
            <p className='section-subtitle'>
              {pageData.section5.paragraphs[0].contents.content}
            </p>
            <Paragraphs data={pageData.section5.paragraphs.slice(1)} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

const Paragraphs = ({ data, hideImage }) => {
  return data.map(paragraph => {
    return (
      <div id={paragraph.id} className='gronic-solution-paragraph'>
        {paragraph.backgroundImgURL && !hideImage ? (
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

const style = {
  letterSpacing: 0,
};

export default FungSafePage;
