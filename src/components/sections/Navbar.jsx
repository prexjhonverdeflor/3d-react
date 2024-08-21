import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { headContentAnimationTop } from "../../utils/motion";
import { motion } from "framer-motion";
import { useLenis } from '@studio-freight/react-lenis';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;

  padding: 50px 0;
  font-size: 24px;
  letter-spacing: 1px;
  color: #464646;
  font-weight: 900;
`;

const NavbarContainer = styled.div`
  color: ${({ theme }) => theme.black};
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;

`;


const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight:400;
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
    margin:0;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 952px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  padding: 0 6px;
  font-weight: 400;
  font-size: 16px;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px; /* Adjust as needed */
    left: 50%;
    width: 0;
    height: 3px;
    background-color: currentColor;
    transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  color: ${({ theme }) => theme.text_primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  padding: 0;
  font-size: 20px;
  font-weight: 400;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  margin-left: auto; /* This will push the button to the right end */

  @media screen and (max-width: 640px) {
    border: none;
    background: none;
    font-size: 18px;
  }

  @media screen and (max-width: 952px) {
    display:none;
  }

`;


const MobileIcon = styled.div`
  cursor: pointer;
  display: none;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  position: fixed; // Fix position relative to the viewport
  right: 30px;
  transform: translateY(-50%); // Adjust for vertical center

  @media screen and (max-width: 952px) {
    display: flex;
  }
`;


const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0;
  list-style: none;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bg };
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};


`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis(); // Get the Lenis instance

  const handleScroll = (target) => {
    lenis.scrollTo(target);
    setIsOpen(false); // Close the mobile menu after clicking
  };

  return (
    <Nav>
      <NavbarContainer>
        <motion.div {...headContentAnimationTop}>
          <NavLogo href="#home" onClick={(e) => { e.preventDefault(); handleScroll('#Home'); }}>
            PREX
          </NavLogo>
        </motion.div>
        <motion.div {...headContentAnimationTop}>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            <MenuRounded style={{ color: "inherit" }} />
          </MobileIcon>
        </motion.div>
        <NavItems>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#home" onClick={(e) => { e.preventDefault(); handleScroll('#Home'); }}>
              home
            </NavLink>
          </motion.div>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('#Skills'); }}>
              skills
            </NavLink>
          </motion.div>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#experience" onClick={(e) => { e.preventDefault(); handleScroll('#Experience'); }}>
              experience
            </NavLink>
          </motion.div>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('#Projects'); }}>
              projects
            </NavLink>
          </motion.div>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#footer" onClick={(e) => { e.preventDefault(); handleScroll('#Footer'); }}>
              contact
            </NavLink>
          </motion.div>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={(e) => { e.preventDefault(); handleScroll('#Home'); }}>home</NavLink>
            <NavLink onClick={(e) => { e.preventDefault(); handleScroll('#Skills'); }}>skills</NavLink>
            <NavLink onClick={(e) => { e.preventDefault(); handleScroll('#Experience'); }}>experience</NavLink>
            <NavLink onClick={(e) => { e.preventDefault(); handleScroll('#Projects'); }}>projects</NavLink>
            <NavLink onClick={(e) => { e.preventDefault(); handleScroll('#Footer'); }}>contact</NavLink>
            <NavLink href={Bio.github} target="_blank">GITHUB</NavLink>
            <GithubButton href={Bio.github} target="_blank">GITHUB</GithubButton>
          </MobileMenu>
        )}

        <motion.div {...headContentAnimationTop}>
          <ButtonContainer>
            <GithubButton href={Bio.github} target="_blank">
              GITHUB
            </GithubButton>
          </ButtonContainer>
        </motion.div>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
