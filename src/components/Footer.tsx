import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-forest-600 text-cream-50 font-serif text-xl">
                C
              </span>
              <span className="font-serif text-xl text-cream-50">{siteConfig.nombre_generico}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
              {siteConfig.eslogan}. {siteConfig.propuesta_valor}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-cream-50">Secciones</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#servicios" className="hover:text-cream-50 transition-colors">Servicios</a></li>
                <li><a href="#proceso" className="hover:text-cream-50 transition-colors">Proceso</a></li>
                <li><a href="#testimonios" className="hover:text-cream-50 transition-colors">Testimonios</a></li>
                <li><a href="#contacto" className="hover:text-cream-50 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-cream-50">Contacto</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>{siteConfig.datos_contacto.telefono}</li>
                <li>{siteConfig.datos_contacto.email}</li>
                <li>{siteConfig.datos_contacto.direccion}</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-cream-50">Horario</p>
              <p className="mt-4 text-sm">{siteConfig.datos_contacto.horario}</p>
            </div>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-forest-700/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-cream-200/60">
            © {new Date().getFullYear()} {siteConfig.nombre_generico}. Demo genérica del sector {siteConfig.sector}.
          </p>
          <p className="text-cream-200/60">
            Demo diseñada por <a href="https://www.vegora.com.co" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:text-clay-400 transition-colors underline-offset-2 hover:underline">Vegora</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
