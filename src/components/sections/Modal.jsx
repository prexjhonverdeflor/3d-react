import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure modal is on top of other content */
  overflow-y: auto; /* Allow vertical scrolling */
  
`;

const ModalContent = styled(motion.div)`
  position: relative;
  padding: 20px;
  border-radius: 5px;
  max-width: 80%; /* Adjust width as needed */
  max-height: 80%; /* Adjust height as needed */
  overflow-y: auto; /* Enable scrolling within the modal content */

   scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media (max-width: 768px) {
    padding:0;
    max-width: 90%; /* Adjust width as needed */
    max-height: 60%; /* Adjust height as needed */
  }
`;

const ModalImage = styled.img`
  width: 100%;
  margin-top: 20px; /* Space between images */
  
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px; /* Adjust top position */
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 25px;
  height: 30px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    top: -5px;
  }
`;

const ButtonContainer = styled.div`
  margin: 20px;
  
`;

const LiveViewButton = styled.a`
  background-color: #333; /* Dark gray */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 10px 22px;
  }
`;

const GitHubButton = styled.a`
  background-color: #333; /* Dark gray */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 10px 22px;
  }
`;



const Modal = ({ isOpen, onClose, images }) => {
    if (!isOpen || !images || images.length === 0) return null;
  
    return (
      <ModalWrapper
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation when modal opens
        onClick={onClose}
      >
        <ModalContent
          initial={{ opacity: 0, y: '-50px' }} // Initial animation state (off-screen and invisible)
          animate={{ opacity: 1, y: '0' }} // Animation when modal opens (fades in and slides slightly down)
          transition={{ type: 'spring' }} // Smooth spring animation
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>&times;</CloseButton>
          {images.map((image, index) => (
            <ModalImage key={index} src={image.image} alt={`Modal ${index}`} />
          ))}
          <ButtonContainer>
            <LiveViewButton href="https://example.com" target="_blank">Live View</LiveViewButton>
            <GitHubButton href="https://github.com/example" target="_blank">GitHub</GitHubButton>
          </ButtonContainer>
        </ModalContent>
      </ModalWrapper>
    );
  };
  
  export default Modal;