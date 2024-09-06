import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #ffffff;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }

  /* Add space between all components or sections */
  section, div,footer, article {
    margin-bottom: 20px; /* Add space after each component */
  }
`;

export default GlobalStyle;
