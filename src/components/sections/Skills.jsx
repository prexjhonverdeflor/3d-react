import React from 'react'
import styled from "styled-components"
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation} from "../../utils/motion";


const tiltOptions = {
    max: 30,           
    scale: 1.01,       
    speed: 300,        
    transition: true,  
    glare: true,       
    "max-glare": 0.2,  
  };


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: cemter;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    align-items: center;
    width: 100%;
    max-width: 100%;
    gap: 12px;

    @media (max-width: 960px) {
        flex-direction: column;
    }

`;


const Title = styled.div`
    font-size: 52px;
    text-align:center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;


const Desc = styled.div`
    font-size: 18px;
    text-align:center;
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
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid rgba(255, 255, 25, 0.125);
    box-shadow: 
        rgba(0, 0, 0, 0.1) 0px 4px 12px, 
        rgba(0, 0, 0, 0.05) 0px 2px 4px; 
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
    color: ${({ theme }) => theme.text_primary+ 80};

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
    return (
      <Container id="Skills">
        <Wrapper>
          <Title>Skills</Title>
          <Desc style={{ marginBottom: '40px' }}>Here's my current Tech Stack</Desc>
          
          <SkillsContainer>
            {skills.map((skills, index) => (
              <Tilt options={tiltOptions} key={`tilt-${index}`}>
                <Skill key={`skill-${index}`}>
                  <SkillTitle>{skills.title}</SkillTitle>
                  
                  <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true}}
                  {...headContentAnimation}>

                  <SkillList>
                    {skills.skills.map((item, index_x) => (
                      <SkillItem key={`skill-x-${index_x}`}>
                        <SkillImage src={item.image} />
                        {item.name}
                      </SkillItem>
                    ))}
                  </SkillList>
                  </motion.div>
                </Skill>
              </Tilt>
            ))}
          </SkillsContainer>
          
        </Wrapper>
      </Container>
    );
  };
  
  export default Skills;