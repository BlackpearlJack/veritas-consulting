import type {ReactNode} from 'react';
import {MdDownload} from 'react-icons/md';
import type {StatItem} from '@/home/types';
import {Badge, Button} from "@/components";


interface CompanyProfileProps {
  imageUrl: string;
  imageAlt: string;
  quote: string;
  thesisLabel: string;
  mainHeading: ReactNode;
  description: string;
  stats: StatItem[];
  reportButtonText?: string;
  onDownloadClick?: () => void;
}

export function CompanyProfile({
                                 imageUrl,
                                 imageAlt,
                                 quote,
                                 thesisLabel,
                                 mainHeading,
                                 description,
                                 stats,
                                 reportButtonText = 'Download 2024 Report',
                                 onDownloadClick,
                               }: CompanyProfileProps) {
  return (
    <section className="bg-primary-900 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Image Section */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="aspect-square border border-accent-500/30 p-5 relative shadow-lg shadow-accent-500/10 hover:shadow-accent-500/20 transition-shadow duration-300">
              <img
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                alt={imageAlt}
                src={imageUrl}
              />
              <Badge className="absolute -bottom-8 -right-8" quote={quote}/>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-white">
            <span className="text-secondary-500 tracking-[0.4em] uppercase text-xs mb-6 block">
              {thesisLabel}
            </span>
            <h2 className="font-display text-6xl lg:text-5xl mt-4 mb-10 leading-tight">
              {mainHeading}
            </h2>
            <div className="space-y-10 font-body">
              <p className="text-white/80 leading-relaxed text-lg max-w-xl">
                {description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-4">
                    <div className="w-8 h-0.5 bg-accent-500"></div>
                    <h4 className="text-white font-headline-sm text-xl">{stat.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{stat.description}</p>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <div className="pt-8">
                {onDownloadClick ? (
                  <Button
                    variant="outline"
                    borderClass="border-accent-500"
                    size="lg"
                    onClick={onDownloadClick}
                    className="text-accent-500 hover:border-accent-400 hover:bg-accent-500 hover:text-primary-900"
                  >
                    {reportButtonText}
                    <MdDownload className="text-sm"/>
                  </Button>
                ) : (
                  // Fallback: provide a downloadable report link if no handler is supplied
                  <a
                    href="/Veritas-Crest-2024-Report.pdf"
                    download="Veritas-Crest-2024-Report.pdf"
                    className="cursor-pointer rounded-none transition-all font-medium inline-flex gap-2 items-center justify-center px-8 py-4 border border-accent-500 text-accent-500 uppercase tracking-[0.18em] shadow-md shadow-accent-500/10 hover:shadow-lg hover:shadow-accent-500/20 hover:border-accent-400 hover:bg-accent-500 hover:text-primary-900"
                  >
                    {reportButtonText}
                    <MdDownload className="text-sm"/>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
