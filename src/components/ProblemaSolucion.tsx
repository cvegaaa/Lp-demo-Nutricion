import { siteConfig } from '@/data/siteConfig';

export default function ProblemaSolucion() {
  return (
    <section className="relative py-20 lg:py-28 bg-forest-800 text-cream-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #bbd6c6 0, transparent 40%), radial-gradient(circle at 80% 60%, #e89b5c 0, transparent 35%)',
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-clay-400 font-medium">El punto de partida</p>
        <h2 className="mt-5 text-3xl lg:text-5xl text-cream-50 text-balance">
          Las dietas de internet no conocen tu cuerpo.
        </h2>
        <p className="mt-6 text-lg lg:text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
          {siteConfig.problema_tipo}
        </p>
        <div className="mt-10 inline-block">
          <span className="text-clay-400 text-2xl">↓</span>
        </div>
        <p className="mt-6 text-xl lg:text-2xl text-cream-50 max-w-3xl mx-auto leading-relaxed font-serif">
          {siteConfig.solucion}
        </p>
      </div>
    </section>
  );
}
