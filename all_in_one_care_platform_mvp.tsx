import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Heart, GraduationCap, Briefcase, ChevronRight, 
  Star, Brain, CheckCircle, Lock, AlertCircle, FileText, 
  TrendingUp, PlayCircle, Clock, Sparkles, Sun, UserCheck, 
  BookOpen, ArrowRight, Activity, Leaf, Shield
} from 'lucide-react';

const MOCK_MATCHES = {
  latino_traditional: [
    {
      id: 'c4a3b8e1',
      masked_name: 'María G. (Certificación ZIEL Elite)',
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
      avatarUrl: "https://placehold.co/150x150/e7e5e4/44403c?text=MG"
    },
    {
      id: 'd5b4c9f2',
      masked_name: 'Carmen R. (Especialista en Maternidad)',
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
      avatarUrl: "https://placehold.co/150x150/f5f5f4/57534e?text=CR"
    }
  ],
  uhnw_executive: [
    {
      id: 'x1y2z3',
      masked_name: 'Perfil Reservado #904 (ZIEL Protocol)',
      isMasked: true,
      ica_score: 98.90,
      breakdown: { cultural: 92.00, eq: 98.00, operational: 99.00, skills: 100.00 },
      pillars: ["Discreción Estricta (Templanza)", "Gestión de Crisis (Paz)", "Adaptabilidad"],
      agent_synthesis: {
        pros: [
          "Pasaporte de la UE/EE.UU., disponibilidad inmediata para logística transfronteriza y vuelos privados.",
          "Verificación biométrica e Interpol de Nivel 4 aprobada sin observaciones.",
          "Formación en resguardo familiar, ciberseguridad doméstica y primeros auxilios tácticos."
        ],
        cons: ["Banda salarial ubicada en el percentil superior (Top 3% del mercado)."],
        interview_question: "Describa su metodología para mantener la armonía y rutina de cuidado frente a cambios logísticos imprevistos en un entorno de alta presión."
      },
      avatarUrl: "https://placehold.co/150x150/fafaf9/a8a29e?text=SEC"
    }
  ]
};

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-300";
  const variants = {
    primary: "bg-stone-900 text-stone-50 hover:bg-stone-800 shadow-sm",
    secondary: "bg-transparent border border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-stone-50",
    accent: "bg-stone-100 text-stone-900 hover:bg-stone-200"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', onClick }) => (
  <div onClick={onClick} className={`bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}>
    {children}
  </div>
);

const PhilosophyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAFAFA] rounded-xl max-w-2xl w-full p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-stone-200">
        <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-stone-700 font-light text-2xl transition-colors">×</button>
        
        <div className="mb-8">
          <h3 className="text-3xl font-serif text-stone-900 mb-2">Nuestra Filosofía</h3>
          <p className="text-xs font-medium uppercase tracking-widest text-stone-500">El Continuum del Bienestar Familiar</p>
        </div>

        <div className="space-y-6 text-stone-600 text-sm leading-relaxed font-light">
          <p className="italic text-stone-800 text-lg font-serif border-l-2 border-stone-300 pl-6 my-8">
            "La excelencia técnica protege la vida; la profundidad humana le otorga significado. En el cuidado de los nuestros, ambas son imperativas."
          </p>
          <p>
            ZIEL nace de una observación fundamental: las soluciones de cuidado contemporáneas a menudo bifurcan la eficiencia logística y la calidez emocional. Las plataformas masivas despersonalizan el trato, mientras que las agencias tradicionales carecen de la agilidad y los rigurosos estándares de seguridad del presente.
          </p>
          <p>
            Inspirados por los más altos estándares europeos de cuidado posparto y enriquecidos por la innegable profundidad afectiva y resiliencia de la cultura hispana, hemos diseñado un ecosistema único.
          </p>
          <p>
            Más que una plataforma de colocación, ZIEL es un arquitecto de la paz mental. Creemos en el <strong>Continuum Vital</strong>: desde el sosiego necesario en los primeros días tras el nacimiento, hasta el acompañamiento digno y estimulante en la madurez plena. Evaluamos a nuestro personal no solo mediante filtros clínicos exhaustivos, sino a través de una matriz de inteligencia emocional que prioriza la templanza, la empatía, la discreción y el genuino respeto por el legado de cada familia.
          </p>
        </div>

        <div className="mt-10 flex justify-end">
          <Button onClick={onClose}>Comprender el Estándar ZIEL</Button>
        </div>
      </div>
    </div>
  );
};

const LandingPage = ({ navigate }) => {
  const niches = [
    { id: 'latino_traditional', title: 'Acompañamiento Bicultural', icon: <Heart className="w-5 h-5" />, desc: 'Profesionales que nutren el hogar con calidez, preservación del idioma y valores familiares arraigados.', tag: 'Desarrollo & Apego' },
    { id: 'uhnw_executive', title: 'Protocolo Ejecutivo', icon: <Briefcase className="w-5 h-5" />, desc: 'Discreción absoluta (NDA), adaptabilidad logística y protocolos estrictos de seguridad para familias globales.', tag: 'Gestión Integral' },
    { id: 'postpartum_doula', title: 'Recuperación Materna', icon: <Leaf className="w-5 h-5" />, desc: 'Soporte nocturno, asesoría en lactancia y un entorno de sosiego para la restauración integral post-parto.', tag: 'Bienestar Temprano' },
    { id: 'senior_companion', title: 'Madurez Plena', icon: <UserCheck className="w-5 h-5" />, desc: 'Preservación de la dignidad, estimulación cognitiva y cuidado clínico compasivo para adultos mayores.', tag: 'Legado & Memoria' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-stone-100/50 border border-stone-200/50 rounded-full px-4 py-1.5 mb-8 text-[11px] uppercase tracking-widest text-stone-600 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-stone-400" />
          <span>Elevando el Estándar del Cuidado Privado</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 tracking-tight mb-8 leading-tight max-w-4xl">
          Donde la excelencia clínica <br className="hidden md:inline" />
          <span className="text-stone-500 italic">converge</span> con la calidez humana.
        </h1>
        
        <p className="text-lg md:text-xl text-stone-500 max-w-2xl font-light leading-relaxed mb-12">
          Un santuario de bienestar y seguridad para el ciclo vital de su familia. Unimos la precisión algorítmica con los más altos estándares de empatía y resguardo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => navigate('family/onboarding')}>
            Inicie su Selección Confidencial <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="secondary" onClick={() => navigate('philosophy')}>
            Descubra Nuestra Filosofía
          </Button>
        </div>
      </section>

      {/* Philosophy Teaser / Architecture */}
      <section className="bg-stone-100/30 border-y border-stone-200/50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Activity className="w-5 h-5 text-stone-700" />
            </div>
            <h4 className="font-serif text-xl text-stone-900 mb-3">El Continuum Vital</h4>
            <p className="text-sm font-light text-stone-500 leading-relaxed">
              Infraestructura humana diseñada para proteger y nutrir cada etapa de la vulnerabilidad familiar, desde los primeros días de vida hasta el acompañamiento sereno del adulto mayor.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Brain className="w-5 h-5 text-stone-700" />
            </div>
            <h4 className="font-serif text-xl text-stone-900 mb-3">Inteligencia Emocional</h4>
            <p className="text-sm font-light text-stone-500 leading-relaxed">
              Nuestro modelo vectorial evalúa dimensiones sutiles: la capacidad de mantener el sosiego bajo presión, la empatía genuina y el respeto inquebrantable por la privacidad.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Shield className="w-5 h-5 text-stone-700" />
            </div>
            <h4 className="font-serif text-xl text-stone-900 mb-3">Auditoría Estricta</h4>
            <p className="text-sm font-light text-stone-500 leading-relaxed">
              Procesos de verificación que superan los estándares de la industria, integrando escrutinio biométrico, validación de antecedentes globales y revisión de certificaciones clínicas.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-3">Áreas de Especialidad</h2>
            <p className="text-stone-500 font-light max-w-lg text-sm">Configuración dinámica de perfiles basada en los requerimientos específicos de su estilo de vida y etapa familiar.</p>
          </div>
          <Button variant="secondary" onClick={() => navigate('family/onboarding')} className="hidden md:inline-flex text-xs px-4 py-2">
            Ver Todos los Perfiles
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {niches.map((niche) => (
            <Card key={niche.id} onClick={() => navigate(`family/dashboard?niche=${niche.id}`)} className="p-8 group flex flex-col h-full bg-stone-50/50">
              <div className="mb-8 text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                {niche.icon}
              </div>
              <div className="mt-auto">
                <span className="text-[9px] uppercase tracking-widest text-stone-400 mb-3 block">{niche.tag}</span>
                <h3 className="font-serif text-lg text-stone-900 mb-3">{niche.title}</h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed mb-6">{niche.desc}</p>
                <div className="flex items-center text-xs font-medium text-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explorar Perfiles <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

const FamilyOnboarding = ({ navigate }) => {
  const [step, setStep] = useState(1);
  
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12">
        <button onClick={() => navigate('/')} className="text-stone-400 hover:text-stone-800 text-sm flex items-center transition-colors mb-8">
          ← Volver
        </button>
        <h2 className="text-3xl font-serif text-stone-900 mb-2">Configuración de Requerimientos</h2>
        <p className="text-stone-500 font-light text-sm">Nuestro algoritmo AfectoMatch analizará sus respuestas para presentarle candidatas con alineación técnica y temperamental superior.</p>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl p-8 md:p-12 shadow-sm">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-stone-800' : 'bg-stone-100'}`} />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <h3 className="font-medium text-stone-900 mb-6">Seleccione su necesidad prioritaria actual</h3>
              <div className="grid gap-4">
                {['Apoyo logístico y cuidado integral (Infantes/Niños)', 'Protocolo estricto, gestión de agenda y viajes (VIP)', 'Acompañamiento especializado en etapa posparto', 'Acompañamiento respetuoso y estimulación para adulto mayor'].map((opt, i) => (
                  <label key={i} className="flex items-start p-4 border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors has-[:checked]:border-stone-800 has-[:checked]:bg-stone-50">
                    <input type="radio" name="need" className="mt-1 accent-stone-900" defaultChecked={i===0} />
                    <span className="ml-4 text-sm text-stone-700 font-light">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <Button onClick={() => setStep(2)}>Siguiente Etapa</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <h3 className="font-medium text-stone-900 mb-6">Valores y Cultura del Hogar</h3>
              <p className="text-xs text-stone-500 font-light mb-6">Distribuya el peso de los siguientes atributos en su decisión de contratación.</p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2 text-stone-600">
                    <span>Afinidad Cultural (Idioma, Costumbres)</span> <span>Alta Relevancia</span>
                  </div>
                  <input type="range" className="w-full accent-stone-800 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" defaultValue="80" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2 text-stone-600">
                    <span>Certificaciones Clínicas (RCP, Montessori)</span> <span>Fundamental</span>
                  </div>
                  <input type="range" className="w-full accent-stone-800 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" defaultValue="95" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2 text-stone-600">
                    <span>Flexibilidad Operativa (Viajes, Cambios de Turno)</span> <span>Moderada</span>
                  </div>
                  <input type="range" className="w-full accent-stone-800 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" defaultValue="60" />
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <Button variant="secondary" onClick={() => setStep(1)}>Atrás</Button>
              <Button onClick={() => setStep(3)}>Procesar Perfil</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-12 animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-stone-800" />
            </div>
            <h3 className="text-xl font-serif text-stone-900 mb-3">Generando Matriz de Afinidad</h3>
            <p className="text-sm font-light text-stone-500 max-w-md mx-auto mb-8">
              Nuestro motor está evaluando vectores de compatibilidad contra nuestra base de perfiles élite pre-validados.
            </p>
            <Button onClick={() => navigate('family/dashboard?niche=latino_traditional')}>
              Ver Perfiles Seleccionados
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const FamilyDashboard = ({ niche = 'latino_traditional', navigate }) => {
  const [signedNDAs, setSignedNDAs] = useState({});
  const matches = MOCK_MATCHES[niche] || MOCK_MATCHES['latino_traditional'];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-stone-200 pb-6">
        <div>
          <button onClick={() => navigate('/')} className="text-stone-400 hover:text-stone-800 text-xs flex items-center transition-colors mb-4 uppercase tracking-widest">
            ← Retornar al Inicio
          </button>
          <h2 className="text-3xl font-serif text-stone-900 mb-2">Selección Privada</h2>
          <p className="text-stone-500 text-sm font-light">Perfiles curados mediante el motor AfectoMatch. Filtrado de excelencia clínica e idoneidad emocional.</p>
        </div>
        <div className="mt-4 md:mt-0 text-[10px] uppercase tracking-widest bg-stone-100 text-stone-600 px-3 py-1.5 rounded-md font-medium border border-stone-200">
          Segmento: {niche.replace('_', ' ')}
        </div>
      </div>

      <div className="space-y-8">
        {matches.map((match) => {
          const isUnlocked = !match.isMasked || signedNDAs[match.id];

          return (
            <Card key={match.id} className="overflow-hidden bg-white">
              {/* Header Profile */}
              <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 relative">
                  <img src={isUnlocked ? match.avatarUrl : "https://placehold.co/150x150/e7e5e4/a8a29e?text=ND"} alt="avatar" className="w-28 h-28 rounded-full border-4 border-stone-50 shadow-sm object-cover" />
                  {match.isMasked && !isUnlocked && (
                    <div className="absolute inset-0 bg-stone-900/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                    <div>
                      <h3 className="text-2xl font-serif text-stone-900 mb-2">
                        {isUnlocked ? match.masked_name : "Perfil Restringido (Requiere NDA)"}
                      </h3>
                      {isUnlocked && (
                        <div className="flex flex-wrap gap-2">
                          {match.pillars.map((pillar, idx) => (
                            <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-medium bg-stone-100 text-stone-600 tracking-wide uppercase">
                              {pillar}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-4xl font-light text-stone-900 tracking-tighter">{match.ica_score}<span className="text-xl text-stone-400">%</span></div>
                      <div className="text-[9px] text-stone-400 uppercase tracking-widest font-medium mt-1">Alineación Integral</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ICA Breakdown Grid */}
              <div className="grid grid-cols-4 divide-x divide-stone-100 border-y border-stone-100 bg-stone-50/50">
                <div className="p-4 text-center">
                  <div className="text-lg font-light text-stone-800">{match.breakdown.cultural}%</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mt-1">Cultura</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-lg font-light text-stone-800">{match.breakdown.eq}%</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mt-1">Inteligencia Emoc.</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-lg font-light text-stone-800">{match.breakdown.operational}%</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mt-1">Operativa</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-lg font-light text-stone-800">{match.breakdown.skills}%</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mt-1">Clínica/Técnica</div>
                </div>
              </div>

              {/* Synthesis Body */}
              <div className="p-8 bg-white">
                {!isUnlocked ? (
                  <div className="text-center py-8 max-w-lg mx-auto">
                    <ShieldCheck className="w-10 h-10 text-stone-300 mx-auto mb-4" />
                    <h4 className="text-lg font-serif text-stone-900 mb-2">Protocolo de Confidencialidad</h4>
                    <p className="text-stone-500 text-sm font-light mb-6 leading-relaxed">
                      Para garantizar la integridad y seguridad de nuestros perfiles de alto nivel ejecutivo, es mandatorio formalizar un Acuerdo de No Divulgación (NDA) previo al acceso del dossier completo.
                    </p>
                    <Button onClick={() => setSignedNDAs(prev => ({ ...prev, [match.id]: true }))} className="w-full sm:w-auto">
                      Firmar NDA Digital
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-8 animate-in fade-in">
                    <div>
                      <h4 className="font-medium text-stone-900 mb-4 text-sm flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-stone-400" /> Síntesis Agéntica de Alineación
                      </h4>
                      <div className="grid md:grid-cols-2 gap-8 text-sm font-light">
                        <div>
                          <h5 className="text-stone-700 font-medium mb-3 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-800 mr-2"></span> Fortalezas de Compatibilidad
                          </h5>
                          <ul className="space-y-2 text-stone-600 pl-4 border-l border-stone-200">
                            {match.agent_synthesis.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-stone-700 font-medium mb-3 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mr-2"></span> Consideraciones Logísticas
                          </h5>
                          <ul className="space-y-2 text-stone-600 pl-4 border-l border-stone-200">
                            {match.agent_synthesis.cons.map((con, i) => <li key={i}>{con}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                      <h5 className="text-xs uppercase tracking-widest font-medium text-stone-500 mb-3">Sugerencia para Entrevista Inicial</h5>
                      <p className="text-stone-800 italic font-serif text-lg leading-relaxed">
                        "{match.agent_synthesis.interview_question}"
                      </p>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-stone-100">
                      <Button>Coordinar Entrevista Privada</Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const CaregiverAcademy = () => {
  const isaData = { total: 1500, paid: 950, cap: 2250, progress: (950/2250)*100 };
  
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in">
      <div className="mb-12">
        <h2 className="text-3xl font-serif text-stone-900 mb-2">Desarrollo Profesional</h2>
        <p className="text-stone-500 text-sm font-light">Gestión de certificaciones y estado de acuerdos de financiamiento educativo (ISA).</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile & ISA Summary */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-8">
            <h3 className="font-serif text-lg text-stone-900 mb-6">Estado de Financiamiento</h3>
            
            <div className="mb-8">
              <div className="flex justify-between text-xs mb-2 text-stone-600">
                <span>Progreso de Amortización</span>
                <span className="font-medium">${isaData.paid} / ${isaData.cap}</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-1.5">
                <div className="bg-stone-800 h-1.5 rounded-full" style={{ width: `${isaData.progress}%` }}></div>
              </div>
            </div>

            <ul className="space-y-4 text-sm font-light text-stone-600">
              <li className="flex justify-between border-b border-stone-100 pb-3">
                <span>Deducción Aplicada</span>
                <span className="font-medium text-stone-900">10% Mensual</span>
              </li>
              <li className="flex justify-between border-b border-stone-100 pb-3">
                <span>Estado Actual</span>
                <span className="font-medium text-stone-900">Activo (Plaza Asignada)</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-stone-900 text-stone-50">
            <h3 className="font-serif text-lg mb-2">Comunidad Edupreneur</h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-6">
              El modelo ZIEL le permite acceder a formación de élite sin inversión inicial, garantizando que el estándar de servicio eleve el bienestar de su familia contratante y su propio crecimiento profesional.
            </p>
            <button className="text-xs font-medium underline underline-offset-4 hover:text-stone-300 transition-colors">
              Revisar Condiciones Contractuales
            </button>
          </Card>
        </div>

        {/* Course Modules */}
        <div className="lg:col-span-2">
          <Card className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg text-stone-900">Currícula ZIEL Protocol</h3>
              <span className="text-[10px] uppercase tracking-widest bg-stone-100 text-stone-600 px-3 py-1 rounded-full font-medium">
                Nivel Élite
              </span>
            </div>

            <div className="space-y-4">
              {[
                { name: "Soporte Vital Básico Pediátrico Avanzado", progress: 100, status: 'completed' },
                { name: "Módulo Clínico: Nutrición Posparto y Reposo", progress: 100, status: 'completed' },
                { name: "Protocolos de Privacidad (NDA) y Ciberseguridad", progress: 65, status: 'in-progress' },
                { name: "Inteligencia Emocional y Regulación del Entorno", progress: 0, status: 'pending' }
              ].map((course, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-stone-100 rounded-lg group hover:border-stone-200 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      {course.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-stone-800" />
                      ) : (
                        <CircleIcon progress={course.progress} />
                      )}
                    </div>
                    <div>
                      <h4 className={`text-sm font-medium ${course.status === 'pending' ? 'text-stone-400' : 'text-stone-900'}`}>{course.name}</h4>
                      <p className="text-xs text-stone-500 font-light mt-1 flex items-center">
                        <Clock className="w-3 h-3 mr-1.5" /> {course.status === 'completed' ? 'Completado' : `${course.progress}% Finalizado`}
                      </p>
                    </div>
                  </div>
                  {course.status !== 'completed' && (
                    <button className="mt-4 sm:mt-0 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-200 px-4 py-2 rounded-md hover:bg-stone-50 transition-colors">
                      Continuar Módulo
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

/* Helper for visual progress */
const CircleIcon = ({ progress }) => (
  <div className="relative w-5 h-5">
    <div className="absolute inset-0 rounded-full border-2 border-stone-100"></div>
    {progress > 0 && (
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-stone-800"
          strokeDasharray={`${progress}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none" stroke="currentColor" strokeWidth="3"
        />
      </svg>
    )}
  </div>
);

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  // Simple query param parser for the mock router
  const url = new URL(`http://localhost${currentPath}`);
  const pathname = url.pathname;
  const nicheParam = url.searchParams.get('niche');

  const navigate = (path) => {
    if (path === 'philosophy') {
      setIsPhilosophyOpen(true);
      return;
    }
    setCurrentPath(path.startsWith('/') ? path : `/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-stone-900 flex flex-col selection:bg-stone-200">
      
      {/* Navigation Header */}
      <nav className="bg-[#FAFAFA]/90 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
            <div className="w-8 h-8 flex items-center justify-center border border-stone-300 rounded text-stone-900 font-serif text-lg mr-3 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
              Z
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif tracking-tight leading-none">ZIEL</span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-stone-500 mt-1">Care Platform</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium text-stone-500">
            <button onClick={() => navigate('philosophy')} className="hover:text-stone-900 transition-colors">Filosofía</button>
            <button onClick={() => navigate('family/onboarding')} className={`hover:text-stone-900 transition-colors ${pathname.includes('family') ? 'text-stone-900' : ''}`}>Familias</button>
            <button onClick={() => navigate('caregiver/academy')} className={`hover:text-stone-900 transition-colors ${pathname.includes('caregiver') ? 'text-stone-900' : ''}`}>Profesionales</button>
            <Button onClick={() => navigate('family/onboarding')} className="text-xs px-5 py-2">
              Ingresar
            </Button>
          </div>

          <div className="md:hidden">
            <button className="text-stone-900 p-2">Menú</button>
          </div>
        </div>
      </nav>

      {/* Main Content Router */}
      <main className="flex-grow flex flex-col">
        {pathname === '/' && <LandingPage navigate={navigate} />}
        {pathname === '/family/onboarding' && <FamilyOnboarding navigate={navigate} />}
        {pathname === '/family/dashboard' && <FamilyDashboard niche={nicheParam} navigate={navigate} />}
        {pathname === '/caregiver/academy' && <CaregiverAcademy />}
      </main>

      {/* Global Modals */}
      <PhilosophyModal isOpen={isPhilosophyOpen} onClose={() => setIsPhilosophyOpen(false)} />

      {/* Footer */}
      <footer className="border-t border-stone-200/50 py-12 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div>
            <span className="text-lg font-serif tracking-tight block mb-2">ZIEL.</span>
            <p className="text-[11px] text-stone-400 font-light max-w-xs mx-auto md:mx-0 leading-relaxed">
              Elevando el estándar del cuidado privado con precisión clínica, rigor y la calidez del espíritu.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end gap-6 text-xs text-stone-400 font-light">
            <button onClick={() => navigate('philosophy')} className="hover:text-stone-900 transition-colors">Filosofía</button>
            <button onClick={() => navigate('family/onboarding')} className="hover:text-stone-900 transition-colors">Familias</button>
            <button onClick={() => navigate('caregiver/academy')} className="hover:text-stone-900 transition-colors">Profesionales</button>
            <span>© {new Date().getFullYear()} ZIEL Care Platform</span>
          </div>
        </div>
      </footer>
    </div>
  );
}