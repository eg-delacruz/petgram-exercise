import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #24283d;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
    padding-bottom: 50px;
    /* Commented because it interferes with the position:fixed property of any child element */
    /* filter: drop-shadow(0 0 20px rgba(255,255,255,.2)); */
  }
  /* Using the after pseudo element to avoid filter property conflicts in body tag */
  body::after {
    content: '';
    background-color: #24283d;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 500px;
    transform: translate(-50%, 0);
    filter: drop-shadow(0 0 20px rgba(255,255,255,.2));
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`;
