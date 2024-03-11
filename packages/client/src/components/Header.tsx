import { PlusIcon } from "@radix-ui/react-icons";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Form } from "./form";
import { Button } from "./Button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
        font-size: 20px;
        font-weight: 500;
    }
`;

type HeaderProps = {
    children: ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const { children, onItemAdd } = props;

    const onSubmit = (value: string) => {
        onItemAdd(value);
        setIsEditing(false);
    };

    //! TODO: fix A11Y
    
    return (
        <StyledDiv>
            {isEditing ? (
                <>
                    <VisuallyHidden.Root>
                        <h1>{children}</h1>
                    </VisuallyHidden.Root>
                    <Form onSubmit={onSubmit} onCancel={() => setIsEditing(false)} initialValue="" />
                </>
            ) : (
                <>
                    <h1>{children}</h1>
                    <Button background="green" onClick={() => setIsEditing(true)}>
                        <PlusIcon aria-label="Open add new item form" />
                    </Button>
                </>
            )}
        </StyledDiv>
    );
};
