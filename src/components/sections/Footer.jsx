import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Contact = styled.div`
  margin:30px;
  font-family: "Syncopate", sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: #626262;
`;

const Logo = styled.div`
  font-family: "Bodoni Moda", sans-serif;
  font-size: 286px;
  line-height: 1;
  text-align:center;
  color: ${({ theme }) => theme.text_primary};
  user-select:none;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin: 2rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 1rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="Contact">
      <FooterWrapper>
        <Contact>CONTACT ME</Contact>
        <Logo>LET'S CONNECT</Logo>
        
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookRounded />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <Instagram />
          </SocialMediaIcon>
        </SocialMediaIcons>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
