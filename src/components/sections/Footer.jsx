import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
  Spotify,
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
  margin: 30px;
  font-family: "Syncopate", sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: #626262;
`;

const Logo = styled.div`
  font-family: "Bodoni Moda", sans-serif;
  font-size: 38vh;
  line-height:1;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  user-select: none;
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

const SpotifyContainer = styled.div`

`;

const Footer = () => {
  // Array of Spotify track URIs to rotate daily
  const trackURIs = [
    "6Csrqur3IfnVp0EtHskjMw", // Track 1
    "21LiJ0I7bH4IzhMdft5x0t", // Track 2, etc.
    // Add more track URIs as needed
  ];

  // State to manage current track index
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  // State to manage current track URI
  const [trackUri, setTrackUri] = useState(trackURIs[currentTrackIndex]);

  // Function to change track URI daily
  const changeDailyTrack = () => {
    // Calculate the next track index
    const nextIndex = (currentTrackIndex + 1) % trackURIs.length;
    
    // Update state with the new track URI
    setTrackUri(trackURIs[nextIndex]);

    // Update currentTrackIndex for next day
    setCurrentTrackIndex(nextIndex);
  };

  // UseEffect hook to change track daily
  useEffect(() => {
    // Initial call to change track on component mount
    changeDailyTrack();

    // Schedule the daily change (every 24 hours)
    const interval = setInterval(changeDailyTrack, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <FooterContainer id="Contact">
      <FooterWrapper>
        <Contact>CONTACT ME</Contact>
        <Logo>LET'S CONNECT</Logo>
        
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="_blank">
            <FacebookRounded />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="_blank">
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank">
            <Instagram />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <SpotifyContainer>
          {trackUri && (
            <iframe
              title="Spotify Track"
              src={`https://open.spotify.com/embed/track/${trackUri}`}
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          )}
        </SpotifyContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
