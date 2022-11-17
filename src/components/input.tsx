import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

export const inputTextTypes = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'date',
  'datetime-local',
  'month',
  'week',
  'time',
  'search',
  'tel',
];

export const inputOptionTypes = ['checkbox', 'radio'];

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      type={type}
      className={clsx(
        'peer rounded border-gray-300 placeholder:text-gray-300 focus:ring-0 focus:outline-0 focus:border-gray-400 focus:invalid:border-red-500 invalid:border-red-500',
        {
          'block text-neutral-600 leading-snug px-4 py-3 w-full':
            inputTextTypes.includes(type),
          'inline-block text-blue-500 px-2 py-2 w-auto':
            inputOptionTypes.includes(type),
        },
        className,
      )}
    />
  );
});

Input.displayName = 'Input';

export default Input;
