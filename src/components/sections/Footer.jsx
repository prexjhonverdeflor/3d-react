import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import Reveal from "../../utils/Reveal";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right:150px;
`;

const CenterColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-left:150px;
`;

const Contact = styled.div`
  margin: 30px;
  font-family: "Syncopate", sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: #626262;
`;

const Logo = styled.div`
  font-family: "Bodoni Moda", sans-serif;
  font-size: 36vh;
  line-height: 1;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text_primary};
  user-select: none;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin: 2rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SpotifyContainer = styled.div`
  margin-top: 10px;
`;

const Text = styled.div`

  font-family: "Syncopate", sans-serif;
  font-weight: 900;
  font-size: 14px;
  color: #626262;
`;

const Footer = () => {
  // Array of Spotify track URIs to rotate daily
  const trackURIs = [
    "1iIJtD9hkzw4ZHfR7ND9yb",
    "2MuWTIM3b0YEAskbeeFE1i",
    "2oaK4JLVnmRGIO9ytBE1bt",
    "5sFDReWLrZHLFZFjHsjUTS",
    "7nnWIPM5hwE3DaUBkvOIpy",
    "59WN2psjkt1tyaxjspN8fp",
  ];

  // State to manage current track URI
  const [trackUri, setTrackUri] = useState("");

  // Function to set a random track URI on component mount
  const setRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * trackURIs.length);
    setTrackUri(trackURIs[randomIndex]);
  };

  // UseEffect hook to set a random track on component mount
  useEffect(() => {
    setRandomTrack();
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <FooterContainer id="Contact">
      <FooterWrapper>
        <Reveal>
          <Contact>CONTACT ME</Contact>
        </Reveal>
        <Reveal>
          <Logo>LET'S CONNECT</Logo>
        </Reveal>
        <Reveal>
          <RowContainer>
            <LeftColumn>
              <Text>Daily music discovery:</Text>
              <SpotifyContainer>
                {trackUri && (
                  <iframe
                    title="Spotify Track"
                    src={`https://open.spotify.com/embed/track/${trackUri}`}
                    width="260"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                )}
              </SpotifyContainer>
            </LeftColumn>
            <CenterColumn>
              <SocialMediaIcons>
                <SocialMediaIcon href={Bio.facebook} target="_blank">
                  <FacebookRounded fontSize="large" />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.twitter} target="_blank">
                  <Twitter fontSize="large" />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.linkedin} target="_blank">
                  <LinkedIn fontSize="large" />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.insta} target="_blank">
                  <Instagram fontSize="large" />
                </SocialMediaIcon>
              </SocialMediaIcons>
            </CenterColumn>
            <RightColumn>
              <Text>@Prex Verdeflor</Text>
            </RightColumn>
          </RowContainer>
        </Reveal>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
