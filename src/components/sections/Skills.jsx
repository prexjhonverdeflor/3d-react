import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Reveal } from "../../utils/Reveal";
import Marquee from 'react-fast-marquee'
import { Tilt } from "react-tilt";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;






const Skills = () => {
  const repeatedSkills = Array(10).fill(skills).flat();
  return (
    <Container id="Skills"
      style={{
        marginBottom: "100px",
        marginTop: "50px",
      }}
      >
      <Wrapper>
        <Reveal>
        <Title style={{ marginTop: "200px" }}>Skills</Title>
        </Reveal>
        <Reveal>
        <Desc style={{ marginBottom: "40px" }}>
          Here are some of my skills on which I have been working on for the past 4 years.
        </Desc>
        </Reveal>
        
        <Marquee
        style={{ width: '110%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        gradientWidth={100}
        gradient={true}
        gradientColor={[245, 240, 236]}
        speed={60}
        pauseOnHover={true}

      >
        {repeatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} style={{ margin: '0 30px', display: 'inline-block' }}>
            <Tilt>
              <img src={skill.image} alt={skill.name} style={{ width: '120px', height: 'auto' }} />
            </Tilt>
          </div>
        ))}
      </Marquee>


      </Wrapper>
    </Container>
  );
};

export default Skills;
