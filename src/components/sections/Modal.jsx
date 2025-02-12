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
  overflow-y: auto;


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
     
        </ModalContent>
      </ModalWrapper>
    );
  };
  
  export default Modal;