import React from 'react';
import styled from 'styled-components';
import { device } from './device.js';

const StyledMenuButtonContainer = styled.div`
    @media ${device.mobileS} {
        position: fixed;
        width: 100%;
        top: 0;
        background: ${props => props.theme.colors.lilac};
        display: flex;
        justify-content: center;
        align-items: center; 
        height: 2rem;
    }
    @media ${device.tablet} {
        height: 3rem;
    }
    `;
const StyledButton = styled.button`
    @media ${device.mobileS} {
        font-family: ${props => props.theme.fonts.sansSerif};
        font-size: ${props => props.theme.fontSize.small};
        color: white; 
        background: ${props => props.theme.colors.lilac};
        font-weight: 600;
        letter-spacing: 0.1rem; 
        padding: 0.1rem;
        margin: 0.1rem;
        border-style: none; 
    }
    @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.medium};
    }
    `;
// const StyledNavBarText = styled.h2`
//     font-family: ${props => props.theme.fonts.sansSerif};
//         font-size: ${props => props.theme.fontSize.small};
//         color: white; 
//         background: ${props => props.theme.colors.lilac};
//         font-weight: 600;
//         letter-spacing: 0.1rem; 
//         padding: 0.1rem;
//         margin: 0.1rem;
//         border-style: none; `;


function MenuButton(props) {
    return(
        <StyledMenuButtonContainer> 
        
            <StyledButton onClick={props.click}> 
                MENU
            </StyledButton>

        </StyledMenuButtonContainer>
    )
}

export default MenuButton;