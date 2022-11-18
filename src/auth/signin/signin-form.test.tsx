import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import SigninForm from './signin-form';

describe('SigninForm', () => {
  it('should login a user', async () => {
    const handleSubmit = vi.fn();

    const userData = {
      email: 'kemcd256@safetymail.info',
      password: '08zo7mh240q',
    };

    render(<SigninForm onSubmit={handleSubmit} />);

    const user = userEvent.setup();

    // user enter their email
    const emailInput = screen.getByLabelText('Email');
    await user.type(emailInput, userData.email);
    expect(emailInput).toHaveDisplayValue(userData.email);

    // user enter their password
    const passwordInput = screen.getByLabelText('Password');
    await user.type(passwordInput, userData.password);
    expect(passwordInput).toHaveDisplayValue(userData.password);

    // user submits
    await user.click(screen.getByRole('button', { name: 'Sign in' }));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining(userData),
      expect.anything(), // form event
    );
  });

  it("shouln't display any alert while user don't submits", () => {
    render(<SigninForm onSubmit={vi.fn()} />);

    // while user don't submits, shouldn't be any alert displayed
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it.each([
    { field: 'email', message: '"email" is a required field' },
    { field: 'password', message: '"password" is a required field' },
  ])('should warn user for required field: $field', async ({ message }) => {
    render(<SigninForm onSubmit={vi.fn()} />);

    const user = userEvent.setup();

    // user submits without fill the form
    await user.click(screen.getByRole('button', { name: 'Sign in' }));

    // alerts for required fields should be displayed
    expect(
      await screen.findByRole('alert', { name: message }),
    ).toBeInTheDocument();
  });
});
