import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

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

export default Input;
