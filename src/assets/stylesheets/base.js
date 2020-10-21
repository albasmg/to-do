import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { COLORS } from './variables';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Barlow', sans-serif;
    }
`;

export const theme = {
  colors: COLORS,
};
