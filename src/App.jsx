import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './details/Themes';
import Navbar from './page/Navbar';
import Hero from './page/HeroSection';
import Skills from './page/Skills';
import Projects from './page/Projects';
import { BrowserRouter as Router } from "react-router-dom";
import Contact from './page/Contact';
import Footer from './page/Footer';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 30% 98%, 0px 100%);
  padding-bottom: 100px;
`;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />

          <Projects />
          <Contact />
          </Wrapper>
          <Footer />
          
        </Body>
      </Router>

    </ThemeProvider>
  );
}

export default App;
