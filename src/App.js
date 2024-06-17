import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Project from "./components/sections/Project";
import Footer from "./components/sections/Footer";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import './Grain.css';
import bgm from './images/bgm.mp3';

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
      <ThemeProvider theme={darkTheme} >
        <BrowserRouter>
          <Navbar />
          <Body>
            <Hero />
            <Skills />
            <Project />
            <Experience />
            <Education />
            <Footer />
          </Body>
        </BrowserRouter>
      </ThemeProvider>
      {/* Background Music */}
      <audio autoPlay loop>
        <source src={bgm} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default App;
