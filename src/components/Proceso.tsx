import { siteConfig } from '@/data/siteConfig';

export default function Proceso() {
  return (
    <section id="proceso" className="py-20 lg:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-clay-600 font-medium">Cómo funciona</p>
          <h2 className="mt-4 text-3xl lg:text-5xl text-forest-900 text-balance">
            Un proceso claro, de principio a fin.
          </h2>
          <p className="mt-5 text-lg text-forest-800/75 leading-relaxed">
            Sabes exactamente qué esperar en cada paso. Nada de promesas vagas ni planes que te entregan y olvidan.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-10">
          {siteConfig.proceso.map((p, i) => (
            <li
              key={p.paso}
              className="relative rounded-3xl bg-white/70 border border-forest-100 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl text-clay-500/90 leading-none">{p.paso}</span>
                <span className="h-px flex-1 bg-forest-200" />
              </div>
              <h3 className="mt-5 text-2xl text-forest-900">{p.titulo}</h3>
              <p className="mt-3 text-forest-800/75 leading-relaxed">{p.descripcion}</p>

              {i < siteConfig.proceso.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute top-12 -right-5 text-clay-400 text-2xl"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
