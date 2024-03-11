import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    gap: 6px;

    margin-top: 15px;
    padding-top: 15px;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems = 0, doneItems = 0 } = props;

    return (
        <FooterStyled>
            <span>Done: {doneItems}</span>
            <span>Todo: {todoItems}</span>
        </FooterStyled>
    );
};
