import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';
const GlobalStyles = createGlobalStyle`
  ${modernNormalize}

  :root {
    --nav-btn: #F1F1F1;
    --btn-active: #47523F;
    --dark: #202020;
    --modal-btn-add: #47523F;
    --modal-btn-add-active: #30392A;
    --modal-btn-remove: #282828;

  }

  body {
    margin: 0;
    font-family: 'Manrope', sans-serif; 
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
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
