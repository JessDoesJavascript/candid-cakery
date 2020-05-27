import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`

`;
const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 50px;
    text-align: center; 
    background: ${props => props.theme.colors.palePink};
    
`;

const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex; 
    justify-content: space-around;
`;

const StyledLi = styled.li`
    display: inline;
    padding: 0.1rem; 
    width: 15%;
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: ${props => props.theme.fontSize.small};
    color: white; 
    background: ${props => props.theme.colors.lilac};
    border-bottom: 3px solid white;
    border-top: 3px solid white;
    border-radius: 10px; 
    margin: 0.3rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
    :hover {
        cursor: pointer; 
    }
    
    
 
 
   
`;



function NavBar() {
          return(
            <NavContainer>
                <StyledNav>
                    <StyledUl>
                    <StyledLi>Home</StyledLi>
                    <StyledLi>About</StyledLi>
                    <StyledLi>Info</StyledLi>
                    <StyledLi>Gallery</StyledLi>
                    <StyledLi>Contact</StyledLi>
                    </StyledUl>
                </StyledNav>
            </NavContainer>

        )
    }


export default NavBar;