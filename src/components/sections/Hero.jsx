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
  headContainerAnimation,
  headContentAnimation,
  headContentAnimationRight,
  headContainerAnimationRight,
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
    margin-top:120px;
    font-size: 11vw;
    text-transform: uppercase;
    text-align: center;
    font-weight: 1000;
    font-family: 'Syncopate', sans-serif;
  color: ${({ theme }) => theme.text_primary};
`;

const TextLoop = styled.div`
  font-size: 8vw;
  text-transform: uppercase;
  text-align: center;
  font-weight: 1000;
  font-family: 'Syncopate', sans-serif;
  color: ${({ theme }) => theme.text_primary};
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;


const ResumeButton = styled.a`
  position: absolute;
  font-size: 20px;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
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
      <HeroContainer>
        <HaloCanvasContainer>
          <StatueCanvas />
        </HaloCanvasContainer>
        <motion.div {...headContentAnimation}>

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
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
