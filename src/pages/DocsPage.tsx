import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Code, Database, Cpu, FileText, Layers, Terminal } from 'lucide-react';

export const DocsPage: React.FC = () => {
  const { docSection } = useParams<{ docSection: string }>();
  const activeSection = docSection || 'architecture';

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-20">

      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs text-emerald-400 font-mono mb-1">
            <Terminal className="w-4 h-4" />
            <span>ZIEL Developer & Architecture Docs v1.0</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Especificación Técnica & API Reference</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Sidebar Nav */}
        <div className="lg:col-span-3 space-y-2">
          <Link
            to="/docs/architecture"
            className={`block px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${activeSection === 'architecture' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
          >
            <div className="flex items-center"><Layers className="w-4 h-4 mr-2" /> Arquitectura de Módulos</div>
          </Link>

          <Link
            to="/docs/database"
            className={`block px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${activeSection === 'database' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
          >
            <div className="flex items-center"><Database className="w-4 h-4 mr-2" /> PostgreSQL & pgvector Schema</div>
          </Link>

          <Link
            to="/docs/api"
            className={`block px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${activeSection === 'api' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
          >
            <div className="flex items-center"><Cpu className="w-4 h-4 mr-2" /> Especificación API REST</div>
          </Link>

          <Link
            to="/docs/devlog"
            className={`block px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${activeSection === 'devlog' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
          >
            <div className="flex items-center"><FileText className="w-4 h-4 mr-2" /> DevLog & Decisiones (ADR)</div>
          </Link>
        </div>

        {/* Content View */}
        <div className="lg:col-span-9 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">

          {activeSection === 'architecture' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Arquitectura de Módulos del Sistema</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                El sistema se organiza en 4 módulos centrales interconectados y desacoplados para soportar despliegues multi-nicho y operaciones transfronterizas.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="font-bold text-emerald-400 text-sm">Módulo 1: Engine AfectoMatch</div>
                  <p className="text-xs text-slate-400">Intake questionnaire, vectorización vía text-embedding-3-large (1536d), pgvector cosine search y evaluador agéntico LangGraph.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="font-bold text-emerald-400 text-sm">Módulo 2: Edupreneur Academy & ISA Management</div>
                  <p className="text-xs text-slate-400">LMS móvil, evaluación Sello Elite y contratos FinTech Income Share Agreement ($0 inicial, 10% retención, 1.5x cap).</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="font-bold text-emerald-400 text-sm">Módulo 3: Trust, Safety & Compliance Engine</div>
                  <p className="text-xs text-slate-400">Integración con APIs de antecedentes criminales/penales, biometría facial, encriptado NDA Vault y validador automatizado de referencias.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="font-bold text-emerald-400 text-sm">Módulo 4: Payroll, Legal & Cross-Border Logistics</div>
                  <p className="text-xs text-slate-400">Generación de smart contracts laborales (EE.UU., México, Colombia, España), riel de pago multi-divisa (Stripe/Wise) y concierge sustitutos &lt; 24h.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'database' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Esquemas PostgreSQL & pgvector</h2>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto text-xs font-mono text-emerald-300">
                <pre>{`-- Activación de extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";

-- Enum para definir el nicho de mercado
CREATE TYPE market_niche AS ENUM (
  'uhnw_executive',
  'latino_traditional',
  'postpartum_doula',
  'senior_companion'
);

-- Tabla de Cuidadoras / Nannies
CREATE TABLE caregivers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  certification_level VARCHAR(50) DEFAULT 'Standard',
  embedding_cultural vector(1536),
  embedding_emotional vector(1536),
  hourly_rate_usd NUMERIC(10, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}</pre>
              </div>
            </div>
          )}

          {activeSection === 'api' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">API REST Reference — Matching Endpoint</h2>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono">
                <div className="text-emerald-400 font-bold mb-2">POST /api/v1/matching/generate</div>
                <pre className="text-slate-300">{`{
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
}`}</pre>
              </div>
            </div>
          )}

          {activeSection === 'devlog' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Registro de Desarrollo & Decisiones (ADR)</h2>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="font-bold text-white mb-1">ADR-001: Adopción de PostgreSQL + pgvector en Supabase</div>
                  <p className="text-slate-400">Reduce complejidad operativa al combinar almacenamiento transaccional de familias/cuidadoras con búsqueda vectorial por distancia coseno en una sola base de datos.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="font-bold text-white mb-1">ADR-002: Servicio Separado en FastAPI + LangGraph</div>
                  <p className="text-slate-400">Desacopla el procesamiento de evaluación cualitativa agéntica del frontend, permitiendo la actualización de prompts y flujos RAG de manera independiente.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
