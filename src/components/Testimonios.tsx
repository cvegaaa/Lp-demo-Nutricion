import { siteConfig } from '@/data/siteConfig';

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-clay-600 font-medium">Experiencias reales</p>
          <h2 className="mt-4 text-3xl lg:text-5xl text-forest-900 text-balance">
            Lo que dicen quienes ya cambiaron su relación con la comida.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.testimonios.map((t) => (
            <figure
              key={t.nombre}
              className="flex flex-col rounded-3xl bg-white/80 border border-forest-100 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 text-clay-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3 6.3 7 .9-5 4.8 1.2 7L12 17.8 5.8 21l1.2-7-5-4.8 7-.9z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 text-lg text-forest-900 font-serif leading-relaxed flex-1">
                “{t.texto}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-forest-100">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-forest-600 text-cream-50 font-serif text-base">
                    {t.nombre.charAt(0)}
                  </span>
                  <div>
                    <p className="font-medium text-forest-900">{t.nombre}</p>
                    <p className="text-xs text-forest-800/60">{t.contexto}</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-forest-800/55">
          Testimonios de ejemplo — se reemplazan con reseñas reales del negocio.
        </p>
      </div>
    </section>
  );
}
