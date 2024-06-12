import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes"
import Navbar from './components/Navbar';
import { BrowserRouter} from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Project from "./components/sections/Project";
import Footer from "./components/sections/Footer";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;  
  overflow-x: hidden; 
  position: relative ;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(255, 153, 153, 0.15) 0%,
      rgba(255, 153, 153, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(153, 204, 255, 0) 50%,
      rgba(153, 204, 255, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;



function App() {
  return (
    <>
  <CustomCursor/>
  <Preloader/>
    <ThemeProvider theme={lightTheme} >
      <BrowserRouter>
        <Navbar />
        <Body>
            <Hero/>
            <Wrapper>
              <Skills/>
              <Experience/>
            </Wrapper>
              <Project/>
            <Wrapper>
              <Education/>
              </Wrapper>
              
              <Footer/>
        </Body>
      </BrowserRouter>
     
    </ThemeProvider>
    </>
  );
}

export default App;
