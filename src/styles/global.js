import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }
  
  body {
    margin: 0px;
    min-width: 320px;
    min-height: 100vh;
    padding: 20px;
    text-align: center;

  }

  header{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }


  ul{
    list-style: none;
    padding: 0;
  }
  
  button {
    padding: 0;
    border: none;
    cursor: pointer;
  }
  
  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }
`;
