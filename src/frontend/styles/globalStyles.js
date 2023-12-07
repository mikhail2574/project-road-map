import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';
const GlobalStyles = createGlobalStyle`
  ${modernNormalize}

  :root {
    --nav-btn: #F1F1F1;
    --btn-active: #47523F;
    --white: #FBFCFC;
    --dark: #202020;
    --text-dark: #191413;
    --gray: #8A8A89;
    --transparent-gray: #1914134D;
    --modal-btn-add: #47523F;
    --modal-btn-add-active: #30392A;
    --modal-btn-remove: #282828;
    
    /* animation */
    --fast: 0.15s ease;
  }

  body {
    margin: 0;
    font-family: 'Manrope', sans-serif; 
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.43;
    color: var(--text-dark);
    background: #F0F0F0;
  }
  
  p,
  h1, 
  h2,  
  h3 {
    margin: 0;
    padding: 0;
  }

  ul, 
  ol, 
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
