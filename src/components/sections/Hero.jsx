import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
//import HeroImg from "../../images/Hero1.png";
//import HeroBgAnimation from "../HeroBgAnimation";
//import gsap from 'gsap';
import { Reveal } from "../../utils/Reveal";
import StateCanvas from "../canvas/Statue";
import {
  headContentAnimation,
  headContentAnimationBottom,

} from "../../utils/motion";
import { motion } from "framer-motion";
import './Hero.css';
import StatueCanvas from "../canvas/Statue";



const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height to center vertically */
  flex-direction: column; /* Stack children vertically */
  text-align: center; /* Center text inside */
  position: relative; /* Needed for absolute positioning of HaloCanvas */
`;

const Title = styled.div`
    position: relative; /* Needed to position HaloCanvas behind */
    z-index: 1;
    margin-top: 50px;
    font-size: 15vw;
    text-transform: uppercase;
    text-align: center;
    font-weight: 1000;
    color: ${({ theme }) => theme.text_primary};
    user-select: none;

`;

const TextLoop = styled.div`
  font-size: 8vw;
  text-transform: uppercase;
  text-align: center;
  font-weight: 1000;
  font-family: 'Syncopate', sans-serif;
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  margin-top: 610px;
  user-select: none;
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;


const ResumeButton = styled.a`
  position: absolute;
  z-index: 1000; // Ensure it's on top of other elements
  font-size: 15px;
  bottom: -100px; // Adjust to ensure it's within the view
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  display: flex; // Changed from align-items to display flex for centering
  justify-content: center; // Ensure text is centered
  align-items: center; // Ensure text is centered
  border-radius: 50px;
  cursor: pointer;
  padding: 15px 30px;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  font-family: "Syncopate", sans-serif;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
  }
`;



const HaloCanvasContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* Ensure HaloCanvas is behind other elements */
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allow clicks to pass through */
`;


const HeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;


const Hero = () => {
  return (
    <div id="Home">
       <motion.div {...headContentAnimationBottom}>
      <HeroContainer>
        <HaloCanvasContainer>
          <StatueCanvas />
        </HaloCanvasContainer>
       
        <HeadlineContainer>
          <Title id="text-behind" >{Bio.name}</Title>
          <Title id="text-behind-blur">{Bio.name}</Title>
          <Title id="text-front">{Bio.name}</Title>
        </HeadlineContainer>
        
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
      
          <ResumeButton href={Bio.resume} target="_blank">
            Resume
          </ResumeButton>
        
      </HeroContainer>
      </motion.div>
    </div>
  );
};

export default Hero;
