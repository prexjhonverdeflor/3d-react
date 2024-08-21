import React, { useState } from 'react';
import styled from 'styled-components';
import Reveal from '../../utils/Reveal';
import globeImage from '../../images/zawarudo.gif';
import starImage from '../../images/star.png';
import Toyota from '../../images/toyota.png';
import Church from '../../images/churches.png';
import CB from '../../images/cbs.png';



const Container = styled.div`
<<<<<<< HEAD
//always use to center in any sizes
=======
>>>>>>> dac0399fb2f1fe7abdf90fcc40104b5f6f8fe609
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

<<<<<<< HEAD
  display: flex;
=======
>>>>>>> dac0399fb2f1fe7abdf90fcc40104b5f6f8fe609
  flex-direction: column;
  position: relative;
  gap: 150px;

  @media (max-width: 768px) {
<<<<<<< HEAD
    padding:0px;
    margin:0;
  }

   @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

=======
    padding: 0px;
    margin: 0;
  }

  @media (max-width: 1200px) {
    padding: 20px;
  }
>>>>>>> dac0399fb2f1fe7abdf90fcc40104b5f6f8fe609
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
<<<<<<< HEAD

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    padding:0;
    margin:0;
  }
=======
>>>>>>> dac0399fb2f1fe7abdf90fcc40104b5f6f8fe609
`;

const LeftContainer = styled.div`
  flex: ${props => props.flex};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RightContainer = styled.div`
  flex: ${props => props.flex};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-family: 'Monument Extended', sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const ImageWrapper = styled.a`
  width: 100%;
  height: 160px;
  display: block;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  padding: 150px;
  font-size: 120px;
  text-align: center;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Monument Extended', sans-serif;
  font-weight: 400;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 45px;
    padding: 50px;
  }
`;

const GlobeImage = styled.img`
  width: 120%;
  margin-top: -1200px;
  margin-left: -900px;
  position: absolute;

  @media (max-width: 768px) {
    margin-left: -200px;
    margin-top: -2050px;
  }
`;

const StarImage = styled.img`
  width: 60%;
  margin-top: 400px;
  margin-left: 600px;
  position: absolute;
  opacity: 10%;
  z-index: 1;
  user-select: none;
  pointer-events: none;

  @media (max-width: 768px) {
    margin-left: 150px;
    margin-top: 150px;
    width: 100%;
  }
`;


const SocialMediaIcon = styled.a`
  display: flex; /* Use flex to arrange items in a row */
  align-items: center; /* Optional: Align items vertically in the center */
  margin: 15px;
  color: ${({ theme }) => theme.text_primary};
  z-index:1000;
  cursor: pointer;
`;

const App = () => {
  return (
    <Container id="Projects">
      <GlobeImage src={globeImage} alt="Globe Image" />
      <Reveal>
        <Title>selected_<br />works</Title>
      </Reveal>
      <Reveal>
        <Wrapper>
          <LeftContainer flex="0.3">
            <Text>3D Portfolio_ <br />Website</Text>
            <Desc style={{ marginLeft: '120px' }}>Built with React js, Three js, GSAP, and Framer motion.</Desc>
          </LeftContainer>
          <RightContainer flex="0.7">
            <ImageWrapper href="https://www.behance.net/gallery/206017195/Portfolio-Website" target="_blank" rel="noopener noreferrer">
              <img src="https://raw.githubusercontent.com/prexjhonverdeflor/3d-react/new-branch/src/images/3ds.png" alt="3D Portfolio" />
            </ImageWrapper>
          </RightContainer>
        </Wrapper>
      </Reveal>
      <Reveal>
        <Wrapper>
          <LeftContainer flex="0.7">
            <ImageWrapper href="https://www.behance.net/gallery/206017461/CB-Payment-Portal" target="_blank" rel="noopener noreferrer">
              <img src={CB} alt="Payment Portal" />
            </ImageWrapper>
          </LeftContainer>
          <RightContainer flex="0.3">
            <Text>Payment_<br />Portal</Text>
            <Desc style={{ marginRight: '120px' }}>Built with Python, and Django for Camalig Bank.</Desc>

          </RightContainer>
        </Wrapper>
      </Reveal>
      <Reveal>
        <Wrapper>
          <LeftContainer flex="0.3">
            <Text>Church_<br />Management System</Text>
            <Desc style={{ marginLeft: '120px' }}>Our Capstone. Built with PHP, Javascript, and MySQL.</Desc>
          </LeftContainer>
          <RightContainer flex="0.7">
            <ImageWrapper href="https://www.behance.net/gallery/206017621/Church-Management-System" target="_blank" rel="noopener noreferrer">
              <img src={Church} alt="Church Management System" />
            </ImageWrapper>
          </RightContainer>
        </Wrapper>
      </Reveal>
      <Reveal>
        <Wrapper>
          <LeftContainer flex="0.7">
            <ImageWrapper href="https://www.behance.net/gallery/206017701/Toyota" target="_blank" rel="noopener noreferrer">
              <img src={Toyota} alt="Toyota AE86" />
            </ImageWrapper>
          </LeftContainer>
          <RightContainer flex="0.3">
            <Text>Toyota_<br />AE86</Text>
            <Desc style={{ marginRight: '120px' }}>Built with React JS, Three JS, HTML, CSS, and JavaScript.</Desc>
          </RightContainer>
        </Wrapper>
      </Reveal>
      <StarImage src={starImage} />
    </Container>
  );
};

export default App;
