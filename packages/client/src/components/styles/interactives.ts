import { css } from "styled-components";

export const  interactives = css`
    cursor: pointer;

    &:hover {
        outline: ${(props) => `1px solid ${props.theme.colors.blackA7}`};
    }
    
    &&:focus-visible {
       outline: 2px solid black;
       outline-offset: 2px;
    }
`