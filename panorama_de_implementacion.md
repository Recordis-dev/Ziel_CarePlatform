# Panorama de Implementación y Arquitectura Operativa

**Sistema:** Plataforma Multi-Nicho de Cuidado Familiar, Staffing VIP y Aceleración Edupreneur  
**Alcance:** Cobertura Transfronteriza (EE.UU., México, Colombia, España)

---

## 1. Arquitectura de Módulos y Submódulos del Sistema

El sistema se estructura en 5 módulos centrales interconectados pero desarticulados modularmente para permitir su adaptación a distintos nichos:

```
                  ┌─────────────────────────────────────────┐
                  │       CORE DASHBOARD & CONCIERGE        │
                  └────────────────────┬────────────────────┘
                                       │
      ┌──────────────────┬─────────────┴────────────┬──────────────────┐
      │                  │                          │                  │
┌─────▼──────┐    ┌──────▼──────┐            ┌──────▼──────┐    ┌──────▼──────┐
│  MODULE 1  │    │  MODULE 2   │            │  MODULE 3   │    │  MODULE 4   │
│ AfectoMatch│    │ Edupreneur  │            │ Trust &     │    │ Payroll &   │
│ Engine     │    │ Academy     │            │ Compliance  │    │ Cross-Border│
└────────────┘    └─────────────┘            └─────────────┘    └─────────────┘
```

### Módulo 1: Engine de Matching Afectivo-Cultural (AfectoMatch)
*   **Submódulo 1.1: Multi-Nicho Intake Questionnaire:** Captura dinámica de necesidades según el perfil (UHNW, Tradicional Latino, Posparto, Senior).
*   **Submódulo 1.2: Vectorizer & Embeddings Pipeline:** Conversión de narrativas y psicometría en vectores densos via OpenAI `text-embedding-3-large`.
*   **Submódulo 1.3: Vector Search (pgvector):** Ejecución de consultas por distancia coseno combinadas con filtros duros SQL.
*   **Submódulo 1.4: LLM RAG Evaluator (LangGraph):** Síntesis cualitativa de compatibilidad y generación de reportes ICA.

### Módulo 2: Edupreneur Academy & Career Accelerator (EdTech + FinTech)
*   **Submódulo 2.1: LMS & Micro-Learning:** Gestión de cursos en video, audio y quizzes interactivos accesibles desde dispositivos móviles.
*   **Submódulo 2.2: Sello Elite Evaluator:** Módulo de exámene prácticos y auditoría de competencias (RCP, Montessori, Protocolo UHNW, Nutrición).
*   **Submódulo 2.3: ISA Engine:** Gestión contractual, firma digital de Acuerdos de Ingresos Compartidos y cálculo de pagos diferidos.

### Módulo 3: Trust, Safety & Compliance Engine
*   **Submódulo 3.1: Background Check Connector:** Integración con APIs de revisión de antecedentes penales, judicial, crediticio y antecedentes de manejo.
*   **Submódulo 3.2: Biometric & NDA Vault:** Verificación de identidad facial, resguardo encriptado de contratos de confidencialidad (NDA).
*   **Submódulo 3.3: Reference Verifier:** Módulo automatizado de validación de cartas de recomendación mediante encuestas telefónicas/digitales.

### Módulo 4: Payroll, Legal & Cross-Border Logistics
*   **Submódulo 4.1: Smart Contract Generator:** Emisión automática de contratos laborales transfronterizos (adaptados a EE.UU., México, Colombia, España).
*   **Submódulo 4.2: Multi-Currency Payment Rail:** Procesamiento de pagos de nómina, viáticos y comisiones vía Stripe y Wise.
*   **Submódulo 4.3: Concierge & Emergency Dispatch:** Asignación de sustituciones de emergencia en menos de 24 horas.

---

## 2. Mapa de Rutas y Subrutas del Sistema (Next.js App Router)

### Portal Público & Captación (`/app/(marketing)`)
*   `/` — Landing Page principal con selector dinámico de nicho.
*   `/uhnw-executive` — Propuesta de valor para familias ejecutivas y VIPs.
*   `/latino-tradicional` — Propuesta enfocado en *familismo*, *cuarentena* y "efecto abuela".
*   `/academy` — Landing de captación para nannies y cuidadoras (Carrera Acelerada).
*   `/pricing` — Modelos de suscripción, tarifas de colocación y planes B2B.

### Portal de Familias (`/app/(family)`)
*   `/family/onboarding` — Flow interactivo de configuración de necesidades e intake psicométrico.
*   `/family/dashboard` — Vista general de servicios activos, solicitudes y estado del personal.
*   `/family/matches` — Feed de candidatas pre-seleccionadas con su score ICA.
    *   `/family/matches/[candidateId]` — Expediente enmascarado, video-presentación y reporte de afinidad.
*   `/family/interviews` — Agendamiento de entrevistas virtuales y gestión de pruebas presenciales.
*   `/family/payroll` — Gestión de sueldos, aguinaldos, viáticos de viaje e impuestos.

### Portal de Cuidadoras / Nannies (`/app/(caregiver)`)
*   `/caregiver/onboarding` — Registro, carga de documentos de identidad y test de temperamento/EQ.
*   `/caregiver/academy` — Dashboard de cursos asignados, avance en la certificación y pruebas.
*   `/caregiver/jobs` — Muro de vacantes sugeridas según su nivel de certificación.
*   `/caregiver/isa-status` — Control de su acuerdo ISA, saldo pendiente y retenciones.
*   `/caregiver/profile` — Portfolio público, bitácora de recomendaciones y distintivos.

### Portal de Administración & Concierge (`/app/(admin)`)
*   `/admin/candidates` — Auditoría de perfiles, aprobación de background checks y asignación de sellos.
*   `/admin/matching-studio` — Herramienta interna para ajustar pesos del algoritmo AfectoMatch manualmente.
*   `/admin/isa-management` — Monitor de cobros e ingresos por acuerdos de capacitación.

---

## 3. Diagrama de Procesos y Flujos Operativos Key

```
[REGISTRO CUIDADORA] ➔ [BOOTCAMP ACADEMY] ➔ [AUDITORÍA SAFETY] ➔ [MATCHING ALGORÍTMICO] ➔ [PLACEMENT & ISA]
```

### Proceso A: Ciclo de Vida Edupreneur & Placement
1.  **Aspirante ingresa a `/caregiver/onboarding`:** Completa test EQ de 15 preguntas y carga ID.
2.  **Asignación de Ruta Educativa:** Si no alcanza el nivel *Elite*, ingresa a la *Nanny Academy* con opción ISA.
3.  **Certificación:** Aprueba módulos de Primeros Auxilios, Cuidado Posparto/Montessori y Protocolo UHNW.
4.  **Activación en Pool:** Una vez verificado el background check al 100%, la candidata entra al *Vector Pool*.
5.  **Matching & Entrevista:** Se genera la coincidencia con una familia (ICA > 85%).
6.  **Firma & Onboarding:** Se firman el contrato laboral y el acuerdo de retención ISA en la plataforma.

### Proceso B: Búsqueda y Colocación Ejecutiva (Familia UHNW)
1.  **Intake VIP:** El *Chief of Staff* o la madre completa el cuestionario de requerimientos (`/family/onboarding`).
2.  **Ejecución AfectoMatch Engine:** Se procesan los filtros duros (visa, idioma) y la distancia coseno.
3.  **Generación de Reporte ICA:** El agente LangGraph sintetiza los top 3 perfiles con análisis de pros y contras.
4.  **Selección & NDA:** La familia selecciona a las candidatas; se firman los NDA para desenmascarar los datos personales.
5.  **Período de Prueba & Retención:** Se inicia el seguimiento de 90 días con micro-encuestas semanales de satisfacción.
---

## 4. Despliegue en GitHub Pages & CI/CD Workflow

La plataforma cuenta con un pipeline automatizado en GitHub Actions (`.github/workflows/deploy.yml`) para compilación y despliegue continuo en GitHub Pages:

```
[PUSH TO MAIN] ➔ [GITHUB ACTIONS BUILD (npm run build)] ➔ [DEPLOY TO GITHUB PAGES (dist/)]
```

### Características de Despliegue
*   **Enrutador SPA Compatible:** `HashRouter` para garantizar navegación fluida y enlaces compartibles sin dependencias de reescritura en servidor.
*   **Sitemap & SEO Indexing:** Generación de `sitemap.xml` y `robots.txt` orientados a visibilidad en motores de búsqueda tradicionales y asistentes conversacionales de IA.
