import React from 'react';
import styled from 'styled-components';

const StyledMenuButtonContainer = styled.div`
        position: fixed;
        width: 100%;
        top: 0;
        background: ${props => props.theme.colors.lilac};
        display: flex;
        justify-content: center;
        height: 30px;
    `;
const StyledButton = styled.button`
        font-family: ${props => props.theme.fonts.sansSerif};
        font-size: ${props => props.theme.fontSize.small};
        color: white; 
        background: ${props => props.theme.colors.lilac};
        font-weight: 600;
        letter-spacing: 0.1rem; 
        padding: 0.1rem;
        margin: 0.1rem;
        border-style: none; 
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