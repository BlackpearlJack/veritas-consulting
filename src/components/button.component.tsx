import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'destructive' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  /** Optional border color class (e.g. 'border-secondary-500'). When provided with variant='outline' this sets the outline color. */
  borderClass?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) {
  // Use site theme utility classes defined throughout the project (index.css + Tailwind)
  const baseStyles = 'cursor-pointer rounded-none transition-colors font-medium inline-flex gap-2 items-center justify-center font-body uppercase tracking-[0.18em]';

  const variantStyles: Record<string, string> = {
    // Primary: prominent filled CTA (matches prior secondary-500 usage across the app)
    primary: 'bg-secondary-500 text-primary-900 hover:bg-secondary-400 disabled:opacity-50 disabled:cursor-not-allowed',
    // Secondary: outlined CTA used for downloads / subtle actions
    secondary: 'bg-transparent border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-primary-900 disabled:opacity-50 disabled:cursor-not-allowed',
    // Accent / feedback variants map to available tokens — tweak if you have specific classes
    accent: 'bg-accent-500 text-white hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed',
    success: 'bg-success text-white hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed',
    warning: 'bg-warning text-white hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed',
    info: 'bg-info text-white hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed',
    destructive: 'bg-destructive text-white hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'bg-transparent text-primary-200 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed',
    // Outline: transparent background with a border; callers should provide `borderClass` to set the color
    outline: 'bg-transparent border',
  };

  const sizeStyles: Record<string, string> = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base',
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${props.borderClass ?? ''} ${sizeStyles[size]} ${className}`;

  return (
    <button
      disabled={disabled || isLoading}
      className={finalClassName}
      {...props}
    >
      {isLoading && (
        <span className="inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
}


