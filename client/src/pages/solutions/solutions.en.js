import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout.en';
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
import Popup from "reactjs-popup";
import ecosafe from '../../data/en/solutionsPage/ecosafe/ecosafe.pdf'
import lures from '../../data/en/solutionsPage/lures/lures.pdf'

const SolutionsPage = () => {
  const data = useStaticQuery(graphql`
    query SolutionsPageEN {
      allSolutionsPageJson {
        nodes {
          section6 {
            description
            title
          }
          section2 {
            title
            tableItems {
              conventional
              cDesc
              icon {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              gronic
              gDesc
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

  const solutionsData = data.allSolutionsPageJson.nodes[1];

  return (
    <Layout>
      <SEO title='Gronic Solutions' />
      <section className='solutions-page'>
        <section
          className='section1'
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className='section1-overlay'>
            <div className='parent-container'>
              <h1>{solutionsData.section1.title}</h1>
              <p>{solutionsData.section1.description}</p>
            </div>
          </div>
        </section>
        <section className='gronic-solutionsSection section2'>
          <h1>{solutionsData.section2.title}</h1>
          <div className='gronic-underline' />
          <div className='parent-container'>
            <div className='solutionsTable'>
        <TableHead  data={solutionsData.section2} />
              <SolutionsTable data={solutionsData.section2.tableItems} />
            </div>
          </div>
        </section>
        <section className='gronic-solutionsSection section3'>
          <div className='parent-container'>
            <h1>{solutionsData.section3.title}</h1>
            <div className='gronic-underline' />
            <p> {solutionsData.section3.description1}</p>
            <p> {solutionsData.section3.description2}</p>
          </div>
        </section>
        <section id='attrasafe' className='gronic-solutionsSection section4'>
          <div className='parent-container'>
            <h1>{solutionsData.section4.title}</h1>
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
          </div>
        </section>
        <section id='biosafe' className='gronic-solutionsSection section5'>
          <div className='parent-container'>
            <h1>{solutionsData.section5.title}</h1>
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
          </div>
        </section>
        <section id='ecosafe' className='gronic-solutionsSection section6'>
          <div className='parent-container'>
            <h1>{solutionsData.section6.title} </h1>
            <div className='gronic-underline' />
            <div className='section-6-container'>
              <p>{solutionsData.section6.description}</p>
              <a className='gronic-btn' href={ecosafe}  target='_blank'>{` `}
              
                Learn more{' '}
              </a>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

const Card = ({ title ,content}) => (
  <div className="card">
    <div className="content">

        {content}
    </div>
  </div>
);

const TableHead=()=>{
  
  return(
    <div className='tableItem'>
    <div className='title'>
      
      
    </div>
    <div className='conventionalHd'> 
    CONVENTIONAL PESTICIDES
    </div>
    <div className='gronicHd'>  
        Gronic Solutions
    </div>
  </div>
  )
}

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
        <div className='conventionalEn'> {item.conventional} 
        <Popup
      trigger={<button className="button">+</button>}
      position="left center"
      on="click"
    >
      <Card title="Left Center"  content={item.cDesc} />
    </Popup></div>
        <div className='gronic'> {item.gronic} 
        <Popup
      trigger={<button className="button2">+ </button>}
      position="left center"
      on="click"
    >
      <Card title="Left Center" content={item.gDesc} />
    </Popup>
        </div>
      </div>
    );
  });

  return solutionsData
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
       
      >
        <a className='gronic-btn' href={item.buttonLink} target='_blank' >{` `}
        {item.buttonText}{' '}
            </a>
        
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

export default SolutionsPage;