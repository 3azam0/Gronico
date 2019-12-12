import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout.ar';
import SEO from '../../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';

import './solutions.en.scss';
import background from '../../images/icons/images/image7.png';

import bg41 from '../../images/Export/solutions_sections/1.jpg';
import bg42 from '../../images/Export/solutions_sections/2.jpg';
import bg43 from '../../images/Export/solutions_sections/3.jpg';

import bg51 from '../../images/Export/solutions_sections/4.jpg';
import bg52 from '../../images/Export/solutions_sections/5.jpg';
import bg53 from '../../images/Export/solutions_sections/6.jpg';

const SolutionsPage = () => {
  const data = useStaticQuery(graphql`
    query SolutionsPageAr {
      allSolutionsPageJson {
        nodes {
          section6 {
            description
            title
            buttonText
          }
          section2 {
            title
            tableItems {
              conventional
              icon {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              gronic
              title
            }
          }
          section3 {
            description1
            description2
            title
          }
          section4 {
            subSections {
              buttonLink
              buttonText
              bgColor
              description
              title
            }
            title
          }
          section5 {
            subSections {
              buttonLink
              buttonText
              bgColor
              description
              title
            }
            title
          }
          section1 {
            description
            title
          }
        }
      }
    }
  `);

  const solutionsData = data.allSolutionsPageJson.nodes[0];

  return (
    <Layout>
      <SEO title='Gronic Solutions' />
      <div className='solutions-page'>
        <section
          className='gronic-solutionsSection section1'
          style={{
            background:
              'linear-gradient(135deg, #50A68480 30%, #348650 90%), url(' +
              background +
              ')',
          }}
        >
          <h1 style={style}>{solutionsData.section1.title}</h1>
          <p>{solutionsData.section1.description}</p>
        </section>
        <section className='gronic-solutionsSection section2'>
          <h1 style={style}>{solutionsData.section2.title}</h1>
          <div className='gronic-underline' />
          <div className='solutionsTable'>
            <SolutionsTable data={solutionsData.section2.tableItems} />
          </div>
        </section>
        <section className='gronic-solutionsSection section3'>
          <h1 style={style}>{solutionsData.section3.title}</h1>
          <div className='gronic-underline' />
          <p> {solutionsData.section3.description1}</p>
          <p> {solutionsData.section3.description2}</p>
        </section>
        <section id='attrasafe' className='gronic-solutionsSection section4'>
          <h1 style={style}>{solutionsData.section4.title}</h1>
          <div className='gronic-underline' />
          <div className='subSections-container'>
            <SubSection
              item={solutionsData.section4.subSections[0]}
              bg={bg41}
            />
            <SubSection
              item={solutionsData.section4.subSections[1]}
              bg={bg42}
            />
            <SubSection
              item={solutionsData.section4.subSections[2]}
              bg={bg43}
            />
          </div>
        </section>
        <section id='biosafe' className='gronic-solutionsSection section5'>
          <h1 style={style}>{solutionsData.section5.title}</h1>
          <div className='gronic-underline' />
          <div className='subSections-container'>
            <SubSection
              item={solutionsData.section5.subSections[0]}
              bg={bg51}
            />
            <SubSection
              item={solutionsData.section5.subSections[1]}
              bg={bg52}
            />
            <SubSection
              item={solutionsData.section5.subSections[2]}
              bg={bg53}
            />
          </div>
        </section>
        <section id='ecosafe' className='gronic-solutionsSection section6'>
          <h1 style={style}>{solutionsData.section6.title} </h1>
          <div className='gronic-underline' />
          <div className='section-6-container'>
            <p>{solutionsData.section6.description}</p>
            <a className='gronic-btn' href='/ar/ecosafe'>
              {solutionsData.section6.buttonText}{' '}
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const SolutionsTable = ({ data }) => {
  const solutionsData = data.map(item => {
    return (
      <div key={item.title} className='tableItem'>
        <div className='title'>
          <Img
            alt={item.title}
            className='icon'
            fluid={item.icon.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain', height: '50px' }}
          />
          {item.title}
        </div>
        <div className='conventional'> {item.conventional} </div>
        <div className='gronic'> {item.gronic} </div>
      </div>
    );
  });

  return solutionsData;
};

const SubSection = ({ item, bg }) => {
  const [hovered, setHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 700) {
        setIsSmallScreen(true);
      }
    } else {
      setIsSmallScreen(false);
    }
  });

  return (
    <div
      className='sol-subsection'
      style={{ backgroundImage: `url(${bg})` }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <button
        onClick={() => {
          navigate(item.buttonLink);
        }}
      >
        {item.buttonText}{' '}
      </button>
      <p
        className='sol-subsection-indicator'
        style={{
          backgroundColor: item.bgColor,
        }}
      >
        {item.title}
      </p>
    </div>
  );
};

const style = {
  letterSpacing: 0,
};

export default SolutionsPage;
