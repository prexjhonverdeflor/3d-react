import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImg.png";
import HeroBgAnimation from "../HeroBgAnimation";
import {motion } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation} from "../../utils/motion";



const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 66px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 30px;
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content:end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: ${({ theme }) => theme.primary};
  
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  line-height: 68px;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 32px;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 940px) {
    padding: 0 50px 0 50px;
  }

  @media (max-width: 640px) {
    padding: 0 50px 0 50px;
  }
`;


const ResumeButton = styled.a`
  margin-top:20px;
  width:150px;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
  }
`;

const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height:100%;
    max-width: 400px;
    max-height: 400px;
    
    @media (max-width: 640px) {
        max-width: 300px;
        max-height: 300px;
    } 

`;


const HeroBg = styled.div`
    position: absolute;
    display: flex;
    top:0;
    right:0;


    @media (max-width: 640px) {
      right:-50px;
  } 

`;


const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>     
            <HeroBgAnimation/>
        </HeroBg>
        <motion.div {...headContainerAnimation}>
        <HeroInnerContainer>
          <HeroLeftContainer>
          <motion.div {...headTextAnimation}>
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            
            <TextLoop>
              
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            </motion.div>

          <motion.div {...headContentAnimation}>
            <SubTitle>{Bio.description}</SubTitle>
            </motion.div>
            <ResumeButton>Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            
          <motion.div {...headContainerAnimation}>
          
          <Img src={HeroImg}/>
          
          </motion.div>

          </HeroRightContainer>
        </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
