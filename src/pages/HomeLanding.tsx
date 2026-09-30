import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Heart, GraduationCap, Briefcase, ChevronRight,
  Star, Brain, CheckCircle, Lock, AlertCircle, Sparkles,
  Activity, ArrowRight, UserCheck, Layers, BookOpen, Shield, Globe
} from 'lucide-react';
import { NICHES, MOCK_CANDIDATES, MODULES_INFO } from '../data/mockData';

export const HomeLanding: React.FC = () => {
  const [selectedNicheKey, setSelectedNicheKey] = useState<string>('latino_traditional');
  const activeNiche = NICHES[selectedNicheKey];

  const filteredCandidates = MOCK_CANDIDATES.filter(c => c.niche === selectedNicheKey);

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Motor Algorítmico Multi-Nicho v1.0 & LangGraph RAG</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Plataforma Multi-Nicho de <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Cuidado Familiar & Staffing VIP</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Unimos la precisión de la búsqueda por vectores (<code className="text-emerald-400 font-mono text-sm">pgvector</code>) con el cálculo del Índice de Compatibilidad Afectiva (ICA) y la aceleración Edupreneur con financiamiento ISA.
              </p>

              {/* Key Business Performance Metrics */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-800/80">
                <div>
                  <div className="text-2xl font-bold text-emerald-400">&gt; 4.0x</div>
                  <div className="text-xs text-slate-400 font-medium">LTV / CAC Target</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">&lt; 72 hrs</div>
                  <div className="text-xs text-slate-400 font-medium">Tiempo Colocación</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">&gt; 85%</div>
                  <div className="text-xs text-slate-400 font-medium">Retención a 12 meses</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/family/onboarding"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-emerald-500/25"
                >
                  Configurar Intake Familia
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/academy"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
                >
                  <GraduationCap className="w-4 h-4 mr-2 text-emerald-400" />
                  Edupreneur Academy & ISA
                </Link>
              </div>
            </div>

            {/* Interactive Hero Card */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-sm text-white">Simulador AfectoMatch Engine</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  ICA Score Demo
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-xs text-slate-400 mb-1">Ecuación Algorítmica Multi-Nicho</div>
                  <div className="text-sm font-mono text-emerald-300 overflow-x-auto py-1">
                    ICA = (W_H · S_H) + (W_C · S_C) + (W_E · S_E) + (W_O · S_O)
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Afinidad Cultural/Tradición (W_C)</span>
                    <span className="font-mono text-emerald-400">{(activeNiche.weights.cultural * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: `${activeNiche.weights.cultural * 100}%` }} />
                  </div>

                  <div className="flex justify-between text-xs text-slate-300 pt-1">
                    <span>Afinidad Temperamental / EQ (W_E)</span>
                    <span className="font-mono text-emerald-400">{(activeNiche.weights.emotional * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-teal-400 h-full" style={{ width: `${activeNiche.weights.emotional * 100}%` }} />
                  </div>

                  <div className="flex justify-between text-xs text-slate-300 pt-1">
                    <span>Adaptabilidad Operativa (W_O)</span>
                    <span className="font-mono text-emerald-400">{(activeNiche.weights.operational * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full" style={{ width: `${activeNiche.weights.operational * 100}%` }} />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Vector: <code className="text-slate-200">text-embedding-3-large (1536d)</code></span>
                  <Link to="/docs/architecture" className="text-emerald-400 hover:underline flex items-center">
                    Ver Doc Tecnica <ChevronRight className="w-3 h-3 ml-0.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Engine Configurator Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Configurador Multi-Nicho de Producto
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Selecciona el segmento de mercado para explorar la adaptación de la interfaz, los pesos del algoritmo ICA y los controles de seguridad requeridos.
          </p>
        </div>

        {/* Niche Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {Object.values(NICHES).map((niche) => {
            const isSelected = niche.id === selectedNicheKey;
            return (
              <button
                key={niche.id}
                onClick={() => setSelectedNicheKey(niche.id)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`}>
                  Nicho {niche.id === 'latino_traditional' ? '1' : niche.id === 'uhnw_executive' ? '2' : niche.id === 'postpartum_doula' ? '3' : '4'}
                </div>
                <div className="font-bold text-sm text-white">{niche.name}</div>
              </button>
            );
          })}
        </div>

        {/* Active Niche Detailed Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                Segmento Activo: {activeNiche.name}
              </span>
              <h3 className="text-2xl font-bold text-white">{activeNiche.subtitle}</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">{activeNiche.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Atributo Clave Target</div>
                <div className="text-xs text-slate-200 mt-1 font-semibold">{activeNiche.targetAttribute}</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Modelo de Cobro & Monetización</div>
                <div className="text-xs text-emerald-400 mt-1 font-semibold">{activeNiche.pricingModel}</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Verificación & Compliance Requerido</div>
              <div className="flex flex-wrap gap-2">
                {activeNiche.requiredVerification.map((req, idx) => (
                  <span key={idx} className="inline-flex items-center text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                to={`/${activeNiche.slug}`}
                className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Ver Propuesta de Valor Completa del Nicho <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-800 min-h-[260px]">
            <img
              src={activeNiche.heroImage}
              alt={activeNiche.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur border border-slate-800">
              <div className="text-xs font-semibold text-emerald-400 mb-1">Candidatas Pre-seleccionadas</div>
              <div className="text-xs text-slate-300">
                {filteredCandidates.length > 0
                  ? `${filteredCandidates.length} perfil(es) sugerido(s) con ICA > 90.00%`
                  : 'Sistemas de Vector Search activos en Supabase pgvector'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Modules Section */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white">
              Arquitectura de Módulos Operativos
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Sistema desacoplado en 4 módulos centrales para máxima adaptabilidad entre mercados y jurisdicciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODULES_INFO.map((mod) => (
              <div key={mod.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400 font-bold">
                    {mod.id === 'afectomatch' ? <Brain className="w-5 h-5" /> : mod.id === 'edupreneur' ? <GraduationCap className="w-5 h-5" /> : mod.id === 'trust-safety' ? <ShieldCheck className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-white text-base mb-3">{mod.title}</h3>
                  <div className="space-y-2 mb-4">
                    {mod.submodules.map((sub) => (
                      <div key={sub.code} className="text-xs text-slate-300 bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span className="font-mono text-emerald-400 font-semibold mr-1.5">{sub.code}</span>
                        <span>{sub.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/docs/architecture"
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center pt-2"
                >
                  Especificación de Submódulos <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/30 shadow-2xl">
          <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white">¿Listo para activar el matching de alto nivel?</h2>
          <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">
            Accede al onboarding psicométrico o explora el currículum de la Edupreneur Academy para nannies y cuidadoras.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/family/onboarding"
              className="px-6 py-3 rounded-xl font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all text-sm"
            >
              Iniciar Intake como Familia
            </Link>
            <Link
              to="/caregiver/jobs"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm"
            >
              Postularse como Cuidadora
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
