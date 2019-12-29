import {css} from 'styled-components';

import typography, {family} from './typography';
import palette from './palette';

export default css`
    *,
    *:after,
    *:before {
        box-sizing: border-box;
        font: inherit;
        appearance: none;
    }

    html {
        background-color: ${palette.white};
        -webkit-overflow-scrolling: touch;
        -webkit-font-smoothing: antialiased;
        height: 100vh;
    }

    body {
        font-family: ${family};
        font-weight: ${typography.regular.weight};
        font-size: 100%;
        height: 100%;
    }

    body,
    ul,
    ol,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0;
    }

    ul,
    ol {
        list-style-type: none;
    }

    #app-root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;
