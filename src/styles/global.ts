import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{

        //Cor Azul a Azul claro
        --color-brand1: #4529E6;
        --color-brand2: #5126EA;
        --color-brand3: #B0A6F0;
        --color-brand4: #EDEAFD;

        //Cor Preta a Cinza

        --color-grey0: #0B0D0D;
        --color-grey1: #212529;
        --color-grey2: #495057;
        --color-grey3: #868E96;
        --color-grey4: #ADB5BD;
        --color-grey5: #CED4DA;
    }
  
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  h1, h2, h3, h4, p, span {
    font-family: 'Inter', sans-serif;
  }
  textarea{
    font-family: 'Inter', sans-serif;
    padding:  1rem;
    resize: none
  }
  body {
      display:  flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 100vh;
      background-color: var(--color-brand4) ;
  }
  button {
      cursor: pointer ;
  }
  input {
    color: #000
  }
`
