# Product Requirements Document (PRD)

**Nombre del Producto:** All-in-One Multi-Niche Care Platform (MVP v1)

**Versión:** 1.0.0

**Fecha:** Septiembre 2026

**Estado:** Final para Desarrollo

## 1. Visión del Producto y Objetivos Estratégicos

### Visión

Convertirse en la infraestructura tecnológica y humana líder a nivel global para la contratación, capacitación y gestión de personal de cuidado familiar y doméstico de alto nivel, fusionando la precisión algorítmica con la preservación de los valores afectivos y culturales latinos.

### Objetivos de Negocio (MVP v1)

1. **LTV / CAC Ratio:** Alcanzar un ratio LTV/CAC > 4x mediante el modelo recurrente de membresías de residencia y gestión de nómina.

2. **Eficiencia en Matching:** Reducir el tiempo promedio de colocación de 3 semanas (agencias tradicionales) a menos de 72 horas.

3. **Retención laboral:** Lograr una tasa de permanencia del personal en los hogares > 85% a los 12 meses gracias al algoritmo de compatibilidad afectiva.

4. **Graduados Edupreneur:** Capacitar y certificar a una primera cohorte de 100 nannies con el "Sello Elite" financiado vía ISA.

## 2. Motor Configurador Multi-Nicho (*Segment Engine Configurator*)

La plataforma adapta dinámicamente sus campos de datos, algoritmos y diseño visual según el segmento activado por el usuario:

```
                  ┌────────────────────────────────────────┐
                  │    CONFIGURADOR MULTI-NICHO DE PRODUCTO│
                  └───────────────────┬────────────────────┘
                                      │
     ┌─────────────────┬──────────────┴──────────────┬──────────────────┐
     │                 │                             │                  │
┌────▼───────────┐ ┌───▼──────────────┐ ┌────────────▼─────┐ ┌──────────▼────────┐
│ UHNW / VIP     │ │ TRADICIONAL LATINO│ │ POSPARTO & DOULA │ │ ACOMPAÑAMIENTO   │
│ EXECUTIVE      │ │ DIÁSPORA         │ │ & MATERNIDAD     │ │ SENIOR DIGNO     │
└────────────────┘ └──────────────────┘ └──────────────────┘ └──────────────────┘

```

| Parámetro de Configuración | Nicho 1: UHNW Executive | Nicho 2: Tradicional Latino | Nicho 3: Posparto & Doula | Nicho 4: Senior Companion | 
 | ----- | ----- | ----- | ----- | ----- | 
| **Atributo Clave Target** | Discreción, protocolo, ciberseguridad, pasaporte abierto. | Calidez materna, cocina reconfortante, idioma español, modales. | Manejo de *cuarentena*, lactancia, baños tradicionales, apoyo nocturno. | Estimulación cognitiva, preservación de memoria, acompañamiento. | 
| **Peso Algoritmo ICA (**$W$**)** | $W_O$ (Operativo/Viajes) = 40% | $W_C$ (Cultura/Valores) = 45% | $W_H$ (Skills Clínicos) = 40% | $W_E$ (Afinidad EQ) = 45% | 
| **Verificación Requerida** | Antecedentes internacionales, toxicológico, NDA estricto. | Verificación de referencias de hogar, historial de salud. | Certificación en RCP pediátrico, certificación en lactancia. | Certificación gerontológica básica, prueba de empatía. | 
| **Modelo de Cobro** | \$2,500 - $5,000 USD Fee por colocación + Membresía VIP. | Fee de colocación (1.5 meses de sueldo) + Suscripción. | Paquetes cerrados por semanas (\$1,500 - $6,000 USD). | Bolsa de horas mensual / Suscripción de Care Management. | 

## 3. Especificación de Módulos Funcionales

### Módulo A: AfectoMatch Engine (Algoritmo de Matching Vectorial)

#### Flujo de Cálculo del Índice de Compatibilidad Afectiva (ICA)

El sistema calcula la compatibilidad entre una Familia ($F$) y una Cuidadora ($C$) aplicando la fórmula:

$$
ICA = (W_H \cdot S_H) + (W_C \cdot S_C) + (W_E \cdot S_E) + (W_O \cdot S_O)
$$

Donde:

* $S_H$: Score de Filtros Duros y Habilidades ($1.0$ si cumple 100% de requisitos de seguridad y certificación; $0.0$ si falla en alguno).

* $S_C$: Score Coseno entre los embeddings del vector de tradición y cultura ($CosSim(V_{cultural}^F, V_{cultural}^C)$).

* $S_E$: Score de afinidad temperamental y coeficiente emocional.

* $S_O$: Score de adaptabilidad a la logística operativa del hogar.

#### Evaluación Sintética Agéntica (Etapa 3 - LangGraph)

Si el $ICA > 80\%$, el agente LLM ejecuta una síntesis comparativa generando un reporte con la siguiente estructura:

1. **Puntos de Alineación Clave:** Coincidencia en valores y estilo de crianza.

2. **Posibles Zonas de Fricción:** Diferencias menores en horarios o rutinas.

3. **Pregunta Sugerida para la Entrevista:** Pregunta personalizada para profundizar en el punto de tensión detectado.

### Módulo B: Edupreneur Academy & ISA Management

#### Reglas de Negocio del Contrato ISA (Income Share Agreement)

1. **Costo de Capacitación:** \$0 USD iniciales para la cuidadora seleccionada.

2. **Umbral de Ingreso Mínimo:** El cobro del ISA solo se activa si el empleo conseguido mediante la plataforma paga un salario mínimo mensual ajustado al país (ej. > \$1,200 USD/mes en EE.UU. o > $18,000 MXN en México).

3. **Porcentaje de Retención:** 10% del salario bruto mensual.

4. **Cap de Pago (Pago Máximo):** El cobro se detiene al acumular 1.5x el costo nominal del bootcamp o al transcurrir 24 meses, lo que ocurra primero.

## 4. Modelo de Datos y Schemas SQL (`Supabase / PostgreSQL`)

```
-- Activación de extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";

-- Enum para definir el nicho de mercado
CREATE TYPE market_niche AS ENUM (
  'uhnw_executive', 
  'latino_traditional', 
  'postpartum_doula', 
  'senior_companion'
);

-- Tabla de Familias / Clientes
CREATE TABLE families (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  selected_niche market_niche NOT NULL DEFAULT 'latino_traditional',
  location_geography POINT,
  budget_range_usd INT4RANGE,
  family_culture_description TEXT,
  embedding_cultural vector(1536), -- Vector de valores culturales
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Cuidadoras / Nannies
CREATE TABLE caregivers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  is_verified BOOLEAN DEFAULT FALSE,
  has_active_visa BOOLEAN DEFAULT FALSE,
  certification_level VARCHAR(50) DEFAULT 'Standard', -- 'Standard', 'Elite_Sello_Tribu'
  bio_narrative TEXT,
  embedding_cultural vector(1536), -- Vector de identidad y estilo de cuidado
  embedding_emotional vector(1536), -- Vector de temperamento y EQ
  hourly_rate_usd NUMERIC(10, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla del Motor de Matches
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  caregiver_id UUID REFERENCES caregivers(id) ON DELETE CASCADE,
  ica_score NUMERIC(5, 2) NOT NULL, -- Puntuación de 0.00 a 100.00
  match_details JSONB, -- Contiene pros, contras y análisis agéntico LLM
  status VARCHAR(50) DEFAULT 'Suggested', -- 'Suggested', 'Interviewing', 'Placed', 'Rejected'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Acuerdos ISA (Edupreneur FinTech)
CREATE TABLE isa_contracts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  caregiver_id UUID REFERENCES caregivers(id) ON DELETE CASCADE,
  total_tuition_usd NUMERIC(10, 2) NOT NULL,
  retention_percentage NUMERIC(4, 2) DEFAULT 10.00, -- 10%
  cap_amount_usd NUMERIC(10, 2) NOT NULL, -- Pago máximo
  amount_paid_usd NUMERIC(10, 2) DEFAULT 0.00,
  status VARCHAR(50) DEFAULT 'Pending_Placement', -- 'Pending_Placement', 'Active', 'Completed'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Función de búsqueda por distancia coseno en vector espacial
CREATE OR REPLACE FUNCTION search_caregivers_by_affinity(
  query_embedding vector(1536),
  match_threshold FLOAT,
  match_count INT
)
RETURNS TABLE (
  id UUID,
  full_name VARCHAR,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    caregivers.id,
    caregivers.full_name,
    1 - (caregivers.embedding_cultural <=> query_embedding) AS similarity
  FROM caregivers
  WHERE 1 - (caregivers.embedding_cultural <=> query_embedding) > match_threshold
  ORDER BY caregivers.embedding_cultural <=> query_embedding
  LIMIT match_count;
END;
$$;

```

## 5. Especificación de APIs REST / GraphQL (Contratos de Interface)

### Endpoint: Generar Match Multi-Nicho

* **Method:** `POST`

* **Route:** `/api/v1/matching/generate`

* **Headers:** `Authorization: Bearer <token>`

* **Request Body:**

```
{
  "family_id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "niche_override": "latino_traditional",
  "filters_hard": {
    "must_have_passport": true,
    "max_distance_km": 50,
    "languages": ["Spanish", "English"]
  },
  "weights_custom": {
    "cultural": 0.40,
    "emotional": 0.30,
    "operational": 0.20,
    "skills": 0.10
  }
}

```

* **Response Body (200 OK):**

```
{
  "status": "success",
  "matches_found": 1,
  "data": [
    {
      "candidate_id": "c4a3b8e1-1234-5678-90ab-cdef12345678",
      "masked_name": "María G. (Sello Elite)",
      "ica_score": 94.50,
      "breakdown": {
        "cultural_affinity": 96.00,
        "emotional_eq": 93.00,
        "operational_fit": 92.00,
        "hard_skills": 100.00
      },
      "agent_synthesis": {
        "pros": [
          "Especialista en nutrición tradicional posparto y caldos reconfortantes.",
          "Cero uso de pantallas en rutinas infantiles comprobado.",
          "Bilingüe nativo español con inglés fluido para apoyo escolar."
        ],
        "cons": [
          "Prefiere modalidad externa sin pernocta los fines de semana."
        ],
        "suggested_interview_question": "¿Cómo gestionas la introducción de límites de sueño cuando los padres tienen horarios de trabajo extendidos?"
      }
    }
  ]
}

```

## 6. Métricas de Éxito y Dashboard KPI

1. **North Star Metric:** Número de horas de cuidado de alta calidad y afinidad entregadas con satisfacción > 95%.

2. **Métricas de Algoritmo:**

   * Precision@3 del AfectoMatch Engine (% de veces que la familia contrata a una de las top 3 candidatas sugeridas).

   * Variance Index de Calificación Afectiva (estabilidad de la puntuación de satisfacción a los 30, 60 y 90 días).

3. **Métricas FinTech Edupreneur:**

   * Tasa de recuperación de fondos ISA a los 6 meses post-graduación.

   * Incremento salarial promedio de la nanny pos-certificación ($S_{post} / S_{pre} \ge 1.8x$).