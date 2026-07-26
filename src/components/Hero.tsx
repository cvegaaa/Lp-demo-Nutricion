import { siteConfig } from '@/data/siteConfig';

// Imagen de fondo del hero (Pexels, libre de uso).
const HERO_IMAGE =
  'https://images.pexels.com/photos/1652312/pexels-photo-1652312.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Capa de imagen de fondo con efecto de zoom lento */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Composición de alimentos frescos y saludables"
          className="w-full h-full object-cover animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
        />
        {/* Overlays para garantizar contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-900/60 to-forest-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/75 via-forest-900/30 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 lg:pt-36 w-full">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 border border-cream-50/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-cream-50">
            <span className="w-2 h-2 rounded-full bg-clay-400" />
            {siteConfig.eslogan}
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl text-cream-50 tracking-tight text-balance drop-shadow-sm">
            Tu alimentación, <span className="text-clay-400 italic">a tu medida</span>.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-cream-100/90 max-w-xl leading-relaxed">
            {siteConfig.propuesta_valor}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-7 py-4 text-base font-medium text-white shadow-lg hover:bg-clay-600 hover:-translate-y-0.5 transition-all"
            >
              {siteConfig.cta_principal}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/40 px-7 py-4 text-base font-medium text-cream-50 hover:bg-cream-50/10 transition-all"
            >
              Ver servicios
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ['+500', 'planes entregados*'],
              ['98%', 'satisfacción*'],
              ['1:1', 'acompañamiento'],
            ].map(([valor, label]) => (
              <div key={label}>
                <dt className="font-serif text-3xl text-cream-50">{valor}</dt>
                <dd className="mt-1 text-xs text-cream-200/75 leading-snug">{label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-cream-200/55 max-w-xs">
            *Cifras de ejemplo — se reemplazan con datos reales del negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
