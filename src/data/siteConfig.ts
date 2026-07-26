// Configuración centralizada del sitio.
// Para adaptar esta demo a un cliente real, edita ÚNICAMENTE este archivo.

export interface Servicio {
  titulo: string;
  descripcion: string;
  detalles: string[];
}

export interface Testimonio {
  nombre: string;
  contexto: string;
  texto: string;
}

export interface PasoProceso {
  paso: string;
  titulo: string;
  descripcion: string;
}

export interface ConfigSitio {
  sector: string;
  nombre_generico: string;
  eslogan: string;
  propuesta_valor: string;
  servicios: Servicio[];
  problema_tipo: string;
  solucion: string;
  proceso: PasoProceso[];
  cta_principal: string;
  testimonios: Testimonio[];
  datos_contacto: {
    telefono: string;
    whatsapp: string;
    direccion: string;
    horario: string;
    email: string;
  };
}

export const siteConfig: ConfigSitio = {
  sector: 'nutrición',
  nombre_generico: 'Centro de Nutrición',
  eslogan: 'Comer mejor, no comer menos',
  propuesta_valor:
    'Nutrición personalizada basada en tu cuerpo, tu rutina y tus metas. Sin dietas extremas: hábitos que sí se mantienen.',
  problema_tipo:
    'La mayoría sigue dietas genéricas de internet que no se adaptan a su cuerpo ni a su día a día, y las abandona en semanas.',
  solucion:
    'Aquí no hay recetas mágicas ni planes copiados. Tu alimentación se construye a tu medida, con acompañamiento real y ajustes constantes para que los cambios de verdad se queden.',
  servicios: [
    {
      titulo: 'Consulta nutricional',
      descripcion:
        'Una primera valoración completa para entender tu historia, tus hábitos y tus objetivos reales.',
      detalles: ['Evaluación de composición corporal', 'Análisis de hábitos actuales', 'Definición de metas alcanzables'],
    },
    {
      titulo: 'Plan de alimentación personalizado',
      descripcion:
        'Un plan diseñado para tu cuerpo y tu rutina, con opciones reales que puedes sostener en el día a día.',
      detalles: ['Menús flexibles por semana', 'Adaptado a tus preferencias', 'Listas de compras sencillas'],
    },
    {
      titulo: 'Seguimiento y acompañamiento',
      descripcion:
        'Ajustes constantes según tu evolución. No te dejamos solo: medimos avances y corregimos el rumbo.',
      detalles: ['Sesiones de seguimiento mensual', 'Ajustes según tus resultados', 'Soporte entre sesiones'],
    },
    {
      titulo: 'Nutrición deportiva',
      descripcion:
        'Optimiza tu rendimiento, tu recuperación y tu composición corporal con estrategias para tu deporte.',
      detalles: ['Estrategia de hidratación', 'Nutrición pre y post entrenamiento', 'Planificación por temporada'],
    },
    {
      titulo: 'Nutrición clínica',
      descripcion:
        'Acompañamiento para condiciones como control de peso, resistencia a la insulina o colesterol elevado.',
      detalles: ['Planes con enfoque clínico', 'Coordinación con tu médico', 'Seguimiento de indicadores'],
    },
  ],
  proceso: [
    {
      paso: '01',
      titulo: 'Primera consulta',
      descripcion: 'Conocemos tu historia, tus hábitos y lo que realmente quieres lograr. Sin juicios.',
    },
    {
      paso: '02',
      titulo: 'Tu plan a medida',
      descripcion: 'Diseñamos un plan de alimentación que encaja con tu rutina, no al revés.',
    },
    {
      paso: '03',
      titulo: 'Seguimiento real',
      descripcion: 'Medimos avances, ajustamos y te acompañamos hasta que los cambios se vuelvan hábito.',
    },
  ],
  cta_principal: 'Agenda tu consulta',
  testimonios: [
    {
      nombre: 'Laura M.',
      contexto: 'Cliente de ejemplo',
      texto: 'Por fin encontré un enfoque que no me hizo sentir culpable. Bajé de peso comiendo cosas que disfruto.',
    },
    {
      nombre: 'Andrés R.',
      contexto: 'Cliente de ejemplo',
      texto: 'El seguimiento marcó la diferencia. No fue un plan que me entregaron y me dejaron solo con él.',
    },
    {
      nombre: 'Camila T.',
      contexto: 'Cliente de ejemplo',
      texto: 'Me ayudaron a entender mi cuerpo. Ahora tengo hábitos que mantengo sin esfuerzo.',
    },
  ],
  datos_contacto: {
    telefono: '+57 300 000 0000',
    whatsapp: '+57 300 000 0000',
    direccion: 'Ciudad, Colombia',
    horario: 'Lunes a viernes, 8am - 6pm',
    email: 'contacto@centrodenutricion.co',
  },
};
