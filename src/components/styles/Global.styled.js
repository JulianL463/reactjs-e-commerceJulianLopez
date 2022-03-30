import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        font-weight:300;
    }

    body {
        margin: 0;
        font-family: 'Saira Condensed','Inria Sans', 'Times New Roman', sans-serif, -apple-system, BlinkMacSystemFont;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.2rem;
        background-color: black;
        color: ${({theme})=>theme.colors.secondary};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`

export default GlobalStyles