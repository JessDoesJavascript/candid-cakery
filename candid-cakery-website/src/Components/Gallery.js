import React from 'react';
import styled from 'styled-components';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

const GalleryContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    padding: 1rem;
    margin: 1rem;
`;

const GalleryImgContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center; 
justify-content: center; 
    `;

const StyledImg = styled.img`

`;

const StyledGalleryHeading = styled.div`
    display: block;
    font-family: ${props => props.theme.fonts.fancy};
    color: ${props => props.theme.colors.lilac};
    font-size: 3rem; 
    font-weight: 700;
   
`;

function Gallery() {
    return(
    <GalleryContainer>
        <StyledGalleryHeading>Gallery</StyledGalleryHeading>
        <GalleryImgContainer>
            <StyledImg src={img1} alt="cake" />
            <StyledImg src={img2} alt="cake" />
            <StyledImg src={img3} alt="cake" />
            <StyledImg src={img4} alt="cake" />
        </GalleryImgContainer>
    </GalleryContainer>
    );
}

export default Gallery;