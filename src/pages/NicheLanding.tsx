import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShieldCheck, CheckCircle, Brain, ArrowRight,
  Lock, ChevronRight, AlertCircle
} from 'lucide-react';
import { NICHES, MOCK_CANDIDATES } from '../data/mockData';
import { useBrand } from '../context/BrandContext';

export const NicheLanding: React.FC = () => {
  const { nicheSlug } = useParams<{ nicheSlug: string }>();
  const { config, version } = useBrand();

  const niche = NICHES.find(n => n.id === nicheSlug) || NICHES[1];
  const candidates = MOCK_CANDIDATES.filter(c => c.nicheId === niche.id);

  return (
    <div
      className={`min-h-screen pb-20 ${config.fontBody}`}
      style={{ backgroundColor: config.colors.bgLight, color: config.colors.textPrimary }}
    >

      {/* Niche Hero */}
      <section
        className="relative pt-12 pb-16 border-b"
        style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center space-x-2 text-xs opacity-75 mb-6">
            <Link to="/" className="hover:underline">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold" style={{ color: config.colors.accent }}>{niche.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold border font-mono"
                style={{ borderColor: config.colors.border, color: config.colors.accent }}
              >
                Segmento Configurado ({version.toUpperCase()})
              </span>
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${config.fontHeading}`}>
                {niche.name}
              </h1>
              <p className="text-xl font-medium" style={{ color: config.colors.accent }}>
                {niche.tagline}
              </p>
              <p className="text-sm leading-relaxed opacity-85">
                {niche.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  to="/portal/family"
                  className="px-5 py-3 rounded-xl font-semibold transition-all text-sm inline-flex items-center border"
                  style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', borderColor: config.colors.border }}
                >
                  Solicitar Personal {niche.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border shadow-2xl h-72" style={{ borderColor: config.colors.border }}>
              <img
                src="https://images.unsplash.com/photo-1581579438747-1dc8d1e05fec?auto=format&fit=crop&q=80&w=800"
                alt={niche.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* Niche Parameters */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-2xl font-bold mb-6 ${config.fontHeading}`}>Parámetros Algorítmicos & Modelo de Cobro</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 space-y-3 shadow-sm" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: config.colors.accent }}>Target Key Attribute</div>
            <div className="text-sm font-semibold">{niche.targetAudience}</div>
            <p className="text-xs opacity-75">Atributos prioritarios capturados durante el intake psicométrico.</p>
          </div>

          <div className="border rounded-2xl p-6 space-y-3 shadow-sm" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: config.colors.accent }}>Verificación de Seguridad</div>
            <ul className="space-y-1.5 text-xs">
              {niche.keyRequirements.map((v, i) => (
                <li key={i} className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" style={{ color: config.colors.accent }} />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border rounded-2xl p-6 space-y-3 shadow-sm" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: config.colors.accent }}>Modelo Económico</div>
            <div className="text-sm font-semibold" style={{ color: config.colors.accent }}>{niche.pricingInfo}</div>
            <p className="text-xs opacity-75">Contratación respaldada con garantía de sustitución en 90 días.</p>
          </div>
        </div>
      </section>

      {/* Suggested Candidate Feed */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className={`text-2xl font-bold ${config.fontHeading}`}>Candidatas Sugeridas (AfectoMatch Feed)</h2>
            <p className="text-xs opacity-75 mt-1">Expedientes procesados con evaluación agéntica LangGraph LLM RAG</p>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-full border font-mono" style={{ borderColor: config.colors.border, color: config.colors.accent }}>
            {candidates.length} candidatas activas
          </span>
        </div>

        {candidates.length > 0 ? (
          <div className="space-y-6">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b" style={{ borderColor: config.colors.border }}>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                      alt={candidate.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2"
                      style={{ borderColor: config.colors.border }}
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className={`font-bold text-lg ${config.fontHeading}`}>{candidate.name}</h3>
                        <span className="inline-flex items-center text-[10px] px-2 py-0.5 rounded border opacity-80 font-mono">
                          <Lock className="w-3 h-3 mr-1" /> Masked Profile
                        </span>
                      </div>
                      <p className="text-xs opacity-75 mt-0.5">Miami, FL • {candidate.experienceYears} años de experiencia</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border text-right" style={{ borderColor: config.colors.border }}>
                    <div className="text-xs opacity-75 font-medium">Índice ICA Score</div>
                    <div className="text-2xl font-black font-mono" style={{ color: config.colors.accent }}>{candidate.icaScore.toFixed(2)}%</div>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg border" style={{ borderColor: config.colors.border }}>
                    <div className="opacity-75">Cultura</div>
                    <div className="text-base font-bold font-mono" style={{ color: config.colors.accent }}>{candidate.culturalScore.toFixed(1)}%</div>
                  </div>
                  <div className="p-3 rounded-lg border" style={{ borderColor: config.colors.border }}>
                    <div className="opacity-75">EQ / Afectivo</div>
                    <div className="text-base font-bold font-mono" style={{ color: config.colors.accent }}>{candidate.emotionalScore.toFixed(1)}%</div>
                  </div>
                  <div className="p-3 rounded-lg border" style={{ borderColor: config.colors.border }}>
                    <div className="opacity-75">Operativo</div>
                    <div className="text-base font-bold font-mono" style={{ color: config.colors.accent }}>{candidate.operationalScore.toFixed(1)}%</div>
                  </div>
                  <div className="p-3 rounded-lg border" style={{ borderColor: config.colors.border }}>
                    <div className="opacity-75">Skills Clínicos</div>
                    <div className="text-base font-bold font-mono" style={{ color: config.colors.accent }}>{candidate.skillsScore.toFixed(1)}%</div>
                  </div>
                </div>

                {/* Agent Synthesis Report */}
                <div className="p-5 rounded-xl border space-y-3" style={{ borderColor: config.colors.border }}>
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider" style={{ color: config.colors.accent }}>
                    <Brain className="w-4 h-4" />
                    <span>Síntesis Agéntica LLM (LangGraph Evaluator)</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="font-semibold mb-1">Pros & Puntos de Alineación:</div>
                      <ul className="space-y-1 opacity-80">
                        {candidate.pros.map((p, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 mt-0.5" style={{ color: config.colors.accent }} />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold mb-1">Zonas de Atención / Consideraciones:</div>
                      <ul className="space-y-1 opacity-80">
                        {candidate.cons.map((c, i) => (
                          <li key={i} className="flex items-start">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-500 mr-1.5 flex-shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 border-t" style={{ borderColor: config.colors.border }}>
                    <div className="text-xs font-semibold" style={{ color: config.colors.accent }}>Pregunta Sugerida para la Entrevista:</div>
                    <p className="text-xs italic opacity-90 mt-1">"{candidate.interviewQuestion}"</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/portal/family"
                    className="px-4 py-2.5 rounded-lg text-xs font-semibold border"
                    style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', borderColor: config.colors.border }}
                  >
                    Agendar Entrevista Virtual
                  </Link>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="border rounded-2xl p-8 text-center text-xs opacity-75" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
            No hay candidatas visibles actualmente sin firmar el NDA para este nicho. Inicia el onboarding de familia para recibir matches directos.
          </div>
        )}
      </section>

    </div>
  );
};
