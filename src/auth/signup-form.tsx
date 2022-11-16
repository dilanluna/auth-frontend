import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { ErrorMessage } from '@hookform/error-message';
import { forwardRef, InputHTMLAttributes } from 'react';
import Label from '../components/label';
import Feedback from '../components/feedback';

const Joi = await import('joi');

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      type={type}
      className={clsx(
        'peer block text-neutral-600 leading-snug px-4 py-3 rounded border-gray-300 placeholder:text-gray-300 focus:ring-0 focus:outline-0 focus:border-gray-400 focus:invalid:border-red-500 invalid:border-red-500 w-full',
        className,
      )}
    />
  );
});

Input.displayName = 'Input';

const validations = Joi.object<SignupUser>({
  firstname: Joi.string().trim().required().label('firstname'),
  lastname: Joi.string().trim().required().label('lastname'),
  id: Joi.string().trim().required().label('id'),
  phone: Joi.string().trim().required().label('phone number'),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .label('email'),
  password: Joi.string().trim().required().label('password'),
  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'Passwords must match each other' }),
  termsConditions: Joi.boolean()
    .equal(true)
    .required()
    .messages({ 'any.only': 'Terms must be accepted' }),
}).messages({
  'string.empty': '{#label} is a required field',
});

export default function SignupForm({
  onSubmit,
}: {
  onSubmit: (data: SignupUser) => void;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupUser>({
    shouldUseNativeValidation: true,
    resolver: joiResolver(validations),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
        <div className="col-span-2">
          <div className="relative">
            <Input
              type="text"
              id="firstname"
              autoComplete="given-name"
              {...register('firstname')}
              placeholder="Enter your firstname"
            />
            <Label
              htmlFor="firstname"
              className="absolute left-2 -top-3 bg-white px-2">
              Firstname
            </Label>
            <ErrorMessage
              errors={errors}
              name="firstname"
              render={Feedback}
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="relative">
            <Input
              type="text"
              id="lastname"
              {...register('lastname')}
              autoComplete="family-name"
              placeholder="Enter your lastname"
            />
            <Label
              htmlFor="lastname"
              className="absolute left-2 -top-3 bg-white px-2">
              Lastname
            </Label>
            <ErrorMessage
              name="lastname"
              errors={errors}
              render={Feedback}
            />
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <div className="relative">
            <Input
              id="id"
              type="text"
              {...register('id')}
              placeholder="Enter your ID"
            />
            <Label
              htmlFor="id"
              className="absolute left-2 -top-3 bg-white px-2">
              ID
            </Label>
            <ErrorMessage
              name="id"
              errors={errors}
              render={Feedback}
            />
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              {...register('phone')}
              placeholder="Enter your phone number"
            />
            <Label
              htmlFor="phone"
              className="absolute left-2 -top-3 bg-white px-2">
              Phone
            </Label>
            <ErrorMessage
              name="phone"
              errors={errors}
              render={Feedback}
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="relative">
            <Input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email')}
              placeholder="Enter your email"
            />
            <Label
              htmlFor="email"
              className="absolute left-2 -top-3 bg-white px-2">
              Email
            </Label>
            <ErrorMessage
              name="email"
              errors={errors}
              render={Feedback}
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="relative">
            <Input
              id="password"
              type="password"
              {...register('password')}
              autoComplete="new-password"
              placeholder="Enter your password"
            />
            <Label
              htmlFor="password"
              className="absolute left-2 -top-3 bg-white px-2">
              Password
            </Label>
            <ErrorMessage
              name="password"
              errors={errors}
              render={Feedback}
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="relative">
            <Input
              type="password"
              id="confirm-password"
              autoComplete="new-password"
              {...register('confirmPassword')}
              placeholder="Enter your password again"
            />
            <Label
              htmlFor="confirm-password"
              className="absolute left-2 -top-3 bg-white px-2">
              Confirm Password
            </Label>
            <ErrorMessage
              errors={errors}
              render={Feedback}
              name="confirmPassword"
            />
          </div>
        </div>

        <div className="col-span-2">
          <Input
            type="checkbox"
            id="terms-conditions"
            {...register('termsConditions')}
            className="inline-block text-blue-500 px-2 py-2 w-auto"
          />
          <Label
            htmlFor="terms-conditions"
            className="font-normal ml-3">
            Agree to terms and conditions
          </Label>
          <ErrorMessage
            errors={errors}
            render={Feedback}
            name="termsConditions"
          />
        </div>
      </div>

      <div className="text-center mt-9">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-700 text-white font-medium py-[10px] px-4 rounded-md focus:ring focus:ring-blue-500 focus:ring-offset-1 min-w-[205px]">
          Sign up
        </button>
      </div>
    </form>
  );
}
