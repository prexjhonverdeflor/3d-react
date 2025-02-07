import React, { useState } from 'react';
import styled from 'styled-components';
import Reveal from '../../utils/Reveal';
import globeImage from '../../images/zawarudo.gif';
import starImage from '../../images/star.png';
import Modal from './Modal';
import { project1, project2, project3, project4 } from '../../data/constants';

import Toyota from '../../images/toyota.png';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  gap: 150px;

  @media (max-width: 768px) {
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

`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    padding:0;
    margin:0;
  }
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
    padding:0;
  }
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
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 120px;
  text-align: center;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Monument Extended', sans-serif;
  font-weight: 400;
  z-index: 1;
  padding: 150px;

  @media (max-width: 768px) {
    font-size: 45px;
    padding: 0px;
  }
`;

const GlobeImage = styled.img`
  width: 120%;
  margin-top:-1200px;
  margin-left: -900px;
  position: absolute;

  @media (max-width: 768px) {
    margin-left:-200px;
    margin-top:-2050px;

  }
`;

const StarImage = styled.img`
  width: 60%;
  margin-top: 400px;
  margin-left: 600px;
  position: absolute;
  opacity: 10%;
  z-index: 1;
  user-select: none; /* Prevents text selection */
  pointer-events: none; /* Prevents clicking and dragging */

  @media (max-width: 768px) {
    margin-left: 150px;
    margin-top: 150px;
    width: 100%;
  }
`;



const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (images) => {
    setSelectedImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImages([]);
  };

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
          <RightContainer flex="0.7" onClick={() => handleImageClick(project1)}>
            <Image  src="https://raw.githubusercontent.com/prexjhonverdeflor/3d-react/new-branch/src/images/3ds.png" />
          </RightContainer>
        </Wrapper>
      </Reveal>
      <Reveal>
      <Wrapper>
          <LeftContainer flex="0.7" onClick={() => handleImageClick(project2)}>
            <Image src={project2[0].image} alt="Placeholder" />
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
          <RightContainer flex="0.7"  onClick={() => handleImageClick(project3)}>
            <Image src="https://raw.githubusercontent.com/prexjhonverdeflor/3d-react/new-branch/src/images/churchs.png" alt="Placeholder" />
          </RightContainer>
        </Wrapper>
      </Reveal>
      <Reveal>
        <Wrapper>
          <LeftContainer flex="0.7"  onClick={() => handleImageClick(project4)}>
            <Image src={Toyota} alt="Placeholder" />
          </LeftContainer>
          <RightContainer flex="0.3">
            <Text>Toyota_<br />AE86</Text>
            <Desc style={{ marginRight: '120px' }}>Built with React JS, Three JS, HTML, CSS, and JavaScript.</Desc>

          </RightContainer>
        </Wrapper>
      </Reveal>
      <StarImage src={starImage} />
      <Modal isOpen={modalOpen} onClose={closeModal} images={selectedImages} />

    </Container>
  );
};

export default App;
