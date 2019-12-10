import React from 'react';
import Layout from '../../components/layout.ar';
import SEO from '../../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import background1 from '../../images/Export/templat_attracnt.png';
import Img from 'gatsby-image';

import '../../components/solution.en.scss';

const ProSafePage = () => {
  const data = useStaticQuery(graphql`
    query ProSafeDataAr {
      allProsafeJson {
        nodes {
          section1 {
            title
            backgroundImgURL
          }
          section2 {
            paragraphs {
              id
              contents {
                content
                title
              }
            }
          }
          section3 {
            paragraphs {
              id
              contents {
                title
                content {
                  appearance
                  lifeCycle
                  pests
                }
              }
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

  const pageData = data.allProsafeJson.nodes[1];

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
          <Paragraphs data={pageData.section2.paragraphs} />
        </section>
        <section className='gronic-solution-section solution-section-3'>
          <ProsafeParagraphs data={pageData.section3.paragraphs} />
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

const ProsafeParagraphs = ({ data, hideImage }) => {
  return data.map(paragraph => {
    return (
      <div id={paragraph.id} className='prosafe-paragraph'>
        <div
          className='content-container'
          style={{ textAlign: 'left', padding: '5%' }}
        >
          <h2> {paragraph.contents.title} </h2>
          <p>
            <b>المظهر : </b>
            {paragraph.contents.content.appearance}
          </p>
          <p>
            <b>دورة الحياة : </b>
            {paragraph.contents.content.lifeCycle}
          </p>
          <p>
            <b>الأفات التي تهاجمها : </b>
            {paragraph.contents.content.lifeCycle}
          </p>
        </div>
        {paragraph.backgroundImgURL && !hideImage ? (
          <Img
            alt={paragraph.contents.title}
            className='section-image'
            fluid={paragraph.backgroundImgURL.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
          />
        ) : null}
      </div>
    );
  });
};

const style = {
  letterSpacing: 0,
};

export default ProSafePage;
