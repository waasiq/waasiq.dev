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
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML & CSS',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'ASP.NET',
    'Python',
    'Flask',
    'Azure',
    'Firebase',
    'Git',
    'Java',
    'C/C++',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello there! My name is Waasiq and I like to code beautiful and functional things for
              the web. In the evenings, you can find me playing Dota or going around on adventures. 
              I love swimming and bicycling in free time.
            </p>
            <p>
              My interest in Computers started during my childhood when I started playing games
              like Counter Strike, Need for Speed, and Call of duty. I was always fascinated by the
              fact that I could control the actions of a character in a virtual world. Sometimes, I had 
              to figure out how to install a game, or how to fix a bug during installation, and that's how I started learning
              about computer softwares. I was always curious about how things worked, and I would often take apart
              my toys to see what was inside. This passion continued further and I decided to pursue a career
              in Computer Engineering.
            </p>

            <p>
              Fast-forward to today, I have completed my bachelors in Computer Engineering
              from Sakarya University,{' '}
              <a href="https://www.sakarya.edu.tr/"> SAU </a>, class of 2023. I’ve had the
              privilege of working at{' '}
              <a href="https://www.mmmgroup.com/en">MMM group, </a>,{' '}
              <a href="https://www.primeware.com.tr/">Primware</a>, and{' '}
              <a href="https://trapmine.com/">Trapmine</a> as as full stack software engineer.
            </p>

            <p>
              My main focus these days is developing a large scale full stack project using NextJS and ASP.NET
              at{' '}
              <a href="https://www.primeware.com.tr/">Primeware</a>.
            </p>

            <p>Here are a few technologies I’ve been working with/learning about recently:</p>
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
