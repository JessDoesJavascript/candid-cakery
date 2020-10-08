import React from 'react';
import styled from 'styled-components';
import { device } from './device';


const StyledNav = styled.nav`
    @media ${device.mobileS} {
        position: fixed;
        width: 100vw;
        top: 0;
        
        background: ${props => props.theme.colors.lilac};
        list-style-type: none;
        display: flex;
        justify-content: center;
       
    }
`;

const StyledUl = styled.ul`
    @media ${device.mobileS} {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px;
        padding: 0px;
   
    }
`;

const StyledLi = styled.li`
    @media ${device.mobileS} {
        font-family: ${props => props.theme.fonts.sansSerif};
        font-size: ${props => props.theme.fontSize.small};
        color: white; 
        background: ${props => props.theme.colors.lilac};
        font-weight: 600;
        letter-spacing: 0.1rem; 
        padding: 0.1rem;
        margin: 0.1rem;
        border-radius: 0%; 
        flex-grow: 1;
        text-align: center;
        justify: center;
         
       
        
        a:link {
            text-decoration: none;
            color: white;
            }

        a:visited {
            text-decoration: none;
            color:  ${props => props.theme.colors.darkPurple};
        };
        };
            }
        a:active {
            background-color: ${props => props.theme.colors.palePink};
            color: ${props => props.theme.colors.darkPurple};
        }
        
        :hover {
            cursor: pointer; 
            background-color: ${props => props.theme.colors.palePink};
            color: ${props => props.theme.colors.darkPurple};
        }
        }
    }
`;

function NavBar(props) {
          return(
           
                <StyledNav>
                  <StyledUl>
                      <StyledLi onClick={props.click}>X CLOSE MENU</StyledLi>
                      <StyledLi onClick={props.click}><a href="#home">HOME</a></StyledLi>
                      <StyledLi onClick={props.click}><a href="#about">ABOUT</a></StyledLi>
                      <StyledLi onClick={props.click}><a href="#gallery">PHOTO</a></StyledLi>
                      <StyledLi onClick={props.click}><a href="#contact">CONTACT</a></StyledLi>
                      <StyledLi onClick={props.click}><a href="#info">INFO</a></StyledLi>
                      
                    </StyledUl>
                </StyledNav>
           
        )
    }
export default NavBar;