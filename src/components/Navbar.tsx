import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';

const enlaces = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

interface NavbarProps {
  mobileOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Navbar({ mobileOpen, onToggle, onClose }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sobre el hero (oscuro): barra transparente con texto claro.
  // Al desplazar: fondo claro sólido con texto oscuro.
  const headerClass = scrolled
    ? 'bg-cream-100/90 backdrop-blur-md border-b border-forest-100'
    : 'bg-transparent border-b border-transparent';

  const linkClass = scrolled
    ? 'text-forest-800/80 hover:text-forest-700'
    : 'text-cream-50/85 hover:text-cream-50';

  const logoTextClass = scrolled ? 'text-forest-800' : 'text-cream-50';
  const logoBoxClass = scrolled ? 'bg-forest-600 text-cream-50' : 'bg-cream-50/15 text-cream-50 border border-cream-50/20';

  const ctaClass = scrolled
    ? 'bg-forest-600 text-cream-50 hover:bg-forest-700'
    : 'bg-clay-500 text-white hover:bg-clay-600';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerClass}`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group" onClick={onClose}>
          <span className={`grid place-items-center w-10 h-10 rounded-xl font-serif text-xl shadow-sm transition-all group-hover:scale-105 ${logoBoxClass}`}>
            C
          </span>
          <span className={`font-serif text-xl tracking-tight transition-colors ${logoTextClass}`}>
            {siteConfig.nombre_generico}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                className={`text-sm transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-clay-500 hover:after:w-full after:transition-all ${linkClass}`}
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow-md transition-all ${ctaClass}`}
          >
            {siteConfig.cta_principal}
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={onToggle}
          className={`md:hidden grid place-items-center w-10 h-10 rounded-lg transition-colors ${scrolled ? 'text-forest-800 hover:bg-forest-50' : 'text-cream-50 hover:bg-cream-50/10'}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-cream-100 border-t border-forest-100 px-6 py-5">
          <ul className="flex flex-col gap-4">
            {enlaces.map((e) => (
              <li key={e.href}>
                <a href={e.href} onClick={onClose} className="block text-forest-800 py-1 text-base">
                  {e.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={onClose}
                className="mt-2 inline-flex w-full justify-center items-center rounded-full bg-forest-600 px-5 py-3 text-sm font-medium text-cream-50"
              >
                {siteConfig.cta_principal}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
