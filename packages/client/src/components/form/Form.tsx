import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { FC, useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { Button } from "../Button";

const FormStyled = styled.form`
    display: flex;
    flex-grow: 1;
    gap: 4px;
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form: FC<FormProps> = (props) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    //! TODO: Don't submit empty values, display warning instead

    return (
        <FormStyled
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputValue);
            }}
            onReset={() => {
                onCancel();
            }}
        >
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <Button background="green" type={"submit"}>
                <CheckIcon aria-label="Save this item" />
            </Button>
            <Button background="red" type={"reset"}>
                <Cross1Icon aria-label="Close editing window" />
            </Button>
        </FormStyled>
    );
};
