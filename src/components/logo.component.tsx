import { Link } from 'react-router-dom';

interface LogoProps {
  to?: string;
  variant?: 'nav' | 'footer';
  className?: string;
}

const variantStyles = {
  nav: {
    container: 'items-center gap-3',
    mark: 'h-10 w-10',
    brand: 'text-lg sm:text-xl font-medium tracking-wide text-white',
    tag: 'hidden',
  },
  footer: {
    container: 'items-start gap-4',
    mark: 'h-14 w-14',
    brand: 'text-2xl sm:text-3xl font-light tracking-tight text-white',
    tag: 'text-[10px] font-body uppercase tracking-[0.45em] text-secondary-500',
  },
} as const;

export default function Logo({
                               to = '/',
                               variant = 'nav',
                               className = '',
                             }: LogoProps) {
  const styles = variantStyles[variant];

  return (
    <Link
      to={to}
      className={`group inline-flex ${styles.container} ${className}`}
      aria-label="Veritas Crest Consulting home"
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full border border-accent-400/40 bg-secondary-500 text-primary-900 shadow-lg shadow-accent-500/30 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl group-hover:shadow-accent-500/40 ${styles.mark}`}
        aria-hidden="true"
      >
        <span className={`font-display font-semibold ${variant === 'nav' ? 'text-sm' : 'text-base'}`}>
          VC
        </span>
      </span>

      <span className="flex flex-col">
        <span className={styles.brand}>Veritas Crest Consulting</span>
        {variant === 'footer' ? (
          <span className={styles.tag}>Strategic Advisory</span>
        ) : null}
      </span>
    </Link>
  );
}

