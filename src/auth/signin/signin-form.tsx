import Input from '@/components/input';
import Label from '@/components/label';
import Button from '@/components/button';
import { useForm } from 'react-hook-form';
import Feedback from '@/components/feedback';
import { joiResolver } from '@hookform/resolvers/joi';
import { ErrorMessage } from '@hookform/error-message';

const Joi = await import('joi');

const validations = Joi.object<SigninUser>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .label('email'),
  password: Joi.string().trim().required().label('password'),
}).messages({ 'string.empty': '{#label} is a required field' });

export default function SigninForm({
  onSubmit,
}: {
  onSubmit: (data: SigninUser) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninUser>({
    shouldUseNativeValidation: true,
    resolver: joiResolver(validations),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-col-1 gap-y-8">
        <div className="col-span-1">
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

        <div className="col-span-1">
          <div className="relative">
            <Input
              id="password"
              type="password"
              {...register('password')}
              autoComplete="current-password"
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
      </div>

      <div className="text-center mt-9">
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
}
