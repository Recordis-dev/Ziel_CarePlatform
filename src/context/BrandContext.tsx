import React, { createContext, useContext, useState, useEffect } from 'react';

export type BrandVersion = 'v0' | 'v1' | 'v2' | 'v3';

export interface BrandConfig {
  id: BrandVersion;
  name: string;
  subtitle: string;
  tagline: string;
  symbolism: string;
  badge: string;
  fontHeading: string;
  fontBody: string;
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    bgLight: string;
    cardBg: string;
    textPrimary: string;
    textMuted: string;
    border: string;
    goldOrAccent: string;
  };
  hexPalette: { name: string; hex: string; role: string }[];
  logoSvg: React.ReactNode;
  geometryDetails: {
    title: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
  };
  brandNarrative: string;
  physicalApps: { title: string; desc: string; tag: string }[];
}

export const BRAND_CONFIGS: Record<BrandVersion, BrandConfig> = {
  v0: {
    id: 'v0',
    name: 'Versión 0: MVP All-in-One Care',
    subtitle: 'Prototipo Funcional Original',
    tagline: 'Plataforma Bilingüe de Cuidados de Alta Afinidad y FinTech Edupreneur',
    symbolism: 'Estructura modular original centrada en usabilidad directa y prototipo rápido.',
    badge: 'v0 Original MVP',
    fontHeading: 'font-sans',
    fontBody: 'font-sans',
    colors: {
      primary: '#0369a1',
      primaryHover: '#075985',
      secondary: '#0d9488',
      accent: '#f59e0b',
      bgLight: '#f8fafc',
      cardBg: '#ffffff',
      textPrimary: '#0f172a',
      textMuted: '#64748b',
      border: '#e2e8f0',
      goldOrAccent: '#38bdf8',
    },
    hexPalette: [
      { name: 'Sky Tech', hex: '#0369a1', role: 'Color Primario MVP' },
      { name: 'Teal Care', hex: '#0d9488', role: 'Secundario Salud' },
      { name: 'Amber Warmth', hex: '#f59e0b', role: 'Acentos & Alertas' },
      { name: 'Slate Light', hex: '#f8fafc', role: 'Fondo Interfaz' },
    ],
    logoSvg: (
      <svg className="w-8 h-8 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    ),
    geometryDetails: {
      title: 'Arquitectura Modular Estándar',
      p1Title: '1. USABILIDAD DIRECTA:',
      p1Desc: 'Enfoque funcional con componentes limpios y accesibles.',
      p2Title: '2. ADAPTABILIDAD MULTI-NICHO:',
      p2Desc: 'Configuración dinámica para UHNW, Tradicional Latino, Posparto y Seniors.',
      p3Title: '3. FINTECH & MATCHING:',
      p3Desc: 'Visualización clara de algoritmos ICA y contratos ISA.',
    },
    brandNarrative: 'La versión 0 representa el origen tecnológico del sistema: enfocado en la funcionalidad algorítmica y la demostración de la propuesta de valor.',
    physicalApps: [
      { title: 'Dashboard Web App', desc: 'Panel modular responsivo con tabs de navegación.', tag: 'UI MVP' },
      { title: 'Reporte PDF ICA', desc: 'Síntesis algorítmica en formato estándar.', tag: 'Doc' },
      { title: 'Calculadora ISA', desc: 'Herramienta interactiva para proyección de pagos.', tag: 'Tool' },
    ]
  },
  v1: {
    id: 'v1',
    name: 'Versión 1: El Ángulo Áureo',
    subtitle: 'The Golden Angle Matrix',
    tagline: 'Concebido con rigor de geometría sagrada y calidez de cuidado infinito',
    symbolism: 'Estructura rigurosa, geométrica y simétrica en ángulo áureo (137.5°).',
    badge: 'v1 Ángulo Áureo (137.5°)',
    fontHeading: 'font-serif',
    fontBody: 'font-sans',
    colors: {
      primary: '#0B1E36',
      primaryHover: '#071324',
      secondary: '#C86D51',
      accent: '#E6B89C',
      bgLight: '#F7F9FC',
      cardBg: '#FFFFFF',
      textPrimary: '#0B1E36',
      textMuted: '#516377',
      border: '#D9E2EC',
      goldOrAccent: '#C86D51',
    },
    hexPalette: [
      { name: 'Azul Noche ZIEL', hex: '#0B1E36', role: 'Excelencia Clínica & Elegancia' },
      { name: 'Arcilla Viva', hex: '#C86D51', role: 'Calidez Humana & Rebozo' },
      { name: 'Bata Blanca', hex: '#F7F9FC', role: 'Pureza & Rigor Médico' },
      { name: 'Terracota Áurea', hex: '#E6B89C', role: 'Acentos & Highlights' },
    ],
    logoSvg: (
      <svg className="w-8 h-8 text-[#0B1E36]" viewBox="0 0 100 100" fill="none">
        <path d="M 10,40 Q 50,15 90,40 Q 50,65 10,40 Z" stroke="#0B1E36" strokeWidth="3" fill="none" />
        <path d="M 30,80 L 70,80 L 30,30 L 70,30" stroke="#C86D51" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="50" cy="40" r="3" fill="#C86D51" />
      </svg>
    ),
    geometryDetails: {
      title: 'Geometría Clínica Áurea',
      p1Title: '1. GEOMETRÍA CLÍNICA:',
      p1Desc: 'La estructura de la "Z" es rigurosa, geométrica y simétrica.',
      p2Title: '2. ÁNGULO ÁUREO (137.5°):',
      p2Desc: 'El ángulo de crecimiento perfecto de Fibonacci dicta la curva interna, uniendo la precisión matemática (137/Phi) con la calidez orgánica (Cuidado Posparto/Senior).',
      p3Title: '3. EL ABRAZO:',
      p3Desc: 'La tensión de la "Z" forma un espacio en negativo envolvente, similar al "apapacho" del rebozo materno.',
    },
    brandNarrative: 'La phyllotaxis es un orden de crecimiento perfecto en la naturaleza. Ziel es un sistema ordenado de empatía donde la precisión matemática y la calidez humana se abrazan.',
    physicalApps: [
      { title: 'Gafete Ejecutivo VIP', desc: 'Badge físico con banda Azul Noche ZIEL y folio grabado.', tag: 'VIP Credential' },
      { title: 'Tarjeta de Presentación', desc: 'Impresión en papel algodón con estampado en folia Arcilla Viva.', tag: 'Print' },
      { title: 'App Móvil iOS/Android', desc: 'Interfaz oscura premium con acentos en dorado áureo.', tag: 'Mobile UI' },
    ]
  },
  v2: {
    id: 'v2',
    name: 'Versión 2: El Continuo Alfa-Omega',
    subtitle: 'The Pi Matrix',
    tagline: 'El Ciclo Perfecto del Cuidado Intergeneracional',
    symbolism: 'El círculo perfecto de Pi (π) representa el continuum vital desde el nacimiento hasta la senescencia.',
    badge: 'v2 Alfa-Omega (π Matrix)',
    fontHeading: 'font-sans',
    fontBody: 'font-sans',
    colors: {
      primary: '#262626',
      primaryHover: '#171717',
      secondary: '#D4AF37',
      accent: '#8A9A86',
      bgLight: '#F1F3F5',
      cardBg: '#FFFFFF',
      textPrimary: '#171717',
      textMuted: '#6B7280',
      border: '#E5E7EB',
      goldOrAccent: '#D4AF37',
    },
    hexPalette: [
      { name: 'Gris Platino', hex: '#F1F3F5', role: 'Fondo de Alta Precisión' },
      { name: 'Carbón Absoluto', hex: '#262626', role: 'Tipografía & Estructura' },
      { name: 'Oro Áureo', hex: '#D4AF37', role: 'Sello de Seguridad VIP' },
      { name: 'Salvia Orgánica', hex: '#8A9A86', role: 'Bienestar Holístico' },
    ],
    logoSvg: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" stroke="#262626" strokeWidth="4" />
        <circle cx="50" cy="50" r="32" stroke="#D4AF37" strokeWidth="3" strokeDasharray="6 4" />
        <text x="32" y="58" className="font-bold text-2xl" fill="#262626">A</text>
        <text x="56" y="58" className="font-bold text-2xl" fill="#D4AF37">Ω</text>
      </svg>
    ),
    geometryDetails: {
      title: 'El Ciclo Alfa-Omega (π)',
      p1Title: '1. ALFA & OMEGA:',
      p1Desc: 'Simboliza el continuum del ciclo vital completo, de nacimiento a senescencia.',
      p2Title: '2. PI (π) MATRIX:',
      p2Desc: 'El círculo perfecto e infinito de Pi garantiza la precisión algorítmica y un estándar ininterrumpido de seguridad VIP (NDA).',
      p3Title: '3. NUDO CULTURAL:',
      p3Desc: 'El entrelazamiento forma un nudo de tejido tradicional mexicano, dignificando la soberanía cultural y el idioma.',
    },
    brandNarrative: 'La "Continuum" es la filosofía que utiliza el ciclo completo para garantizar la precisión algorítmica sin interrupción en seguridad y calidez humana.',
    physicalApps: [
      { title: 'Premium Care Package', desc: 'Caja rígida eco-friendly con cierre magnético y sello de cera Oro Áureo.', tag: 'Packaging' },
      { title: 'Uniforme Scrub Staff', desc: 'Filipina médica bordada en hilo metálico Oro Áureo y tela antibacterial.', tag: 'Apparel' },
      { title: 'Clip Monetario Executive', desc: 'Metal mate grabado con la matriz Pi y el monograma Alfa-Omega.', tag: 'Accessory' },
    ]
  },
  v3: {
    id: 'v3',
    name: 'Versión 3: La Vesica Piscis del Apapacho',
    subtitle: 'The Sacred Core',
    tagline: 'La Ciencia del Alma. Donde la excelencia clínica converge con la calidez humana',
    symbolism: 'La intersección sagrada de dos esferas: la Ciencia (Bata Blanca) y el Amor (Rebozo Materno).',
    badge: 'v3 Vesica Piscis (Apapacho)',
    fontHeading: 'font-serif',
    fontBody: 'font-serif',
    colors: {
      primary: '#1A181C',
      primaryHover: '#000000',
      secondary: '#D9A0A0',
      accent: '#E6C594',
      bgLight: '#F5F0EB',
      cardBg: '#FCFAFA',
      textPrimary: '#1A181C',
      textMuted: '#786C68',
      border: '#E8DDD5',
      goldOrAccent: '#D9A0A0',
    },
    hexPalette: [
      { name: 'Obsidiana', hex: '#1A181C', role: 'Estructura Sagrada & Rigor' },
      { name: 'Crema de Lino', hex: '#F5F0EB', role: 'Lienzo de Confort' },
      { name: 'Rosa Mexica / Rebozo', hex: '#D9A0A0', role: 'Calidez Afectiva del Apapacho' },
      { name: 'Oro de la Tierra', hex: '#E6C594', role: 'Acentos Espirituales' },
    ],
    logoSvg: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
        <circle cx="38" cy="50" r="30" stroke="#1A181C" strokeWidth="3" fill="none" />
        <circle cx="62" cy="50" r="30" stroke="#D9A0A0" strokeWidth="3" fill="none" />
        <text x="46" y="56" className="font-serif italic text-xl font-bold" fill="#1A181C">Z</text>
      </svg>
    ),
    geometryDetails: {
      title: 'Vesica Piscis Sagrada',
      p1Title: '1. VESICA PISCIS:',
      p1Desc: 'La intersección sagrada de dos esferas (Ciencia / Amor).',
      p2Title: '2. CONVERGENCIA SAGRADA:',
      p2Desc: 'El círculo de la izquierda (Bata Blanca) se une al de la derecha (Rebozo), forming el santuario donde la excelencia clínica converge con la calidez humana.',
      p3Title: '3. SEMILLA DE ALMA (ZIEL):',
      p3Desc: 'La semilla central contiene una "Z" cursiva elegante, representando el alma (ZIEL/137) y los Frutos del Espíritu (Paz, Bondad, Paciencia).',
    },
    brandNarrative: 'La "Sacred Core" es un santuario de wellbeing presentado en un apapacho que integra los protocolos profesionales con el espíritu del cuidado maternal.',
    physicalApps: [
      { title: 'Certificado Holistic Wellness', desc: 'Papel lino texturizado con sellos secos y firma dorada.', tag: 'Certificate' },
      { title: 'Rebozo de Lana & Lino', desc: 'Tejido artesanal tradicional en tono Rosa Mexica para apoyo posparto.', tag: 'Textile' },
      { title: 'Interfaz Digital Premium', desc: 'Experiencia web serena con tipografía editorial y transiciones suaves.', tag: 'Digital UI' },
    ]
  }
};

interface BrandContextType {
  version: BrandVersion;
  setVersion: (v: BrandVersion) => void;
  config: BrandConfig;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [version, setVersion] = useState<BrandVersion>('v1');

  useEffect(() => {
    const saved = localStorage.getItem('ziel_brand_version') as BrandVersion;
    if (saved && BRAND_CONFIGS[saved]) {
      setVersion(saved);
    }
  }, []);

  const changeVersion = (v: BrandVersion) => {
    setVersion(v);
    localStorage.setItem('ziel_brand_version', v);
  };

  return (
    <BrandContext.Provider value={{ version, setVersion: changeVersion, config: BRAND_CONFIGS[version] }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
