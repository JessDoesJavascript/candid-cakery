import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: { 
        sage: '#b6b298',
        lilac: '#bc92cb',
        peach: '#eda5ae',
        pink: '#eeaddb',
        cream: '#feefd5',
        palePink: '#fbe3f8'
    },
    fonts: {
        sansSerif: '"Open Sans Condensed", sans-serif',
        fancy: '"Dancing Script", cursive'
    },
    fontSize: {
        small: '1em',
        medium: '2em',
        large: '3em'
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme; 