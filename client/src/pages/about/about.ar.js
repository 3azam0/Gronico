import React from 'react';
import Layout from '../../components/layout.en';
import SEO from '../../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import './about.en.scss';

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutArData {
      allAboutUsPageJson {
        nodes {
          title
          ourTeam {
            name
            position
          }
          sections {
            title
            id
            sections {
              bgURL
              description
              title
            }
          }
          advisoryBoard {
            name
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title='About Gronic' />
      <AboutSections data={data.allAboutUsPageJson.nodes[1].sections} />
      <OurTeam
        members={data.allAboutUsPageJson.nodes[0].ourTeam}
        advisors={data.allAboutUsPageJson.nodes[0].advisoryBoard}
      />
    </Layout>
  );
};

const AboutSections = ({ data }) => {
  const aboutSections = data.map(section => {
    return (
      <div key={section.id} className='gronic-aboutSection'>
        <h1 className='gronic-aboutTitle'> {section.title}</h1>
        <div className='gronic-underline' />
        <AboutSubSections data={section.sections} />
      </div>
    );
  });
  return aboutSections;
};

const AboutSubSections = ({ data }) => {
  const aboutSubSections = data.map(section => {
    return (
      <div
        key={section.title}
        className='gronic-aboutSubSection'
        style={{ backgroundImage: `url(${section.bgURL})` }}
      >
        <h1 className={'gronic-aboutHead'}> {section.title} </h1>
        <p
          className={
            'gronic-aboutP ' +
            (section.bgURL ? 'noBackground' : 'hasBackground')
          }
        >
          {section.description}
        </p>
      </div>
    );
  });

  return aboutSubSections;
};

const TeamMembers = ({ members }) => {
  const teamMembers = members.map(member => {
    return (
      <div className='gronic-teamMember'>
        <span className='memberName'> {member.name} </span>
        <span className='memberPosition'> {member.position} </span>
      </div>
    );
  });
  return teamMembers;
};

const Advisors = ({ members }) => {
  return members.map(advisor => {
    return (
      <div className='advisor'>
        <span className='advisorName'> {advisor.name} </span>
      </div>
    );
  });
};

const OurTeam = ({ members, advisors }) => {
  return (
    <div id='our-team' className='gronic-aboutSection teamSection'>
      <h1 className='gronic-aboutHead'> Our Team </h1>
      <div className='gronic-underline' />
      <div className='gronic-team'>
        <TeamMembers members={members} />
      </div>
      <div className='gronic-team advisors'>
        <span className='title'> Advisory Board </span>
        <Advisors members={advisors} />
      </div>
    </div>
  );
};

export default About;
