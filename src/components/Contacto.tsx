import { siteConfig } from '@/data/siteConfig';

function buildWhatsappLink(numero: string) {
  const limpio = numero.replace(/[^0-9]/g, '');
  const mensaje = encodeURIComponent(`Hola, quiero ${siteConfig.cta_principal.toLowerCase()}.`);
  return `https://wa.me/${limpio}?text=${mensaje}`;
}

export default function Contacto() {
  const { datos_contacto } = siteConfig;
  const whatsappLink = buildWhatsappLink(datos_contacto.whatsapp);

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-forest-700 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-clay-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-forest-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-clay-400 font-medium">Hablemos</p>
          <h2 className="mt-4 text-4xl lg:text-5xl text-cream-50 text-balance">
            {siteConfig.cta_principal}, hoy.
          </h2>
          <p className="mt-5 text-lg text-cream-200/85 leading-relaxed max-w-lg">
            Cuéntanos tu objetivo y te ayudamos a construir un plan realista. Sin compromiso, sin promesas vacías.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-7 py-4 text-base font-medium text-white shadow-md hover:bg-clay-600 hover:-translate-y-0.5 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.3-.5c.1-.1 0-.3 0-.4s-.5-1.3-.7-1.7-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 1.9 4.5 4.5 0 0 0 .9 2.4 10.3 10.3 0 0 0 4 3.5c.6.3 1 .4 1.4.5a3.4 3.4 0 0 0 1.5.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1-.2-.2-.4-.3z" />
              </svg>
              Escribir por WhatsApp
            </a>
            <a
              href={`tel:${datos_contacto.telefono.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-200/40 px-7 py-4 text-base font-medium text-cream-50 hover:bg-forest-600 transition-all"
            >
              Llamar ahora
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-cream-50 p-8 lg:p-10 shadow-xl">
          <h3 className="text-2xl text-forest-900">Datos de contacto</h3>
          <dl className="mt-6 space-y-5">
            {[
              ['Teléfono', datos_contacto.telefono],
              ['WhatsApp', datos_contacto.whatsapp],
              ['Email', datos_contacto.email],
              ['Dirección', datos_contacto.direccion],
              ['Horario', datos_contacto.horario],
            ].map(([label, valor]) => (
              <div key={label} className="flex items-start justify-between gap-6 border-b border-forest-100 pb-4 last:border-0">
                <dt className="text-sm text-forest-800/60">{label}</dt>
                <dd className="text-forest-900 font-medium text-right">{valor}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-forest-800/50">
            Datos de ejemplo — se reemplazan con la información real del negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
