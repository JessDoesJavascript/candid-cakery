import React from 'react';
import styled from 'styled-components';

const StyledInfoContainer = styled.div`
    background: ${props => props.theme.colors.palePink};
    border: 4px solid ${props => props.theme.colors.pink};
    border-radius: 10px; 
    margin: 5vw;
    padding: 1vw;
    box-shadow: 6px 6px 6px -6px grey;
    
`;
const StyledInfoHeading = styled.h2`
    font-family: ${props => props.theme.fonts.fancy};
    font-size: ${props => props.theme.fontSize.large};
    color: ${props => props.theme.colors.lilac};
    
    
`;

const StyledInfoParagraph = styled.p`
    color: ${props => props.theme.colors.lilac};
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: ${props => props.theme.fontSize.small};
    font-weight: 700;
    letter-spacing: 0.1rem;
    margin: 0.5rem;

`;

function Info() {
    return(
        <StyledInfoContainer>
            <StyledInfoHeading>Important Information</StyledInfoHeading>
            <StyledInfoParagraph> Allergens, FAQs, Ts and Cs et cetera...
            Icing toffee gummies lemon drops lemon drops lemon drops.
             Jelly gummi bears croissant toffee cotton candy halvah 
             liquorice gingerbread. Bear claw pudding jelly-o. Carrot 
             cake candy canes pie. Pastry gingerbread pudding candy canes 
             marshmallow. Cheesecake powder cheesecake caramels muffin
              soufflé jelly beans chocolate bar tootsie roll. Brownie 
              jelly beans tootsie roll tiramisu carrot cake. Jelly-o 
              fruitcake bear claw halvah tootsie roll marshmallow pastry. </StyledInfoParagraph>
        </StyledInfoContainer>
    );
};

export default Info;