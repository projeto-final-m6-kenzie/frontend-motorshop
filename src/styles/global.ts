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
        --color-grey6: #DEE2E6;
        --color-grey7: #E9ECEF;
        --color-grey8: #F1F3F5;
        --color-grey9: #F6F6F6;
        --color-whiteFixed: #FFFFFF;
        --color-whiteFixed2: #FDFDFD;

        --color-alert1: #CD2B31;
        --color-alert2: #FDD8D8;
        --color-alert3: #FFE5E5;
        --color-sucess1: #18794E;
        --color-sucess2: #CCEBD7;
        --color-sucess3: #DDF3E4;

        --color-random1: #E34D8C;
        --color-random2: #C04277;
        --color-random3: #7D2A4D;
        --color-random4: #7000FF;
        --color-random5: #6200E3;
        --color-random6: #36007D;
        --color-random7: #349974;
        --color-random8: #2A7D5F;
        --color-random9: #153D2E;
        --color-random10: #6100FF;
        --color-random11: #30007D;
        --color-random12: #937BB9;
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
      background-color: var(color-whiteFixed) ;
  }
  button {
      cursor: pointer ;
  }
  input {
    color: #000
  }
`
