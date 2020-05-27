import React from 'react';
import styled from 'styled-components';
import CandiiProfilePic from './CandiiProfilePic.jpg';


const StyledAboutContainer = styled.div`
    background: ${props => props.theme.colors.palePink};
    margin: 5vw;
    border: 4px solid ${props => props.theme.colors.pink};
    border-radius: 10px;

    display: flex;
    flex-direction: row; 
`;
const StyledAboutSection = styled.div`
display: flex;
flex-direction: column;
 margin: 1rem;
 justify-content: center; 
`;

const StyledH2 = styled.h2`
    font-family: ${props => props.theme.fonts.fancy};
    font-size: 2rem;
    color: ${props => props.theme.colors.lilac}
`;

const StyledParagraph = styled.p`
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.lilac};
    font-weight: 700;
    letter-spacing: 0.1rem;
    `;

const StyledImage = styled.img`
    width: 20vw;
    
    border-radius: 100%;
    margin: 5vw;
`;

function About() {
    return(
         <StyledAboutContainer>   
            <StyledAboutSection>
                <StyledH2>
                    About Candid Cakery...
                </StyledH2>
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
           <StyledImage src={CandiiProfilePic} alt="Candii" />
        </StyledAboutContainer>
    );
}

export default About;