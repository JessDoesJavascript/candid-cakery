import React from 'react';
import styled from 'styled-components';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import { device } from './device';

const GalleryContainer = styled.div`
    @media ${device.mobileS} {
        display: flex; 
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        padding: 0rem;
        margin: 0rem;
    }
`;

const GalleryImgContainer = styled.div`
    @media ${device.mobileS} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center; 
        justify-content: center; 
    }
`;

const StyledImg = styled.img`
    @media ${device.mobileS} {
        width: 100%;
    }
`;

const StyledGalleryHeading = styled.div`
    @media ${device.mobileS} {
        display: block;
        font-family: ${props => props.theme.fonts.fancy};
        color: ${props => props.theme.colors.lilac};
        font-size: ${props => props.theme.fontSize.large}; 
        font-weight: 700;
    }
`;

function Gallery() {
    return(
    <GalleryContainer>
        <StyledGalleryHeading>Gallery</StyledGalleryHeading>
        <GalleryImgContainer>
            <StyledImg src={img1} alt="A cake with chocolate and biscuits piled on top" />
            <StyledImg src={img2} alt="A tiered wedding cake with pale pink and bright pink roses decorating one side from top to bottom" />
            <StyledImg src={img3} alt="Chocolate brownies" />
            <StyledImg src={img4} alt="Iced cupcakes with chunks of mars bar set on top" />
        </GalleryImgContainer>
    </GalleryContainer>
    );
}

export default Gallery;