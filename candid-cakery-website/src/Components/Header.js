import React from 'react';
import styled from 'styled-components';
import CCLogo from './CCLogo.jpeg';
// snow = "#fcf7fb";
// purple =  "#69306d";
// beige: #CC998D
// lilac: #aeadf0
// mauve: #8b687f




const StyledHeader = styled.header`
    width: 100vw;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    font-family: 'Open Sans Condensed', sans-serif;
    color: ${props => props.theme.colors.lilac};
    background: white
    
`;

const StyledImg = styled.img`
  width: 35vw;
`;

const StyledH1 = styled.h1`
    font-size: ${props => props.theme.fontSize.medium};
    letter-spacing: 0.5rem;
    text-align: center;
   
`;


function Header() {
    return (
        <StyledHeader>
            <StyledImg src={CCLogo} alt="Candid Cakery Logo"/>
            <StyledH1>From simple to bespoke designs <br />
            Celebration cakes for all occasions
           </StyledH1>
        </StyledHeader>


    );
}

export default Header;