import { userEvent, within } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SigninForm from './signin-form';

export default {
  title: 'Auth/Signin Form',
  component: SigninForm,
} as ComponentMeta<typeof SigninForm>;

const Template: ComponentStory<typeof SigninForm> = (props) => (
  <SigninForm
    {...props}
    onSubmit={(data) => window.alert(JSON.stringify(data))}
  />
);

export const Empty = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const user = {
    email: 'kemcd256@safetymail.info',
    password: '08zo7mh240q',
  };

  // user fills form
  await userEvent.type(canvas.getByLabelText('Email'), user.email);
  await userEvent.type(canvas.getByLabelText('Password'), user.password);
};
