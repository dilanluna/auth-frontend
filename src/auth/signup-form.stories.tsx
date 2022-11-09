import { userEvent, within } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignupForm from './signup-form';

export default {
  title: 'Auth/SignupForm',
  component: SignupForm,
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = () => (
  <SignupForm onSubmit={(data) => window.alert(JSON.stringify(data))} />
);

export const Empty = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const user = {
    id: '455255270',
    firstname: 'Ken',
    lastname: 'Mcdonald',
    phone: '560 936 9577',
    email: 'kemcd256@safetymail.info',
    password: '08zo7mh240q',
  };

  // user fills form
  await userEvent.type(canvas.getByLabelText('Firstname'), user.firstname);
  await userEvent.type(canvas.getByLabelText('Lastname'), user.lastname);
  await userEvent.type(canvas.getByLabelText('ID'), user.id);
  await userEvent.type(canvas.getByLabelText('Phone'), user.phone);
  await userEvent.type(canvas.getByLabelText('Email'), user.email);
  await userEvent.type(canvas.getByLabelText('Password'), user.password);
  await userEvent.type(
    canvas.getByLabelText('Confirm Password'),
    user.password,
  );
  await userEvent.click(canvas.getByLabelText(/terms and conditions/i));
};
