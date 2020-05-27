import React from 'react';
import Header from './Components/Header.js';
import './App.css';
import styled from 'styled-components';
import Theme from './Components/Theme.jsx';
import NavBar from './Components/NavBar.js';
import About from './Components/About.js';
import Gallery from './Components/Gallery.js';
import Info from './Components/Info.js';
import Enquiry from './Components/Enquiry.js'




const StyledApp = styled.div`
  font-size: 16px;
`;

const Container = styled.div`

  height: 100vh;
`;


function App() {
  return (
    <Theme>
      <Container>
        <StyledApp>
          <NavBar />
          <Header />
          <About />
          <Gallery />
          <Info />
          <Enquiry />
        </StyledApp>
      </Container>
    </Theme>
    );
}

export default App;
