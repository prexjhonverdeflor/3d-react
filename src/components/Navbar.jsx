import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { headContentAnimationTop } from "../utils/motion";
import { motion } from "framer-motion";


const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
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
  text-transform: uppercase;
`;

const NavbarContainer = styled.div`
  color: ${({ theme }) => theme.black};
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  
  
`;
const NavLogo = styled(LinkR)`
  margin-left: -100px;
  width: 80%;
  padding: 0 6px;
  font-weight:900;
  font-size: 24px;
  text-decoration: none;

  color: ${({ theme }) => theme.primary};
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 0 6px;
  font-weight:900;
  font-size: 18px;
  
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  margin-right: -100px;
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 900;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  padding: 0 6px;
  font-weight:900;
  font-size: 24px;
  
`;

const MobileIcon = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 640px) {
    display: flex;
    margin-left: 340px;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
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
  const theme = useTheme();
  return (

    <Nav>

      <NavbarContainer>
        <motion.div {...headContentAnimationTop}>
          <NavLogo href="" >Prex</NavLogo>
        </motion.div>
        <motion.div {...headContentAnimationTop}>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        </motion.div>
        <NavItems>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#Home">Home</NavLink>
          </motion.div>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#Skills">Skills</NavLink>
          </motion.div>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#Experience">Experience</NavLink>
          </motion.div>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#Projects">Projects</NavLink>
          </motion.div>
          <motion.div {...headContentAnimationTop}>
            <NavLink href="#Education">Contact</NavLink>
          </motion.div>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Home">
              Home
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Footer">
              Contact
            </NavLink>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github
            </GithubButton>
          </MobileMenu>
        )}

        <motion.div {...headContentAnimationTop}>
          <ButtonContainer>
            <GithubButton href={Bio.github} target="_Blank">
              Github
            </GithubButton>
          </ButtonContainer>
        </motion.div>
      </NavbarContainer>

    </Nav>

  );
};

export default Navbar;
