# Centro de Nutrición — Plantilla de landing page

Plantilla de demostración genérica para el sector **nutrición**. Lista para clonar,
personalizar y desplegar para un negocio real de este rubro.

## Qué es

Una landing page de una sola vista (single-page) con las secciones típicas de un
centro de nutrición: presentación, problema/solución, proceso, servicios,
testimonios y llamada a la acción con contacto.

Toda la información del negocio está centralizada en un único archivo:

```
src/data/siteConfig.ts
```

## Cómo personalizarla para un cliente real

1. Edita únicamente `src/data/siteConfig.ts`:
   - `nombre_generico`: nombre del negocio real.
   - `eslogan` y `propuesta_valor`: mensajes del negocio.
   - `servicios`: servicios reales que ofrece.
   - `proceso`: pasos del proceso real.
   - `testimonios`: reseñas reales (borra el aviso de "ejemplo" cuando lo hagas).
   - `datos_contacto`: teléfono, WhatsApp, email, dirección y horario reales.
2. Reemplaza el favicon en `public/favicon.svg` si quieres.
3. Ajusta la paleta y la tipografía en `tailwind.config.js` y `src/index.css`
   si la identidad de marca del cliente lo requiere.

## Cómo desplegarla

Requisitos: Node.js 18 o superior.

```bash
npm install      # instalar dependencias
npm run dev      # entorno local en http://localhost:5173
npm run build    # genera la carpeta dist/ lista para producción
```

Despliega la carpeta `dist/` en cualquier hosting estático:

- **Vercel / Netlify**: conecta el repositorio, framework "Vite", comando de
  build `npm run build`, carpeta de salida `dist`.
- **Cloudflare Pages / GitHub Pages**: sube el contenido de `dist/`.

## Estructura del proyecto

```
src/
├── App.tsx                  # Ensambla todas las secciones
├── main.tsx                 # Punto de entrada
├── index.css                # Estilos base + tipografía
├── data/
│   └── siteConfig.ts        # Toda la información del negocio (editar aquí)
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── ProblemaSolucion.tsx
    ├── Proceso.tsx
    ├── Servicios.tsx
    ├── Testimonios.tsx
    ├── Contacto.tsx
    └── Footer.tsx
```
