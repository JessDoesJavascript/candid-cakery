import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: { 
        sage: '#b6b298',
        lilac: '#bc92cb',
        peach: '#eda5ae',
        pink: '#eeaddb',
        cream: '#feefd5',
        palePink: '#fbe3f8',
        darkPurple: '#362867'
    },
    fonts: {
        chunkySansSerif: '"Open Sans Condensed", sans- serif',
        sansSerif: '"Open Sans Condensed", sans-serif',
        fancy: '"Dancing Script", cursive'
    },
    fontSize: {
        small: '16px',
        medium: '1.4em',
        large: '1.8em'
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme; 