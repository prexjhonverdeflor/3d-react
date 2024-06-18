// App.js or a similar file

import React from 'react';
import styled from 'styled-components';
import globeImage from '../../images/globe.png';
import Reveal from '../../utils/Reveal';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 300px;
  gap: 150px;
  
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap:50px;
  
`;

const LeftContainer = styled.div`
  flex: ${props => props.flex};
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-end; /* Align items to the end (right) */
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
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top:20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover; /* Ensures the image covers the entire container */
  overflow: hidden; /* Hides any overflow beyond the container's bounds */
  
`;

const Title = styled.div`
  font-size: 120px;
  text-align: center;
  margin-left: 50px;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Monument Extended', sans-serif;
  font-weight: 400;
  z-index: 1; 

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const GlobeImage = styled.img`
  width: 50%;
  height: 50%;
  margin-top:-500px;
  margin-left: -500px;
  position: absolute;
  opacity: 10%;
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
            <Text>3D_ <br />Portfolio</Text>
            <Desc style={{ marginLeft: '120px' }}>Built with React js, Three js, GSAP, and Framer motion.</Desc>
          </LeftContainer>
          <RightContainer flex="0.7">
            <Image src="https://raw.githubusercontent.com/prexjhonverdeflor/3d-react/new-branch/src/images/3d.PNG" alt="Placeholder" />
          </RightContainer>
        </Wrapper>
      </Reveal>
      <Reveal>
        <Wrapper>
          <LeftContainer flex="0.7">
            <Image src="https://raw.githubusercontent.com/prexjhonverdeflor/3d-react/new-branch/src/images/cb.PNG" alt="Placeholder" />
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
            <Image src="https://raw.githubusercontent.com/prexjhonverdeflor/3d-react/new-branch/src/images/church.png" alt="Placeholder" />
          </RightContainer>
        </Wrapper>
      </Reveal>
      <Reveal>
        <Wrapper>
          <LeftContainer flex="0.7">
            <Image src="https://raw.githubusercontent.com/prexjhonverdeflor/3d-react/new-branch/src/images/inventory.png" alt="Placeholder" />
          </LeftContainer>
          <RightContainer flex="0.3">
            <Text>Inventory_<br />System</Text>
            <Desc style={{ marginRight: '120px' }}>Built with pure C#, and SQL for database management. </Desc>
          </RightContainer>
        </Wrapper>
      </Reveal>
    </Container>
  );
};

export default App;

