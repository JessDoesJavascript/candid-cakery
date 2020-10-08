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
   @media ${device.mobileS} {
    background-color: ${props => props.theme.colors.palePink};
    width: 100%;
    height: 5rem; 
    margin-top: 30px;
    display: flex;
    align-items: center; 
    justify-content: center;
   }
   @media ${device.tablet} {
       margin-top: 3rem;
   }
`;

const StyledHeader = styled.header`
    @media ${device.mobileS} {
        margin-bottom: 150px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center; 
        font-family: ${props => props.theme.fonts.fancy};
        color: ${props => props.theme.colors.lilac};
        background: white;
    }

    
`;
const StyledHeaderBreaker = styled.div`
    height: 3rem;
`;

const StyledHeaderBreaker2 = styled.div`
    height: 2rem;
`;

const StyledImg = styled.img`
    @media ${device.mobileS} {
        width: 90%
    }
    @media ${device.mobileM} {
        width: 80%
    }
    @media ${device.mobileL} {
        width: 60%
    }
    @media ${device.laptop} {
        width: 30%
    }
`;

const StyledH1 = styled.h1`
    @media ${device.mobileS} {
        font-size: ${props => props.theme.fontSize.small};
        letter-spacing: 0rem;
        text-align: center;
        margin: 5%;
    }
    @media ${device.mobileL} {
        margin: 1rem;
    }
    @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.medium};
    }
`;

const StyledSlogan = styled.h2`
    @media ${device.mobileS} {
        font-size: ${props => props.theme.fontSize.medium};
        letter-spacing: 0.05rem;
        text-align: center;
        margin: 5%;
    }
    @media ${device.mobileL} {
        margin: 1rem;
        font-size: ${props => props.theme.fontSize.medium};
    }
    @media ${device.tablet} {
        margin: 5rem;
        font-size: ${props => props.theme.fontSize.large};
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
            <StyledHeaderBreaker2 />
            <StyledSlogan> Made in Brighton, delivery to surrounding areas available. </StyledSlogan>
        </StyledHeader>


    );
}

export default Header;