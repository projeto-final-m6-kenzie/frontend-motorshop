import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
        --color-primary: #147;
        --color-secondary: #EEE;
        --color-error: #ad2a2a;
        --color-white: #FBFEFF;
    }
  
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  h1, h2, h3, h4, p {
    color: var(--color-secondary);
  }
  body {
      background-color: var(--color-primary);
      display:  flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
  }
  button {
      cursor: pointer ;
  }
  input {
    color: #000
  }
`;