import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
         
      body, input, button, textarea {
        font-family: 'Nunito', sans-serif;
      }
   
      button {
        cursor: pointer;
      }
   
      body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.textPrimary};
      }
    `;