import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignupThanksPage from './signup-thanks-page';

export default {
  title: 'Auth/SignupThanksPage',
  component: SignupThanksPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SignupThanksPage>;

const Template: ComponentStory<typeof SignupThanksPage> = () => (
  <SignupThanksPage />
);

export const _SignupThanksPage = Template.bind({});
