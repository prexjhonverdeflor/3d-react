import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/sections/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Project from './components/sections/Project';
import Footer from './components/sections/Footer';
import Preloader from './components/sections/Preloader';
import CustomCursor from './components/CustomCursor';
import './Grain.css';
import ReactHowler from 'react-howler';
import bgm from './images/bgm.mp3';
import Experience from './components/sections/Experience';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import { ReactLenis } from '@studio-freight/react-lenis';





const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden; // Prevent horizontal scroll
`;



function App() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div className="grain-overlay"></div>
      <CustomCursor />
      <Preloader />
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
        <ReactLenis root>
          <Navbar />
          <Body>
            <Hero />
            <Skills />
            <Project />
            <Experience />
            <Footer />
          </Body>
        </ReactLenis>
        </BrowserRouter>
      </ThemeProvider>
      <ReactHowler src={bgm} playing={true} loop={true} volume={0.3} mute={isMuted} />
      <button
        className="mute-button"
        onClick={toggleMute}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          zIndex: '100',

        }}
      >
        {isMuted ? <VolumeOffIcon fontSize="inherit" /> : <VolumeUpIcon fontSize="inherit" />}
      </button>

    </>
  );
}

export default App;
