import styled from "styled-components";
import { interactives } from "./styles/interactives";

export const Button = styled.button<{ background?: "green" | "red" }>`
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    background-color: ${({ theme, background }) => {
        if (background === "green") return theme.colors.grass4;
        if (background === "red") return theme.colors.red4;
        return "white";
    }};
    border-radius: 4px;
    border: ${(props) => `2px solid ${props.theme.colors.blackA7}`};

    ${interactives}
`;
