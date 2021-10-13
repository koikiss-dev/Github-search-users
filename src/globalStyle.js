import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
    :root{
        --bg: #141C2F;
        --bg-target: #1F2A48;
        --bg-data: #141C2F;
        --color-primary: #0379FF;
        --font-not-info: #8F96A4;
        --font-nrmal: #858B99;
    }
    html{
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *::after, *::before{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body{
        background: var(--bg);
        font-size: 16px;
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'Roboto Mono', monospace;
        margin: 2rem;
        color: #ffff;
    }
`;

export default Global