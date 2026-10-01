export interface SegmentData {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  keyAttribute: string;
  weights: {
    W_C: number;
    W_O: number;
    W_E: number;
    W_H: number;
  };
  verification: string;
  pricingModel: string;
}

export const SEGMENTS_DATA: SegmentData[] = [
  {
    id: 'uhnw_executive',
    name: 'UHNW Executive',
    icon: '👑',
    tagline: 'Máxima discreción, protocolo de seguridad, disponibilidad para viajes internacionales',
    keyAttribute: 'Discreción, protocolo, ciberseguridad, pasaporte abierto.',
    weights: { W_C: 20, W_O: 40, W_E: 20, W_H: 20 },
    verification: 'Antecedentes internacionales, toxicológico, NDA estricto.',
    pricingModel: '$2,500 - $5,000 USD Fee por colocación + Membresía VIP.',
  },
  {
    id: 'latino_traditional',
    name: 'Tradicional Latino',
    icon: '❤️',
    tagline: 'Calidez materna, apego cultural, cocina reconfortante e idioma español nativo',
    keyAttribute: 'Calidez materna, cocina reconfortante, idioma español, modales.',
    weights: { W_C: 45, W_O: 20, W_E: 25, W_H: 10 },
    verification: 'Verificación de referencias de hogar, historial de salud.',
    pricingModel: 'Fee de colocación (1.5 meses de sueldo) + Suscripción.',
  },
  {
    id: 'postpartum_doula',
    name: 'Posparto & Doula',
    icon: '👶',
    tagline: 'Cuidado especializado en la "cuarentena", asesoría en lactancia y baños tradicionales',
    keyAttribute: 'Manejo de cuarentena, lactancia, baños tradicionales, apoyo nocturno.',
    weights: { W_C: 20, W_O: 20, W_E: 20, W_H: 40 },
    verification: 'Certificación en RCP pediátrico, certificación en lactancia.',
    pricingModel: 'Paquetes cerrados por semanas ($1,500 - $6,000 USD).',
  },
  {
    id: 'senior_companion',
    name: 'Senior Companion',
    icon: '🌿',
    tagline: 'Acompañamiento digno, estimulación cognitiva y preservación de memoria',
    keyAttribute: 'Estimulación cognitiva, preservación de memoria, acompañamiento.',
    weights: { W_C: 25, W_O: 10, W_E: 45, W_H: 20 },
    verification: 'Certificación gerontológica básica, prueba de empatía.',
    pricingModel: 'Bolsa de horas mensual / Suscripción de Care Management.',
  },
];

export interface NicheInfo {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  targetAudience: string;
  keyRequirements: string[];
  verificationLevel: string;
  pricingInfo: string;
  accentColor: string;
}

export const NICHES: NicheInfo[] = [
  {
    id: 'uhnw_executive',
    name: 'UHNW Executive Care',
    icon: '👑',
    tagline: 'Discreción, protocolo de estado, ciberseguridad y viajes internacionales',
    description: 'Servicio exclusivo para familias de alto perfil, ejecutivos y diplomáticos que requieren personal de cuidado con pasaporte abierto y protocolo estricto.',
    targetAudience: 'Familias Executive & VIP',
    keyRequirements: ['NDA Estricto', 'Verificación Internacional', 'Inglés Nativo / Bilingüe', 'Disponibilidad para viajar'],
    verificationLevel: 'Sello ZIEL Black VIP',
    pricingInfo: '$2,500 - $5,000 USD Fee de Colocación',
    accentColor: '#0B1E36',
  },
  {
    id: 'latino_traditional',
    name: 'Tradicional Latino & Diáspora',
    icon: '❤️',
    tagline: 'Calidez materna, apego cultural, idioma español y hábitos del hogar latino',
    description: 'Conectamos a familias latinas en EE.UU. o Latinoamérica con nannies con valores compartidos, sazón tradicional y transmisión del idioma.',
    targetAudience: 'Diáspora Latina & Familias Bilingües',
    keyRequirements: ['Sazón Tradicional', 'Español Nativo', 'Valores de Familia', 'Verificación de Antecedentes'],
    verificationLevel: 'Sello ZIEL Tradición',
    pricingInfo: '1.5 Meses de Sueldo Fee',
    accentColor: '#C86D51',
  },
  {
    id: 'postpartum_doula',
    name: 'Posparto, Doula & Maternidad',
    icon: '👶',
    tagline: 'Cuidado especializado en la "cuarentena", lactancia y baños tradicionales',
    description: 'Atención integral especializada durante los primeros 100 días de vida del recién nacido y recuperación de la madre.',
    targetAudience: 'Madres Primerizas & Familias en Posparto',
    keyRequirements: ['Certificación RCP Pediátrico', 'Asesoría en Lactancia', 'Cuarentena Tradicional', 'Soporte Nocturno'],
    verificationLevel: 'Sello ZIEL Clinique',
    pricingInfo: '$1,500 - $6,000 USD Paquete',
    accentColor: '#D9A0A0',
  },
  {
    id: 'senior_companion',
    name: 'Acompañamiento Senior Digno',
    icon: '🌿',
    tagline: 'Estimulación cognitiva, preservación de la memoria y empatía gerontológica',
    description: 'Acompañantes gerontológicos enfocados en autonomía, estimulación de memoria y dignificación de la etapa dorada.',
    targetAudience: 'Familias con Adultos Mayores',
    keyRequirements: ['Certificación Gerontológica', 'Estimulación Cognitiva', 'Acompañamiento Empático', 'Manejo de Medicamentos'],
    verificationLevel: 'Sello ZIEL Senior',
    pricingInfo: 'Bolsa de Horas o Membresía Mensual',
    accentColor: '#8A9A86',
  },
];

export interface Candidate {
  id: string;
  name: string;
  nicheId: string;
  certification: string;
  icaScore: number;
  culturalScore: number;
  emotionalScore: number;
  operationalScore: number;
  skillsScore: number;
  experienceYears: number;
  languages: string[];
  pros: string[];
  cons: string[];
  interviewQuestion: string;
  hourlyRate: number;
}

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 'cand-1',
    name: 'María G. (Sello Elite)',
    nicheId: 'latino_traditional',
    certification: 'Sello Elite Edupreneur',
    icaScore: 96.5,
    culturalScore: 98.0,
    emotionalScore: 95.0,
    operationalScore: 94.0,
    skillsScore: 100.0,
    experienceYears: 8,
    languages: ['Español (Nativo)', 'Inglés (Fluido)'],
    pros: [
      'Especialista en nutrición tradicional posparto y caldos reconfortantes.',
      'Cero uso de pantallas en rutinas infantiles comprobado.',
      'Bilingüe nativo español con inglés fluido para apoyo escolar.',
    ],
    cons: ['Prefiere modalidad externa sin pernocta los fines de semana.'],
    interviewQuestion: '¿Cómo gestionas la introducción de límites de sueño cuando los padres tienen horarios de trabajo extendidos?',
    hourlyRate: 28,
  },
  {
    id: 'cand-2',
    name: 'Sofia V. (Doula Certificada)',
    nicheId: 'postpartum_doula',
    certification: 'Doula Posparto & Lactancia',
    icaScore: 94.2,
    culturalScore: 92.0,
    emotionalScore: 96.0,
    operationalScore: 91.0,
    skillsScore: 98.0,
    experienceYears: 6,
    languages: ['Español', 'Inglés'],
    pros: [
      'Certificada en masajes posparto y baños de hierbas tradicionales.',
      'Amplia experiencia en recién nacidos de alto riesgo y gemelares.',
    ],
    cons: ['Requiere coordinación previa para turnos nocturnos de más de 12 horas.'],
    interviewQuestion: '¿Cuál es tu protocolo cuando una madre experimenta episodios severos de ' + 'baby blues' + ' o ansiedad?',
    hourlyRate: 35,
  },
  {
    id: 'cand-3',
    name: 'Elena R. (Protocolo VIP)',
    nicheId: 'uhnw_executive',
    certification: 'Sello ZIEL Black VIP',
    icaScore: 98.1,
    culturalScore: 95.0,
    emotionalScore: 99.0,
    operationalScore: 98.0,
    skillsScore: 100.0,
    experienceYears: 12,
    languages: ['Español', 'Inglés Nativo', 'Francés Básico'],
    pros: [
      'Pasaporte de la UE y EE.UU. vigente sin restricciones de viaje.',
      'Entrenamiento en primeros auxilios avanzados y gestión de crisis.',
    ],
    cons: ['Tarifa preferencial para contratos anuales exclusivos.'],
    interviewQuestion: '¿Cómo mantienes la privacidad y la discreción cuando trabajas con esquemas de seguridad y escoltas?',
    hourlyRate: 45,
  },
];
