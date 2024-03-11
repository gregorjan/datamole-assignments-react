import { PlusIcon } from "@radix-ui/react-icons";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Form } from "./form";

const StyledDiv = styled.header`
    display: flex;

    button {
        all: unset;

        width: 25px;
        height: 25px;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;

        color: #fff;
    }
`;

type HeaderProps = {
    children: ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const { children, onItemAdd } = props;

    //! TODO: fix A11Y

    return (
        <StyledDiv>
            {isEditing ? (
                <Form onSubmit={onItemAdd} onCancel={() => setIsEditing(false)} initialValue="" />
            ) : (
                <h1>{children}</h1>
            )}

            <button onClick={() => setIsEditing(true)}>
                <PlusIcon />
            </button>
        </StyledDiv>
    );
};
