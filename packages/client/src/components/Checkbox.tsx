import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { interactives } from "./styles/interactives";

const CheckboxStyled = styled(CheckboxPrimitive.Root)`
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;

    background-color: transparent;
    border-radius: 4px;

    border: ${(props) => `2px solid ${props.theme.colors.blackA7}`};

    ${interactives}

`;

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
    color: ${(props) => props.theme.grass11};
`;

export const Checkbox = (props: CheckboxProps) => (
    <CheckboxStyled {...props}>
        <CheckboxIndicator>
            <CheckIcon />
        </CheckboxIndicator>
    </CheckboxStyled>
);
