import type { IconType } from 'react-icons';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

import Logo from './logo.component.tsx';

const linkGroups = [
  ['ESG Framework', 'Legal Notice'],
  ['Privacy Policy', 'Nairobi Office'],
] as const;

const socialLinks: { label: string; href: string; Icon: IconType }[] = [
  { label: 'LinkedIn', href: '#', Icon: FaLinkedinIn },
  { label: 'X', href: '#', Icon: FaXTwitter },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-primary-900 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary-500/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="max-w-xl space-y-6">
            <Logo to="/" variant="footer" />
            <p className="max-w-lg text-sm leading-7 text-primary-200 sm:text-base">
              Strategic advisory for leaders shaping resilient, future-ready businesses across East Africa and beyond.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary-400/60 hover:bg-secondary-500 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:ring-offset-2 focus:ring-offset-primary-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-12">
            {linkGroups.map((group, groupIndex) => (
              <ul key={groupIndex} className="space-y-4">
                {group.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-sm tracking-wide text-primary-300 transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-4"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-primary-950/40">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
          <p className="text-xs leading-relaxed tracking-wide text-primary-300 sm:text-sm">
            © {currentYear} Veritas Crest Consulting. Headquartered in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}