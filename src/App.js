import React, { Suspense, lazy } from 'react';
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



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;


function App() {
  return (
    <>
      <div className="grain-overlay"></div>
      <CustomCursor />
      <Preloader />
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
          <Body>
            <Hero />
            <Skills />
            <Project />
            <Experience />
            <Footer/>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
      <ReactHowler src={bgm} playing={true} loop={true} volume={0.1} />
      
    </>
  );
}

export default App;
