import React from 'react';
import styled from 'styled-components';
import CCLogo from './CCLogo.jpeg';
import { device } from './device.js';
// snow = "#fcf7fb";
// purple =  "#69306d";
// beige: #CC998D
// lilac: #aeadf0
// mauve: #8b687f


const StyledDiv = styled.div`
background-color: ${props => props.theme.colors.palePink};
width: 100%;
height: 70px; 
margin-top: 30px;

`;

const StyledHeader = styled.header`
    @media ${device.mobileS} {
      
        margin-bottom: 150px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center; 
        font-family: 'Open Sans Condensed', sans-serif;
        color: ${props => props.theme.colors.lilac};
        background: white;
    }
`;
const StyledHeaderBreaker = styled.div`
    height: 50px;
`;

const StyledImg = styled.img`
    @media ${device.mobileS} {
        width: 90%
    }
`;

const StyledH1 = styled.h1`
    @media ${device.mobileS} {
        font-size: ${props => props.theme.fontSize.small};
        letter-spacing: 0.05rem;
        text-align: center;
        margin: 5%;
    }
`;


function Header() {
    return (
        <StyledHeader>
            <StyledDiv>
                <StyledH1>
                    From simple to bespoke designs, <br /> celebration cakes for all occasions
                </StyledH1> 
            </StyledDiv>
            <StyledHeaderBreaker />
            <StyledImg src={CCLogo} alt="Candid Cakery Logo"/>
            <StyledH1> Made in Brighton, delivery to surrounding areas available. </StyledH1>
        </StyledHeader>


    );
}

export default Header;