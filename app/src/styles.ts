import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body, html{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    margin: 0;
  }

  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyles;