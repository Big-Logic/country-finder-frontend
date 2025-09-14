import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
   :root {
        scroll-behavior: smooth;

        --white: #ffffff;
        --light-gray: #f6f5f7;
        --dimmed-gray: #e0e0e0;
        --primary: #000000;
        --secondary: #000000;
        --error: #ea4335;
        --warning: #fbbc05;
        --success: #34a853;
        --text-color: #202124;
        --text-secondary: #5f6368;
        --border-color: #dadce0;
        --shadow-color: rgba(60, 64, 67, 0.3);

    }

    /*
    1. Use a more-intuitive box-sizing model.
    2. Remove default margin
    3. Allow percentage-based heights in the application
    4. Improve text rendering
  */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
}

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    line-height: 1.5;
    font-family: 'vistasan-otce-regular', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: var(--light-gray);
    color: var(--text-color);
    font-size: 1.6rem; 
  }

  /* Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul, ol {
    list-style: none;
  }

  /* Set core root defaults */
  #root, #__next {
    isolation: isolate;
  }

  /* Make images easier to work with */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Inherit fonts for inputs and buttons */
  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Remove animations and transitions for people who've turned them off */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
