import { type StorybookConfig } from "@storybook/react-vite"; 
import { mergeConfig } from "vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-addon-pseudo-states",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: true,
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            optimizeDeps: {
                include: ["@radix-ui/colors", "styled-normalize", "styled-reset"],
            },
        });
    },
};

export default config;
