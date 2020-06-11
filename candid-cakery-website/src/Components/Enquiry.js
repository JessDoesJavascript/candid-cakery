import React from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 5%;
`;

const StyledForm = styled.form`
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.lilac};
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const StyledFormHeading = styled.h2`
    font-family: ${props => props.theme.fonts.fancy};
    font-size: ${props => props.theme.fontSize.large};
    color: ${props => props.theme.colors.lilac};
    margin: 0;
    margin-bottom: 10px; 
`;

const StyledButton = styled.button`
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: ${props => props.theme.fontSize.small};
    font-weight: 700;
    letter-spacing: 0.1rem;
    color: ${props => props.theme.colors.lilac};
    padding: 0.5rem;
    margin: 5%;
    border: 3px solid ${props => props.theme.colors.lilac};
    border-radius: 10px;
    background-color: ${props => props.theme.colors.palePink};
    :hover { 
        cursor: pointer;
    }
`;


const StyledCheckboxContainer = styled.fieldset`
    border: 2px solid ${props => props.theme.colors.lilac};
`;

const StyledLegend = styled.legend`
   
`;

const StyledLabel = styled.label`
    margin: 0.5vw;
`;

const StyledNameandEmailInput = styled.input`
    height: 1.2rem;
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.lilac};
    font-size: ${props => props.theme.fontSize.small};
    font-weight: 700;
`;

const StyledCheckbox = styled.input`

`;

const StyledTextarea = styled.textarea`
    
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.lilac};
    font-size: ${props => props.theme.fontSize.small};
    font-weight: 700;
    
`;

function Enquiry() {
    return(
        <StyledFormContainer>
            <StyledFormHeading>Contact and Enquiries</StyledFormHeading>
            <StyledForm> 
                <StyledLabel for="Name">*Name:</StyledLabel>
                <StyledNameandEmailInput type="text" id="Name" name="Name" placeholder="Please enter your name" required/>
                <StyledLabel for="PhoneNumber">*Phone number:</StyledLabel>
                <StyledNameandEmailInput type="text" id="PhoneNumber" name="PhoneNumber" placeholder="Please enter a contact number" required />
                <StyledLabel for="Email">*Email:</StyledLabel>
                <StyledNameandEmailInput type="email" id="Email" name="Email" placeholder="Your email address" required />
                <StyledCheckboxContainer>
                    <StyledLegend>What are you interested in?</StyledLegend>

                    <StyledCheckbox type="checkbox" id="regularCakes" name="Regular Cakes" />
                    <StyledLabel for="regularCakes">Regular Cakes</StyledLabel>
                        <br />
                    <StyledCheckbox type="checkbox" id="tieredCakes" name="Tiered Cakes" />
                    <StyledLabel for="tieredCakes">Tiered Cakes</StyledLabel>
                        <br />
                    <StyledCheckbox type="checkbox" id="cupcakes" name="Cupcakes" />
                    <StyledLabel for="cupcakes">Cupcakes</StyledLabel>
                        <br />
                    <StyledCheckbox type="checkbox" id="brownies" name="Brownies" />
                    <StyledLabel for="brownies">Brownies</StyledLabel>
                        <br />
                    <StyledCheckbox type="checkbox" id="other" name="Other" />
                    <StyledLabel for="other">Other</StyledLabel>
                </StyledCheckboxContainer>
                <StyledLabel for="allergens">Any dietary requirements, allergens, special requests?</StyledLabel>
                <StyledTextarea id="allergens" name="allergens" rows="3"/>
                

                <StyledLabel for="date">*What date is your order for?</StyledLabel>
                <input type="date" id="date" name="date" required />

             <StyledButton type="submit"> Send enquiry to Candid Cakery </StyledButton>
            </StyledForm>
     
        </StyledFormContainer>
    );
};

export default Enquiry;