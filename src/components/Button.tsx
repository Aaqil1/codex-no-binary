import { forwardRef, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', type = 'button', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors';

    const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary:
        'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
      secondary:
        'bg-white text-slate-900 shadow hover:bg-slate-100 focus-visible:ring-primary',
      ghost:
        'bg-transparent text-primary hover:bg-primary-light/20 focus-visible:ring-primary',
    };

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(baseStyles, variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
