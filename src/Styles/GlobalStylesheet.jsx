import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;

    /* width */
    &::-webkit-scrollbar {
    width: 10px;
}
    /* Track */
    &::-webkit-scrollbar-track {
    background: #f1f1f1;
}
    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888;
}

    }
`;
