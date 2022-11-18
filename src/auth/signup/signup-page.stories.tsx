import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignupPage from './signup-page';

export default {
  title: 'Auth/SignupPage',
  component: SignupPage,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
    reactRouter: {
      routePath: '/signup',
    },
  },
} as ComponentMeta<typeof SignupPage>;

const Template: ComponentStory<typeof SignupPage> = () => <SignupPage />;

export const _SignupPage = Template.bind({});
