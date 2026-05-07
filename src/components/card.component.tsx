import type { Service } from '@/home/types';
import Button from './button.component.tsx';
import { Link } from 'react-router-dom';

function ServiceCard({
                      service,
                      index,
                      totalCards,
                    }: {
  service: Service ;
  index: number;
  totalCards: number;
}) {
  const Icon = service.icon;
  const topOffset = index * 24;
  const zIndex = index + 1;
  const shadowIntensity = index * 0.06;

  return (
    <div
      className={`sticky rounded-none shadow-2xl shadow-accent-500 ${service.bg}`}
      style={{
        top: `${80 + topOffset}px`,
        zIndex,
        boxShadow: `0 -${index * 2}px ${index * 16}px rgba(0,0,0,${shadowIntensity})`,
        marginBottom: index < totalCards - 1 ? '0' : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-1">
            <span
              className={`font-body text-base tracking-widest2 font-light ${
                service.dark ? 'text-primary-50' : 'text-primary-900'
              }`}
            >
              0 {service.id}
            </span>
          </div>

          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-sm`}
              >
                <Icon className={`w-12 h-12 ${service.accent}`} />
              </div>
            </div>
            <h2
              className={`font-display text-4xl md:text-5xl font-light leading-tight ${
                service.dark ? 'text-white' : 'text-primary-900'
              }`}
            >
              {service.title}
            </h2>
          </div>

          <div className="md:col-span-6">
            <p
              className={`font-body text-base leading-relaxed font-light mt-1 ${
                service.dark ? 'text-white/55' : 'text-slate-600'
              }`}
            >
              {service.description}
            </p>
            <Link to="/contact">
              <Button
                variant="ghost"
                className={`mt-8 ${
                  service.dark
                    ? 'text-secondary-400 hover:text-secondary-300'
                    : 'text-primary-800 hover:text-primary-900'
                }`}
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export {
  ServiceCard,
}