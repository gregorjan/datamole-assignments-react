import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Form } from "./form";
import { Button } from "./Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px;

    ${Button} {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover,
    &:focus-within {
        background-color: ${(props) => props.theme.colors.blackA1};
        ${Button} {
            opacity: 1;
        }
    }
`;

const FormWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    margin-left: 11px;
`;

const Label = styled.label`
    margin-left: 15px;
    flex-grow: 1;
`;

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem: React.FC<LiteeItemProp> = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    const onSubmit = (value: string) => {
        onItemLabelEdit(value);
        setIsEditing(false);
    };

    return (
        <StyledDiv>
            <Checkbox aria-label="Mark this item as done" checked={isDone} onCheckedChange={onItemDoneToggle} />

            {isEditing ? (
                <FormWrapper>
                    <Form onSubmit={onSubmit} onCancel={() => setIsEditing(false)} initialValue={label} />
                </FormWrapper>
            ) : (
                <>
                    <Label>{label}</Label>

                    <Button onClick={() => setIsEditing(true)}>
                        <Pencil1Icon aria-label="Edit this item" />
                    </Button>
                    <Button background="red" onClick={() => onItemDelete()}>
                        <TrashIcon aria-label="Delete this item" />
                    </Button>
                </>
            )}
        </StyledDiv>
    );
};
