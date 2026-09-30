import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShieldCheck, Heart, CheckCircle, Brain, Star, ArrowRight,
  Lock, Sparkles, UserCheck, Shield, ChevronRight, AlertCircle
} from 'lucide-react';
import { NICHES, MOCK_CANDIDATES } from '../data/mockData';

export const NicheLanding: React.FC = () => {
  const { nicheSlug } = useParams<{ nicheSlug: string }>();

  const niche = Object.values(NICHES).find(n => n.slug === nicheSlug) || NICHES.latino_traditional;
  const candidates = MOCK_CANDIDATES.filter(c => c.niche === niche.id);

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-20">

      {/* Niche Hero */}
      <section className="relative pt-12 pb-16 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link to="/" className="hover:text-emerald-400">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-emerald-400 font-semibold">{niche.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Segmento Configurado
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                {niche.name}
              </h1>
              <p className="text-xl text-emerald-300 font-medium">
                {niche.subtitle}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {niche.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  to="/family/onboarding"
                  className="px-5 py-3 rounded-xl font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all text-sm inline-flex items-center"
                >
                  Solicitar Personal {niche.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-72">
              <img
                src={niche.heroImage}
                alt={niche.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* Niche Parameters & Weights Breakdown */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Parámetros Algorítmicos & Modelo de Cobro</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Target Key Attribute</div>
            <div className="text-sm font-semibold text-white">{niche.targetAttribute}</div>
            <p className="text-xs text-slate-400">Atributos prioritarios capturados durante el intake psicométrico.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Verificación de Seguridad</div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {niche.requiredVerification.map((v, i) => (
                <li key={i} className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400 flex-shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Modelo Económico</div>
            <div className="text-sm font-semibold text-emerald-300">{niche.pricingModel}</div>
            <p className="text-xs text-slate-400">Contratación respaldada con garantía de sustitución en 90 días.</p>
          </div>
        </div>
      </section>

      {/* Suggested Candidate Feed for this Niche */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Candidatas Sugeridas (AfectoMatch Feed)</h2>
            <p className="text-xs text-slate-400 mt-1">Expedientes procesados con evaluación agéntica LangGraph LLM RAG</p>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
            {candidates.length} candidatas activas
          </span>
        </div>

        {candidates.length > 0 ? (
          <div className="space-y-6">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-center space-x-4">
                    <img
                      src={candidate.avatarUrl}
                      alt={candidate.masked_name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/30"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-lg text-white">{candidate.masked_name}</h3>
                        {candidate.isMasked && (
                          <span className="inline-flex items-center text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                            <Lock className="w-3 h-3 mr-1" /> Masked Profile
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{candidate.location} • {candidate.experience_years} años de experiencia</p>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 text-right sm:text-right">
                    <div className="text-xs text-slate-400 font-medium">Índice ICA Score</div>
                    <div className="text-2xl font-black text-emerald-400 font-mono">{candidate.ica_score.toFixed(2)}%</div>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="text-slate-400">Cultura</div>
                    <div className="text-base font-bold text-emerald-400 font-mono">{candidate.breakdown.cultural.toFixed(1)}%</div>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="text-slate-400">EQ / Afectivo</div>
                    <div className="text-base font-bold text-teal-300 font-mono">{candidate.breakdown.eq.toFixed(1)}%</div>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="text-slate-400">Operativo</div>
                    <div className="text-base font-bold text-cyan-300 font-mono">{candidate.breakdown.operational.toFixed(1)}%</div>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="text-slate-400">Skills Clínicos</div>
                    <div className="text-base font-bold text-emerald-400 font-mono">{candidate.breakdown.skills.toFixed(1)}%</div>
                  </div>
                </div>

                {/* Agent Synthesis Report */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    <Brain className="w-4 h-4 text-emerald-400" />
                    <span>Síntesis Agéntica LLM (LangGraph Evaluator)</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="font-semibold text-slate-300 mb-1">Pros & Puntos de Alineación:</div>
                      <ul className="space-y-1 text-slate-400">
                        {candidate.agent_synthesis.pros.map((p, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mr-1.5 flex-shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-slate-300 mb-1">Zonas de Atención / Consideraciones:</div>
                      <ul className="space-y-1 text-slate-400">
                        {candidate.agent_synthesis.cons.map((c, i) => (
                          <li key={i} className="flex items-start">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-400 mr-1.5 flex-shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <div className="text-xs font-semibold text-emerald-300">Pregunta Sugerida para la Entrevista:</div>
                    <p className="text-xs italic text-slate-300 mt-1">"{candidate.agent_synthesis.interview_question}"</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/family/interviews"
                    className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    Agendar Entrevista Virtual
                  </Link>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-sm">
            No hay candidatas visibles actualmente sin firmar el NDA para este nicho. Inicia el onboarding de familia para recibir matches directos.
          </div>
        )}
      </section>

    </div>
  );
};
