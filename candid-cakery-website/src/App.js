import React from 'react';
import Header from './Components/Header.js';
import './App.css';
import styled from 'styled-components';
import Theme from './Components/Theme.jsx';
import NavBar from './Components/NavBar.js';
import About from './Components/About.js';
import Gallery from './Components/Gallery.js';
import Info from './Components/Info.js';
import Enquiry from './Components/Enquiry.js';
import MenuButton from './Components/MenuButton.js';
import { device } from './Components/device.js';




const StyledApp = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  scroll-behavior: smooth;
  @media ${device.mobileS} {
    font-size: ${props => props.theme.fontSize.small};
    scroll-behavior: smooth;
 
  }
`;

const StyledBreaker = styled.div`
  height: 10px;
`;

const Container = styled.div`
  scroll-behavior: smooth;
  height: 100vh;
`;


class App extends React.Component {
  
  state = {
    navBarShown: false
  }

  clickHandler = (e) => {
    e.preventDefault();

    this.setState({
      navBarShown: !this.state.navBarShown
    })
  }
render() {
  return (
    <Theme>
      <Container>
      <a id="home" href="home"> </a>
        <StyledApp>
          
          {this.state.navBarShown === false && <MenuButton click={this.clickHandler}/> || <NavBar click={this.clickHandler}/>}
          <Header />
          <StyledBreaker><a id="about" href="about" /> </StyledBreaker> 
          <About />
          <StyledBreaker><a id="gallery" href="gallery" /> </StyledBreaker> 
          <Gallery />
          <StyledBreaker><a id="contact" href="contact" /> </StyledBreaker> 
          <Enquiry />
          <StyledBreaker><a id="info" href="info" /> </StyledBreaker> 
          <Info />
          <StyledBreaker></StyledBreaker>
          
            
          
        </StyledApp>
      </Container>
    </Theme>
    );
}
}

export default App;
