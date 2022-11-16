import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-700 text-white font-medium py-[10px] px-4 rounded-md focus:ring focus:ring-blue-500 focus:ring-offset-1 min-w-[205px]',
        className,
      )}>
      {children}
    </button>
  );
}
