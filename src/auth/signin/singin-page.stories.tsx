import { ComponentMeta, ComponentStory } from '@storybook/react';
import SigninPage from './signin-page';

export default {
  title: 'Auth/SigninPage',
  component: SigninPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SigninPage>;

const Template: ComponentStory<typeof SigninPage> = () => <SigninPage />;

export const _SigninPage = Template.bind({});
