# ZIEL Care Platform — Multi-Niche Care, VIP Staffing & Edupreneur Academy

[![Deploy to GitHub Pages](https://github.com/ziel-care/all-in-one-care-platform/actions/workflows/deploy.yml/badge.svg)](https://github.com/ziel-care/all-in-one-care-platform/actions/workflows/deploy.yml)

**ZIEL Care Platform** es una solución integral multi-nicho diseñada para la industria de cuidado familiar, staffing ejecutivo VIP y aceleración laboral Edupreneur. El sistema integra el motor algorítmico **AfectoMatch Engine** para emparejamiento afectivo-cultural mediante búsqueda vectorial por distancia coseno (`pgvector`) y evaluación cualitativa agéntica (LLM RAG LangGraph).

---

## 🌟 Características Principales

1. **Configurador Multi-Nicho de Producto:**
   - **Nicho 1: Tradicional Latino & Diáspora:** Calidez materna, cocina reconfortante, idioma español y "Efecto Abuela".
   - **Nicho 2: UHNW / VIP Executive:** Discreción absoluta, protocolo diplomático ZIEL, ciberseguridad y pasaporte abierto.
   - **Nicho 3: Posparto & Doula:** Manejo de cuarentena, reposo, asistencia en lactancia materna y apoyo nocturno.
   - **Nicho 4: Acompañamiento Senior Digno:** Estimulación cognitiva, preservación de memoria y empatía gerontológica.

2. **AfectoMatch Engine & Calculadora ICA:**
   - Ecuación del Índice de Compatibilidad Afectiva:
     ICA = (W_H · S_H) + (W_C · S_C) + (W_E · S_E) + (W_O · S_O)
   - Embeddings de 1536 dimensiones (`text-embedding-3-large`).
   - Evaluación agéntica sintetizando pros, contras y preguntas sugeridas de entrevista.

3. **Edupreneur Academy & FinTech ISA:**
   - Capacitación y Sello Elite en micro-learning.
   - Acuerdos de Ingresos Compartidos (ISA) con $0 USD de costo inicial, 10% de retención sobre salario, umbral mínimo de ingresos ($1,200 USD/mes) y límite máximo de reembolso (Cap 1.5x).

4. **Capas de Despliegue & Optimización SEO / AI SEO:**
   - Enrutamiento cliente optimizado en UI/UX (`HashRouter` / RESTful semantics).
   - Generative Engine Optimization (GEO): `index.html` enriquecido con JSON-LD (Schema.org), OpenGraph y Twitter Cards.
   - `robots.txt` con permisos para rastreadores de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Googlebot`) y `sitemap.xml`.
   - Despliegue automático en **GitHub Pages** vía GitHub Actions Workflow (`.github/workflows/deploy.yml`).

---

## 🚀 Inicio Rápido (Desarrollo Local)

### Requisitos Previos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/username/all-in-one-care-platform.git
cd all-in-one-care-platform

# 2. Instalar dependencias
npm install

# 3. Probar la compilación de producción
npm run build
```

---

## 🛠️ Estructura del Proyecto

```
all-in-one-care-platform/
├── .github/workflows/
│   └── deploy.yml              # Workflow de CI/CD para GitHub Pages
├── public/
│   ├── 404.html                # SPA Fallback para GitHub Pages
│   ├── robots.txt              # Reglas de SEO y AI Bots (GPTBot, ClaudeBot)
│   └── sitemap.xml             # Mapa del sitio optimizado
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Barra de navegación receptiva con selector de nicho
│   │   └── Footer.tsx          # Pie de página con enlaces SEO/GEO
│   ├── data/
│   │   └── mockData.ts         # Datos de nichos, candidatas, módulos y reglas
│   ├── pages/
│   │   ├── HomeLanding.tsx     # Landing principal e incubadora algorítmica
│   │   ├── NicheLanding.tsx    # Vistas de cada nicho
│   │   ├── AcademyLanding.tsx  # Edupreneur Academy & Calculadora ISA
│   │   ├── PricingPage.tsx     # Planes de precio y modelos de cobro
│   │   ├── FamilyPortal.tsx    # Onboarding e intetraz familia
│   │   ├── CaregiverPortal.tsx # Portal de vacantes para nannies
│   │   ├── AdminPortal.tsx     # Admin & Matching Studio
│   │   └── DocsPage.tsx        # Documentación técnica & API explorer
│   ├── App.tsx                 # Configuración de rutas (HashRouter)
│   ├── main.tsx                # Punto de entrada React
│   └── index.css               # Estilos globales Tailwind CSS
├── index.html                  # HTML principal con JSON-LD structured data
├── package.json                # Scripts y dependencias
├── vite.config.ts              # Configuración de Vite con base relative (./)
└── README.md                   # Documentación general
```

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
