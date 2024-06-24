import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--lightest-mimir-green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    //background-color: var(--lightest-mimir-green);
    background-color: white;
    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--mimir-green);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--lightest-mimir-green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript',
    'TypeScript',
    'HTML & CSS',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'Golang',
    'Python',
    'Flask',
    'AWS EC2, Bedrock, S3',
    'Firebase',
    'Netlify',
    'Git',
    'C/C++'
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello there! My name is Waasiq and I like to code beautiful and functional application.
              I love swimming and bicycling in free time.
            </p>
            <p>
               My fascination with computers began in my childhood when I first delved into games like Counter-Strike. The ability to control virtual characters in a digital world always captivated me. 
               Whenever I encountered installation challenges or bugs, I eagerly explored solutions, sparking my initial interest in software and problem-solving. My innate curiosity led me to disassemble toys to unravel their inner workings. 
               This passion eventually led me to pursue a career in software engineering. 
            </p>

            <p>
              I am currently pursuing my masters in <a href="https://uni-freiburg.de/en/">University of Freiburg, Germany</a> {' '}
              and always in a lookout for great new oppurtunities. I{"'"}ve had the
              privilege of working at{' '}
              <a href="https://www.ob2.ai">OB2.AI</a>, {' '}
              <a href="https://www.mmmgroup.com/en">MMM group, </a>,{' '}
              <a href="https://trapmine.com/">Trapmine</a>. 
            </p>

            <p>
              My main focus these days is working on a micro-service backend application using Golang and integrating Amazon Bedrock at
              {'  '}
              <a href="https://www.ob2.ai/">  OB2.AI</a>.
            </p>

            <p>Here are a few technologies and tools I{"'"}ve been working with/learning about recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me-2.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
