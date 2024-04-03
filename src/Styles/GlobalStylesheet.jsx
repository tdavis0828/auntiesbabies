import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;
        background: #fefbf6;
        ${
          '' /* background: url('https://images.unsplash.com/photo-1546074177-ffdda98d214f'); */
        }
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed; 
        
    /* width */
    &::-webkit-scrollbar {
    width: 10px;
}
    /* Track */
    &::-webkit-scrollbar-track {
    background: #fefbf6;
}
    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888;
}

    }
`;
