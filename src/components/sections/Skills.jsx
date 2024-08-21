import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Reveal } from "../../utils/Reveal";
import Marquee from 'react-fast-marquee'
import { Tilt } from "react-tilt";
import image1 from '../../images/hands.png';




const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: ${({ theme }) => theme.text_primary};
`;
const Title = styled.div`
  font-family: "Syncopate", sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  padding-left: 5rem;
  @media (max-width: 768px) {
    padding-left: 3rem;
  }
`;
const Desc = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 70px;
  line-height: 1;
  padding-left: 5rem;
  font-weight: 400;
  width: 100%; /* Ensure full width */
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 40px;
    padding-left: 3rem;
  }
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  margin-top: -200px;
  opacity: 20%;
  @media (max-width: 768px) {
    margin-top: 150px;
    width: 150%;
  }
`;



const Skills = () => {
  const repeatedSkills = Array(10).fill(skills).flat();
  return (
    <Container
      style={{
        marginBottom: "100px",
        marginTop: "250px",
      }}
      >
      <Wrapper >
        <Image src={image1} alt="IMG"/>
        <Reveal>
        <Title id="Skills" >INTRO</Title>
        </Reveal>
        <Reveal>
        <Desc style={{ marginBottom: "40px" }}>
        I am a Developer and UI/UX Designer based in Philippines. I love combining my passion for design with my coding skills, allowing me to create modern websites that seamlessly
        integrate aesthetic appeal with functional excellence. I love pizza and art.
        </Desc>
        </Reveal>
        <Title>TECH STACK</Title>
        <Marquee
        style={{ width: '95%', marginLeft: '70px', height: '150px',alignItems: 'center', justifyContent: 'center' }}
        gradientWidth={100}
        gradient={true}
        gradientColor={[0, 0, 0]}
        speed={80}
        pauseOnHover={true}

      >
        {repeatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} style={{ margin: '0 40px', display: 'inline-block' }}>
            <Tilt>
              <img src={skill.image} alt={skill.name} style={{ width: '120px', height: 'auto', }} />
            </Tilt>
          </div>
        ))}
      </Marquee>


      </Wrapper>
    </Container>
  );
};

export default Skills;
