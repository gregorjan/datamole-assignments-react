import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";

const meta = {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button content",
    },
};

export const AllBackgrounds: Story = {
    args: {
        children: "Button content",
    },
    render: (args) => (
        <>
            <Button {...args} />
            <Button {...args} background="red" />
            <Button {...args} background="green" />
        </>
    ),
};