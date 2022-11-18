import tsconfigPaths from 'vite-tsconfig-paths';
import { InlineConfig, mergeConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      base: process.env.STORYBOOK_BASE_URL,
      plugins: [topLevelAwait(), tsconfigPaths()],
    } as InlineConfig);
  },
};

module.exports = config;
