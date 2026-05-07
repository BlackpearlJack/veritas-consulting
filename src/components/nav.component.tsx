import {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {LuMenu, LuX} from 'react-icons/lu';

import Button from './button.component.tsx';
import Logo from './logo.component.tsx';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Contact',
    href: '/contact',
  }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const baseNavClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out';
  const scrolledClasses = 'bg-primary-900/95 backdrop-blur-md py-4';
  const defaultClasses = isHome ? 'bg-transparent py-7' : 'bg-primary-900 py-7';

  const navClassName = `${baseNavClasses} ${scrolled ? scrolledClasses : defaultClasses}`;

  return (
    <nav className={navClassName}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Logo to="/" variant="nav"/>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.href}
                className={({isActive}) =>
                  `text-sm tracking-widest uppercase transition-colors duration-300 font-body font-light ${
                    isActive ? 'text-secondary-400' : 'text-white hover:text-accent-200'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:inline-flex">
          <Button size="md">Get Started</Button>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <LuX size={22}/> : <LuMenu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-primary-900/98 backdrop-blur-md`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.href}
                onClick={() => setOpen(false)}
                className={({isActive}) =>
                  `text-sm tracking-widest uppercase transition-colors font-light ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-block text-sm font-medium tracking-widest uppercase text-primary-900 bg-secondary-500 px-5 py-2.5"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}