import React from 'react';
import styled from 'styled-components';
import CandiiProfilePic from './CandiiProfilePic.jpg';
import { device } from './device.js';

const StyledAboutContainer = styled.div`
    @media ${device.mobileS} {
        display: flex;
        flex-direction: column-reverse;
        align-items: center; 
        margin: 0;
        background: rgb(255,255,255);
        background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(251,227,248,1) 10%, rgba(251,227,248,1) 100%);
        border-top: 10px solid ${props => props.theme.colors.pink};
        
        
       
        
    }
`;

const StyledImageAndH2Container = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
`;

const StyledAboutSection = styled.div`
    @media ${device.mobileS} {
        display: flex;
        flex-direction: column;
        margin: 5%;
        justify-content: center; 
    }
`;

const StyledAboutH2 = styled.h2`
    @media ${device.mobileS} {
        font-family: ${props => props.theme.fonts.fancy};
        letter-spacing: 0.2rem; 
        font-size: ${props => props.theme.fontSize.large};
        color: ${props => props.theme.colors.lilac};
        margin: 0;
        text-align: center;
    }
`;

const StyledParagraph = styled.p`
    @media ${device.mobileS} {  
        font-family: ${props => props.theme.fonts.sansSerif};
        font-size: ${props => props.theme.fontSize.small};
        color: ${props => props.theme.colors.lilac};
        font-weight: 700;
        letter-spacing: 0.1rem;
        text-align: justify; 
    }
`;

const StyledImage = styled.img`
    @media ${device.mobileS} {
        margin: 10px;
        width: 50%;
        border-radius: 100%;
        border: 4px solid ${props => props.theme.colors.pink};
    }
`;

function About() {
    return(
         <StyledAboutContainer> 
           
            <StyledAboutSection>
                <StyledImageAndH2Container>
                    <StyledImage src={CandiiProfilePic} alt="Candii" /> 
                    <StyledAboutH2>
                        About Candid Cakery
                    </StyledAboutH2>
                </StyledImageAndH2Container>
                <StyledParagraph> 
                    Cupcake ipsum dolor sit amet ice 
                    cream dessert apple pie pastry. 
                    Jujubes muffin sesame snaps. Gingerbread
                    brownie apple pie topping croissant croissant. 
                    Gummi bears cotton candy halvah fruitcake 
                    brownie liquorice. Soufflé cupcake dragée 
                    pastry sugar plum dessert pie danish biscuit. 
                    Apple pie bear claw cookie brownie sugar plum 
                    lemon drops apple pie brownie. Cupcake cookie 
                    candy oat cake.
                </StyledParagraph>
               
            </StyledAboutSection>
           
        </StyledAboutContainer>
    );
}

export default About;