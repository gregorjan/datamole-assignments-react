import styled from "styled-components";

export const Button = styled.button`
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    background-color: white;
    border-radius: 4px;
    border: ${(props) => `2px solid ${props.theme.colors.blackA7}`};

`;
