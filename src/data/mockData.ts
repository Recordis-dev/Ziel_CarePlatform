export interface NicheConfig {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  targetAttribute: string;
  weights: {
    cultural: number;
    emotional: number;
    operational: number;
    skills: number;
  };
  requiredVerification: string[];
  pricingModel: string;
  heroImage: string;
  keyFeatures: string[];
}

export const NICHES: Record<string, NicheConfig> = {
  latino_traditional: {
    id: 'latino_traditional',
    name: 'Tradicional Latino & Diáspora',
    slug: 'latino-tradicional',
    subtitle: 'Calidez materna, herencia cultural y el reconfortante Efecto Abuela',
    description: 'Enfocado en familias que valoran el familismo, la cocina reconfortante, el idioma español, costumbres tradicionales y el soporte cariñoso e integral.',
    targetAttribute: 'Calidez materna, cocina reconfortante, idioma español nativo, modales de respeto.',
    weights: { cultural: 0.45, emotional: 0.30, operational: 0.15, skills: 0.10 },
    requiredVerification: ['Verificación de referencias de hogar', 'Historial médico & salud completo', 'Carta de buenas costumbres'],
    pricingModel: 'Fee de colocación (1.5 meses de sueldo) + Suscripción de acompañamiento',
    heroImage: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80',
    keyFeatures: ['Efecto Abuela & Nutrición Tradicional', 'Estimulación en Español Nativo', 'Rutinas de Tranquilidad Familiar', 'Soporte Posparto & Cuarentena']
  },
  uhnw_executive: {
    id: 'uhnw_executive',
    name: 'UHNW / VIP Executive',
    slug: 'uhnw-executive',
    subtitle: 'Discreción absoluta, protocolo diplomático y movilidad transfronteriza',
    description: 'Diseñado para ejecutivos, fundadores y Family Offices que exigen confidencialidad (NDA), ciberseguridad, viajes internacionales y personal certificado ZIEL Protocol.',
    targetAttribute: 'Discreción, protocolo de alto nivel, ciberseguridad, pasaporte abierto y multilingüismo.',
    weights: { cultural: 0.20, emotional: 0.20, operational: 0.40, skills: 0.20 },
    requiredVerification: ['Antecedentes internacionales (Interpol/FBI)', 'Examen toxicológico de 10 paneles', 'Firma de NDA estricto'],
    pricingModel: '$2,500 - $5,000 USD Fee por colocación + Membresía VIP Concierge',
    heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    keyFeatures: ['Ciberseguridad y Protección NDA', 'Pasaporte Abierto & Cobertura Global', 'Protocolo Diplomático de Residencia', 'Asignación de Sustitución en <24h']
  },
  postpartum_doula: {
    id: 'postpartum_doula',
    name: 'Posparto, Doula & Maternidad',
    slug: 'postpartum-doula',
    subtitle: 'Acompañamiento clínico y emocional para el reposo y la lactancia materna',
    description: 'Especializado en el cuidado de la madre e infante durante la "cuarentena", asistencia en lactancia, curaciones y descanso nocturno sostenido.',
    targetAttribute: 'Manejo de reposo/cuarentena, soporte en lactancia materna, curaciones tradicionales y apoyo nocturno.',
    weights: { cultural: 0.20, emotional: 0.25, operational: 0.15, skills: 0.40 },
    requiredVerification: ['Certificación RCP pediátrico', 'Certificación en Lactancia IBCLC/Doula', 'Validación clínica de salud'],
    pricingModel: 'Paquetes cerrados por semanas ($1,500 - $6,000 USD)',
    heroImage: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80',
    keyFeatures: ['Asistencia Nocturna para Lactancia', 'Preparación de Sopas & Caldos Restaurativos', 'Baños Tradicionales Posparto', 'Cuidado de Vínculo Seguro']
  },
  senior_companion: {
    id: 'senior_companion',
    name: 'Acompañamiento Senior Digno',
    slug: 'senior-companion',
    subtitle: 'Estimulación cognitiva, preservación de memoria y autonomía con dignidad',
    description: 'Atención especializada para adultos mayores con enfoque en empatía, compañía de alta frecuencia, administración segura de rutinas y paseos.',
    targetAttribute: 'Estimulación cognitiva, preservación de la memoria, empatía gerontológica y acompañamiento.',
    weights: { cultural: 0.25, emotional: 0.45, operational: 0.15, skills: 0.15 },
    requiredVerification: ['Certificación gerontológica básica', 'Evaluación de coeficiente empático EQ', 'Antecedentes laborales y legales'],
    pricingModel: 'Bolsa de horas mensual / Suscripción de Care Management',
    heroImage: 'https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?auto=format&fit=crop&w=800&q=80',
    keyFeatures: ['Ejercicios de Neuro-Estimulación', 'Preservación de Historias & Memoria', 'Acompañamiento a Citas & Actividades', 'Monitoreo de Bienestar Digital']
  }
};

export const MOCK_CANDIDATES = [
  {
    id: 'c4a3b8e1',
    niche: 'latino_traditional',
    masked_name: 'María G. (Certificación ZIEL Elite)',
    real_name: 'María Gutiérrez',
    isMasked: false,
    ica_score: 96.80,
    breakdown: { cultural: 98.00, eq: 95.00, operational: 94.00, skills: 100.00 },
    pillars: ["Contención (Paz)", "Soporte Nocturno (Paciencia)", "Nutrición Reconfortante"],
    agent_synthesis: {
      pros: [
        "Profesional clínica con especialidad en nutrición posparto y apego seguro.",
        "Filosofía 'Cero Pantallas' y estimulación cognitiva en español nativo.",
        "Inglés fluido para acompañamiento y logística escolar."
      ],
      cons: ["Disponibilidad enfocada en modalidad externa; viajes sujetos a planificación."],
      interview_question: "¿Cómo estructura una transición serena hacia el descanso nocturno cuando el entorno familiar mantiene un ritmo acelerado?"
    },
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
    experience_years: 12,
    location: "Miami, FL (Con disponibilidad de traslado)",
    certifications: ["RCP Pediátrico Avanzado", "Nutrición Tradicional Posparto", "Montessori Toddler"]
  },
  {
    id: 'd5b4c9f2',
    niche: 'latino_traditional',
    masked_name: 'Carmen R. (Especialista en Maternidad)',
    real_name: 'Carmen Rodríguez',
    isMasked: false,
    ica_score: 91.20,
    breakdown: { cultural: 94.00, eq: 92.00, operational: 88.00, skills: 90.00 },
    pillars: ["Desarrollo Temprano (Alegría)", "Templanza", "Compromiso Absoluto"],
    agent_synthesis: {
      pros: [
        "Profundo entendimiento del reposo materno y la recuperación integral.",
        "Trayectoria impecable de 12 años asistiendo a familias biculturales en EE.UU."
      ],
      cons: ["Requiere apoyo ocasional de herramientas de traducción para terminología médica compleja en inglés."],
      interview_question: "¿Qué prácticas de bienestar implementa para garantizar no solo la salud del infante, sino el sosiego mental de la madre?"
    },
    avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
    experience_years: 10,
    location: "Houston, TX",
    certifications: ["Doula Posparto", "Estimulación Temprana"]
  },
  {
    id: 'x1y2z3',
    niche: 'uhnw_executive',
    masked_name: 'Perfil Reservado #904 (ZIEL Protocol)',
    real_name: 'Elena Vance',
    isMasked: true,
    ica_score: 98.40,
    breakdown: { cultural: 92.00, eq: 98.00, operational: 100.00, skills: 100.00 },
    pillars: ["Protocolo Diplomático", "Ciberseguridad Operativa", "Movilidad Internacional"],
    agent_synthesis: {
      pros: [
        "Experiencia previa con familias gubernamentales y CEOs multinacionales.",
        "Pasaporte EU/US activo, disponibilidad inmediata para reubicación y viajes frecuentes.",
        "Formación en defensa preventiva y manejo de situaciones confidenciales."
      ],
      cons: ["Tarifa superior al promedio de mercado por nivel de especialización ZIEL Protocol."],
      interview_question: "¿Cómo gestiona la discrepancia entre las directrices de seguridad del Chief of Staff y los deseos espontáneos de la familia?"
    },
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    experience_years: 15,
    location: "Nueva York / Londres / Madrid",
    certifications: ["Protocolo ZIEL VIP", "Primeros Auxilios Avanzados", "Ciberseguridad Residencial"]
  }
];

export const MODULES_INFO = [
  {
    id: 'afectomatch',
    title: 'Módulo 1: Engine de Matching Afectivo-Cultural (AfectoMatch)',
    submodules: [
      { code: '1.1', name: 'Multi-Nicho Intake Questionnaire', desc: 'Captura dinámica de necesidades según el perfil (UHNW, Tradicional Latino, Posparto, Senior).' },
      { code: '1.2', name: 'Vectorizer & Embeddings Pipeline', desc: 'Conversión de narrativas y psicometría en vectores densos via OpenAI text-embedding-3-large.' },
      { code: '1.3', name: 'Vector Search (pgvector)', desc: 'Ejecución de consultas por distancia coseno combinadas con filtros duros SQL.' },
      { code: '1.4', name: 'LLM RAG Evaluator (LangGraph)', desc: 'Síntesis cualitativa de compatibilidad y generación de reportes ICA con pros, contras y preguntas de entrevista.' }
    ]
  },
  {
    id: 'edupreneur',
    title: 'Módulo 2: Edupreneur Academy & Career Accelerator (EdTech + FinTech)',
    submodules: [
      { code: '2.1', name: 'LMS & Micro-Learning', desc: 'Gestión de cursos en video, audio y quizzes interactivos accesibles desde dispositivos móviles.' },
      { code: '2.2', name: 'Sello Elite Evaluator', desc: 'Módulo de exámenes prácticos y auditoría de competencias (RCP, Montessori, Protocolo UHNW, Nutrición).' },
      { code: '2.3', name: 'ISA Engine (Income Share Agreement)', desc: 'Gestión contractual, firma digital de Acuerdos de Ingresos Compartidos y cálculo de pagos diferidos.' }
    ]
  },
  {
    id: 'trust-safety',
    title: 'Módulo 3: Trust, Safety & Compliance Engine',
    submodules: [
      { code: '3.1', name: 'Background Check Connector', desc: 'Integración con APIs de revisión de antecedentes penales, judicial, crediticio y licencias.' },
      { code: '3.2', name: 'Biometric & NDA Vault', desc: 'Verificación de identidad facial, resguardo encriptado de contratos de confidencialidad (NDA).' },
      { code: '3.3', name: 'Reference Verifier', desc: 'Módulo automatizado de validación de cartas de recomendación mediante encuestas telefónicas/digitales.' }
    ]
  },
  {
    id: 'payroll-logistics',
    title: 'Módulo 4: Payroll, Legal & Cross-Border Logistics',
    submodules: [
      { code: '4.1', name: 'Smart Contract Generator', desc: 'Emisión automática de contratos laborales transfronterizos (adaptados a EE.UU., México, Colombia, España).' },
      { code: '4.2', name: 'Multi-Currency Payment Rail', desc: 'Procesamiento de pagos de nómina, viáticos y comisiones vía Stripe y Wise.' },
      { code: '4.3', name: 'Concierge & Emergency Dispatch', desc: 'Asignación de sustituciones de emergencia en menos de 24 horas con protocolo verificado.' }
    ]
  }
];
