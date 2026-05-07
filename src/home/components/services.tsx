import type { Service } from '@/home/types';
import {HiOfficeBuilding} from "react-icons/hi";
import {GiFarmTractor} from "react-icons/gi";
import {SiWebmoney} from "react-icons/si";
import {useEffect, useRef, useState} from "react";
import {ServiceCard} from "@/components";


const services: Service[] = [
  {
    id: 1,
    title: 'Real Estate',
    description: "Strategic commercial and industrial developments in Nairobi's satellite cities, focused on high-yield logistics hubs",
    icon: HiOfficeBuilding,
    bg: 'bg-primary-100',
    accent: 'text-secondary-500',
    dark: false
  },
  {
    id: 2,
    title: "Agtech",
    description: "Scaling precision agriculture platforms that bridge the gap between smallholder efficiency and global supply chains",
    icon: GiFarmTractor,
    bg: "bg-primary-900",
    accent: "text-secondary-400",
    dark: true
  },
  {
    id: 3,
    title: "FinTech",
    description: "Investing in the infrastructure of the 'Silicon Savannah' focusing on cross-border payment trails and credit democratization for SMEs",
    icon: SiWebmoney,
    bg: "bg-primary-100",
    accent: "text-secondary-500",
    dark: false
  }
]

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
          Core Services
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-navy-950 font-light">
          Take your pic
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
  )
}