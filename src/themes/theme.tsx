import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 20, 96]
fontSizes.body = fontSizes[0]
fontSizes.bodyExtraLarge = fontSizes[1]
fontSizes.displayExtraLarge = fontSizes[2] 

const primary = '#2567B4';
const secondary = '#F9B531';

const background = '#ff0000';

const theme = {
    fontSizes,
    colors: {
        primary,
        secondary
    },
    background
}

export const Theme: React.FC = ({ children }) => {
    return(<ThemeProvider theme={theme}>{ children }</ThemeProvider>);
};