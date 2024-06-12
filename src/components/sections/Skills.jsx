import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Reveal } from "../../utils/Reveal";
import Marquee from 'react-fast-marquee'
import { Tilt } from "react-tilt";



const Container = styled.div`
  width: 100%;
  display: flex;
  z-index: 10;
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
  color: #626262;
  margin-bottom: 20px;
  padding-left: 5rem;
`;
const Desc = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 70px;
  line-height: 1;
  padding-left: 5rem;
  font-weight: 400;
  width: 100%; /* Ensure full width */
  color: ${({ theme }) => theme.text_primary};
`;




const Skills = () => {
  const repeatedSkills = Array(10).fill(skills).flat();
  return (
    <Container 
      style={{
        marginBottom: "100px",
        marginTop: "50px",
      }}
      >
      <Wrapper >
        <Reveal >
        <Title id="Skills"  style={{ marginTop: "200px" }}>SKILLS</Title>
        </Reveal>
        <Reveal>
        <Desc style={{ marginBottom: "40px" }}>
        Combining my passion for design with my coding skills allows me to create modern websites that seamlessly 
        integrate aesthetic appeal with functional excellence. 
        I strive to deliver web experiences that captivate and engage users.
        </Desc>
        </Reveal>
        <Title>TECH STACK</Title>
        <Marquee
        style={{ width: '95%', marginLeft: '70px', height: '150px',alignItems: 'center', justifyContent: 'center' }}
        gradientWidth={100}
        gradient={true}
        gradientColor={[245, 240, 236]}
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
