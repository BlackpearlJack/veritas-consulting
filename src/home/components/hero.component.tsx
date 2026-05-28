import { useEffect, useRef, useState } from 'react';
import {LuArrowDown} from "react-icons/lu";
import { Link } from 'react-router-dom';
import {Button} from "@/components";

interface HeroProps {
  backgroundImage?: string;
}

export default function Hero({ backgroundImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" }: HeroProps) {
  const [scrollRatio, setScrollRatio] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const { top, height } = heroRef.current.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, -top / (height * 0.6)));
      setScrollRatio(ratio);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const blur = Math.max(0, 12 - scrollRatio * 14);
  const scale = 1 + scrollRatio * 0.06;
  const opacity = Math.max(0, 1 - scrollRatio * 1.2);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-primary-900"
    >
      {/* Background image with blur + scale */}
      <div
        className="absolute inset-0 z-0 will-change-transform pointer-events-none"
        style={{
          transform: `scale(${scale})`,
          filter: `blur(${blur}px)`,
          transition: 'filter 0.05s linear',
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/70 via-primary-900/50 to-primary-900/80" />
      </div>

      {/* Hero content */}
      <div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12"
        style={{ opacity }}
      >
        <div className="flex min-h-svh flex-col items-center justify-center pb-28 pt-24 text-center sm:pb-32 sm:pt-28 lg:pb-36 lg:pt-32">
          <p className="mb-6 font-body text-xs font-light uppercase tracking-[0.28em] text-secondary-500 sm:mb-8 sm:text-xs">
            Strategic Advisory
          </p>

          <h1 className="mb-6 font-display text-[clamp(2.75rem,12vw,7.5rem)] font-light leading-[0.9] text-white text-balance sm:mb-8">
            Clarity
            <br />
            <em className="italic text-secondary-400">Through</em>
            <br />
            Complexity
          </h1>

          <p className="mb-10 max-w-2xl font-body text-sm font-light leading-relaxed text-white/55 sm:mb-12 sm:text-base md:text-lg">
            A strategic investment and industrial development consultancy firm specializing in
            Special Economic Zones, cross-border investments, and sustainable
            industrialization in Africa.
          </p>

          <div className="flex w-full max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg">Explore Opportunities</Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" borderClass="border-secondary-500" className="text-primary-50 hover:bg-accent-500 hover:border-none hover:text-primary-900" size="lg">Start a Conversation</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8"
        style={{ opacity: Math.max(0, 1 - scrollRatio * 4) }}
      >
        <span className="font-body text-xs font-light uppercase tracking-[0.22em] text-white/30 sm:text-xs">
          Scroll
        </span>
        <LuArrowDown size={14} className="text-white/30 animate-bounce" />
      </div>
    </section>
  );
}
