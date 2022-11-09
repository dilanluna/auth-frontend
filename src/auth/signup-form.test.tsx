import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import SignupForm from './signup-form';

describe('Signup', () => {
  it('should register a new user', async () => {
    const handleSubmit = vi.fn();
    const userData = {
      id: '455255270',
      firstname: 'Ken',
      lastname: 'Mcdonald',
      phone: '560 936 9577',
      email: 'kemcd256@safetymail.info',
      password: '08zo7mh240q',
    };

    render(<SignupForm onSubmit={handleSubmit} />);

    const user = userEvent.setup();

    // user enter their firstname
    const firstnameInput = screen.getByLabelText('Firstname');
    await user.type(firstnameInput, userData.firstname);
    expect(firstnameInput).toHaveDisplayValue(userData.firstname);

    // user enter their lastname
    const lastnameInput = screen.getByLabelText('Lastname');
    await user.type(lastnameInput, userData.lastname);
    expect(lastnameInput).toHaveDisplayValue(userData.lastname);

    // user enter their id
    const idInput = screen.getByLabelText('ID');
    await user.type(idInput, userData.id);
    expect(idInput).toHaveDisplayValue(userData.id);

    // user enter their phone
    const phoneInput = screen.getByLabelText('Phone');
    await user.type(phoneInput, userData.phone);
    expect(phoneInput).toHaveDisplayValue(userData.phone);

    // user enter their email
    const emailInput = screen.getByLabelText('Email');
    await user.type(emailInput, userData.email);
    expect(emailInput).toHaveDisplayValue(userData.email);

    // user enter their password
    const passwordInput = screen.getByLabelText('Password');
    await user.type(passwordInput, userData.password);
    expect(passwordInput).toHaveDisplayValue(userData.password);

    // user confirm their password
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    await user.type(confirmPasswordInput, userData.password);
    expect(confirmPasswordInput).toHaveDisplayValue(userData.password);

    // user accepts our terms and conditions
    const termsConditionsCheckbox =
      screen.getByLabelText(/terms and conditions/i);
    await user.click(termsConditionsCheckbox);
    expect(termsConditionsCheckbox).toBeChecked();

    // user submits
    await user.click(screen.getByRole('button', { name: 'Sign up' }));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining(userData),
      expect.anything(),
    );
  });

  it("shouln't display any alert while user don't submits", () => {
    render(<SignupForm onSubmit={vi.fn()} />);

    // while user don't submits, shouldn't be any alert displayed
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it.each([
    { field: 'firstname', message: '"firstname" is a required field' },
    { field: 'lastname', message: '"lastname" is a required field' },
    { field: 'id', message: '"id" is a required field' },
    { field: 'phone', message: '"phone number" is a required field' },
    { field: 'email', message: '"email" is a required field' },
    { field: 'password', message: '"password" is a required field' },
    { field: 'termsConditions', message: 'Terms must be accepted' },
  ])('should advice user for required field: $field', async ({ message }) => {
    render(<SignupForm onSubmit={vi.fn()} />);

    const user = userEvent.setup();

    // user submits without fill the form
    await user.click(screen.getByRole('button', { name: 'Sign up' }));

    // alerts for required fields should be displayed
    expect(
      await screen.findByRole('alert', { name: message }),
    ).toBeInTheDocument();
  });

  it("should display an alert if passwords don't matches", async () => {
    render(<SignupForm onSubmit={vi.fn()} />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText('Password'), 'PaSsWoRd');
    await user.type(screen.getByLabelText('Confirm Password'), 'pAsSwOrD');

    await user.click(screen.getByRole('button', { name: 'Sign up' }));

    expect(
      await screen.findByRole('alert', {
        name: 'Passwords must match each other',
      }),
    ).toBeInTheDocument();
  });
});
