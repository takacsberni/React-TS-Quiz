import styled, {createGlobalStyle} from "styled-components";
import backgroundImage from './images/autumn-studio.jpg';

export const GlobalStyle = createGlobalStyle`
html {
height: 100%;
}

body {
background-image: url(${backgroundImage});
background-size: cover;
margin: 0;
padding: 0 20px;
display: flex;
justify-content: center;
}

*{
box-sizing: border-box;
font-family: 'Roboto', sans-serif;

font-size: 40px;
color: black;
}

`
