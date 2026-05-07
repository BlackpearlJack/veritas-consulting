interface BadgeProps {
  quote: string;
  className?: string;
}

function Badge({ quote, className = '' }: BadgeProps) {
  return (
    <div
      className={`bg-secondary-500 p-10 lg:p-14 max-w-70 shadow-2xl ${className}`}
    >
      <p className="text-primary-900 text-2xl leading-tight font-semibold italic">
        {quote}
      </p>
    </div>
  );
}

export { Badge };


