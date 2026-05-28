import type { Service } from '@/home/types';
import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "@/components";
import { services as dataServices } from '@/services/data/services';
import {
  LuBuilding2,
  LuGlobe,
  LuScale,
  LuFactory,
  LuShip,
  LuLeaf,
  LuUserCheck,
  LuWallet,
  LuCpu
} from "react-icons/lu";

const icons = [
  LuBuilding2,
  LuGlobe,
  LuScale,
  LuFactory,
  LuShip,
  LuLeaf,
  LuUserCheck,
  LuWallet,
  LuCpu
];

const services: Service[] = dataServices.map((s, i) => ({
  id: s.id,
  title: s.title,
  description: s.tagline,
  icon: icons[i % icons.length],
  bg: i % 2 === 0 ? 'bg-primary-50' : 'bg-primary-900',
  accent: i % 2 === 0 ? 'text-secondary-500' : 'text-secondary-400',
  dark: i % 2 !== 0
}));

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-primary-50">
      {/* Section header */}
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-secondary-500 tracking-[0.4em] uppercase text-xs mb-6 block">
          Core Capabilities
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-navy-950 font-light max-w-2xl">
          Strategic Advisory for the Industrial Frontier
        </h2>
      </div>

      {/* Stacking cards */}
      <div>
        {services.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            totalCards={services.length}
          />
        ))}
      </div>
    </section>
  );
}