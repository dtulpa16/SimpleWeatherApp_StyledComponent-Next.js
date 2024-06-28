"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --darkblue:#002db3;
    --primary: #0000ff;
    --secondary: #bfcfff;
    --accent: #809fff;
    --darkblueopaque:#183f94;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
