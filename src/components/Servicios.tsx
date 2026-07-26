import { siteConfig } from '@/data/siteConfig';
import type { Servicio } from '@/data/siteConfig';

function ServicioCard({ servicio, index }: { servicio: Servicio; index: number }) {
  return (
    <article
      className="group relative flex flex-col rounded-3xl bg-white/80 border border-forest-100 p-8 shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-forest-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-4">
        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-forest-600 text-cream-50 font-serif text-lg shadow-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="h-px flex-1 bg-forest-100 group-hover:bg-clay-400/40 transition-colors" />
      </div>

      <h3 className="relative mt-6 text-2xl text-forest-900">{servicio.titulo}</h3>
      <p className="relative mt-3 text-forest-800/75 leading-relaxed">{servicio.descripcion}</p>

      <ul className="relative mt-6 space-y-2.5 border-t border-forest-100 pt-5">
        {servicio.detalles.map((d) => (
          <li key={d} className="flex items-start gap-3 text-sm text-forest-800/80">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 text-clay-500 shrink-0"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {d}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-clay-600 font-medium">Lo que ofrecemos</p>
          <h2 className="mt-4 text-3xl lg:text-5xl text-forest-900 text-balance">
            Servicios pensados para tu objetivo.
          </h2>
          <p className="mt-5 text-lg text-forest-800/75 leading-relaxed">
            Acompañamiento en cada etapa, desde la primera valoración hasta el mantenimiento de tus resultados.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.servicios.map((s, i) => (
            <ServicioCard key={s.titulo} servicio={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
