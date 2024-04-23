import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: ['../src/components/**/*.stories.@(ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'storybook-addon-pseudo-states'
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {}
    },
    docs: {
        autodocs: 'tag',
        defaultName: 'Documentation'
    },
    staticDirs: ['../public']
};
export default config;
