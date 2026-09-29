# DevLog: Registro de Desarrollo y Arquitectura Histórica

**Proyecto:** All-in-One High-Level & Cultural Care Platform (MVP v1)  
**Estado:** Arquitectura de Fase 1 Completada / Preparativo de Implementación  
**Stack Principal:** Next.js 14 (App Router), Supabase (PostgreSQL + pgvector), LangGraph / Python (FastAPI), Tailwind CSS, Stripe + Wise API.

---

## 1. Evolución del Proyecto y Contexto Estratégico

El desarrollo de este sistema nació de la necesidad de resolver una fragmentación crítica en el mercado de *care economy* y *household staffing* de alto nivel. Las soluciones actuales se dividen en dos extremos ineficientes:
1. **Plataformas Masivas Transaccionales (ej. Care.com):** Carecen de filtros de seguridad rigurosos, evaluación psicométrica y adaptabilidad cultural.
2. **Agencias Boutique Tradicionales (ej. Morgan & Mallet):** Operan de forma 100% analógica, con costos de intermediación excesivos (15-25% del salario anual) y sin capacidad de escalabilidad tecnológica.

### Puntos de Inflexión Arquitectónicos
*   **Iteración 1 (Benchmark UHNW):** Identificación del nicho de ejecutivos, fundadores y *family offices* que exigen discreción (NDA), verificación policial/biométrica y movilidad transfronteriza (EE.UU. - Latam - Europa).
*   **Iteración 2 (Cuidado Tradicional Latino):** Incorporación del vector de *familismo*, contención emocional y la figura de la "abuela/tía" (*Efecto Abuela*), atendiendo el mercado posparto (*cuarentena*), estimulación temprana y acompañamiento senior con preservación del idioma español.
*   **Iteración 3 (Módulo Edupreneur):** Transición de modelo de agencia simple a un motor de aceleración laboral (EdTech + FinTech) mediante la *Nanny Academy* financiada vía acuerdos de ingresos compartidos (ISA).
*   **Iteración 4 (AfectoMatch Engine):** Diseño de un motor de búsqueda vectorial híbrido de 4 etapas que combina distancia coseno sobre embeddings culturales/emocionales con evaluación agéntica (LLM RAG).

---

## 2. Registro de Decisiones Técnicas Clave (ADR - Architecture Decision Records)

### ADR-001: Adopción de PostgreSQL + `pgvector` en Supabase
*   **Contexto:** Se requiere almacenar vectores multidimensionales para el perfilamiento afectivo, temperamental y cultural de familias y cuidadoras, manteniendo integridad referencial con los datos transaccionales.
*   **Decisión:** Utilizar `pgvector` en Supabase en lugar de bases de datos vectoriales dedicadas (Pinecone/Milvus).
*   **Razón:** Reduce la complejidad operativa, abarata costos en MVP v1 y permite ejecutar consultas híbridas (filtros duros SQL + búsqueda por distancia coseno) en una sola transacción.

### ADR-002: Separación del Motor Agéntico en Servicio FastAPI + LangGraph
*   **Contexto:** La evaluación sintáctico-cualitativa de la Etapa 3 del algoritmo requiere orquestación de prompts complejos, RAG y llamadas a LLMs.
*   **Decisión:** Implementar un microservicio independiente en Python usando FastAPI y LangGraph, desacoplado del frontend en Next.js.
*   **Razón:** Facilita el mantenimiento de los flujos de agentes, la prueba de prompts y el escalamiento independiente de cargas pesadas de procesamiento de lenguaje natural.

### ADR-003: Modelo Configurable Multi-Nicho (*Modular Segment Engine*)
*   **Contexto:** La plataforma debe atender tanto a familias UHNW (enfoque en protocolo, ciberseguridad y viajes) como a familias latinas tradicionales (enfoque en nutrición reconfortante, *cuarentena* y afecto).
*   **Decisión:** Crear un sistema de flags y esquemas dinámicos JSON Schema en la base de datos que ajustan la interfaz, las pruebas psicométricas y los pesos del algoritmo según el segmento seleccionado (`uhnw_executive`, `latino_traditional`, `postpartum_doula`, `senior_companion`).

---

## 3. Matriz de Decisiones e Historia de Cambios

| Fecha | Componente | Decisión / Cambio | Impacto en el Sistema |
| :--- | :--- | :--- | :--- |
| **Q3 2026** | **Core DB** | Definición del Vector Unificado de Perfilamiento (`V_hard`, `V_cultural`, `V_afectivo`, `V_operativo`). | Permite representar la compatibilidad en un espacio vectorial de 1536 dimensiones. |
| **Q3 2026** | **AfectoMatch** | Formulación de la ecuación del Índice de Compatibilidad Afectiva ($ICA$). | Pesos dinámicos: 35% Cultura, 30% EQ, 20% Operativo, 15% Hard Skills. |
| **Q3 2026** | **Fintech** | Integración del motor de contratos ISA (Income Share Agreement). | Automatización de cobros retenidos en nómina tras la colocación laboral exitosa de la nanny. |
| **Q3 2026** | **Compliance** | Sistema de visibilidad enmascarada (*Masked Profiles*). | Los datos sensibles de las familias UHNW se ocultan hasta la aprobación previa de ambas partes. |

---

## 4. Estado Actual y Próximos Pasos Tecnológicos

```
[Diseño de Arquitectura] ➔ [Definición de PRD & DB Schema] ➔ [Desarrollo Backend FastAPI/Supabase] ➔ [Frontend Next.js]
         ▲                                ▲
     COMPLETADO                       EN PROCESO
```

*   **Completado:** Especificación del modelo de datos, diseño del motor de matching, definición de rutas y matriz de brechas.
*   **En Proceso:** Creación de los scripts de migración SQL en Supabase y configuración del repositorio monorepo (Turborepo).