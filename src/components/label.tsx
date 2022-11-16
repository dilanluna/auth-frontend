import clsx from 'clsx';
import { LabelHTMLAttributes } from 'react';

export default function Label({
  children,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={clsx(
        'text-sm font-medium text-gray-400 peer-placeholder-shown:text-neutral-600 peer-invalid:text-red-500',
        className,
      )}>
      {children}
    </label>
  );
}
