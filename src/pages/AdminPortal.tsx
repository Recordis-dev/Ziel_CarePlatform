import React, { useState } from 'react';
import {
  ShieldCheck, Brain, DollarSign, UserCheck, Sliders,
  CheckCircle, AlertCircle, FileText, Sparkles, UserPlus, Eye
} from 'lucide-react';
import { MOCK_CANDIDATES, NICHES } from '../data/mockData';
import { useBrand } from '../context/BrandContext';

export const AdminPortal: React.FC = () => {
  const { config, version } = useBrand();
  const [activeTab, setActiveTab] = useState<'candidates' | 'studio' | 'isa' | 'dev_spec'>('candidates');

  const [culturalWeight, setCulturalWeight] = useState(0.40);
  const [eqWeight, setEqWeight] = useState(0.30);
  const [operationalWeight, setOperationalWeight] = useState(0.20);
  const [skillsWeight, setSkillsWeight] = useState(0.10);

  return (
    <div
      className={`min-h-screen pb-20 ${config.fontBody}`}
      style={{ backgroundColor: config.colors.bgLight, color: config.colors.textPrimary }}
    >

      {/* Header */}
      <section
        className="border-b py-8"
        style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs opacity-75 mb-1">
              <span>Nannypairer & Concierge Agency Dashboard</span>
              <span>•</span>
              <span className="font-semibold" style={{ color: config.colors.accent }}>ZIEL Matching Engine ({version.toUpperCase()})</span>
            </div>
            <h1 className={`text-2xl font-bold ${config.fontHeading}`}>Portal Concierge & Nannypairer Agency</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('candidates')}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'candidates' ? config.colors.primary : 'transparent',
                color: activeTab === 'candidates' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              Candidatas & Zielers
            </button>
            <button
              onClick={() => setActiveTab('studio')}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'studio' ? config.colors.primary : 'transparent',
                color: activeTab === 'studio' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              AfectoMatch Weight Studio
            </button>
            <button
              onClick={() => setActiveTab('isa')}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'isa' ? config.colors.primary : 'transparent',
                color: activeTab === 'isa' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              Monitor FinTech ISA
            </button>
            <button
              onClick={() => setActiveTab('dev_spec')}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors border opacity-80"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'dev_spec' ? config.colors.primary : 'transparent',
                color: activeTab === 'dev_spec' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              ⚙️ Detalle Interno Dev
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {activeTab === 'candidates' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center">
                <UserCheck className="w-5 h-5 mr-2" style={{ color: config.colors.accent }} />
                Verificación Concierge de Candidatas & Otorgamiento de Sello Elite
              </h2>
              <button
                className="px-4 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5"
                style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', borderColor: config.colors.border }}
              >
                <UserPlus className="w-4 h-4" />
                Registrar Nueva Zieler
              </button>
            </div>

            <div className="border rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
              <table className="w-full text-left text-xs">
                <thead className="opacity-75 font-semibold uppercase text-[10px] border-b" style={{ borderColor: config.colors.border }}>
                  <tr>
                    <th className="p-4">Candidata / Zieler</th>
                    <th className="p-4">Nicho Asignado</th>
                    <th className="p-4">Background Check</th>
                    <th className="p-4">Estado Sello Elite</th>
                    <th className="p-4 text-right">Acciones Concierge</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: config.colors.border }}>
                  {MOCK_CANDIDATES.map((cand) => (
                    <tr key={cand.id} className="hover:opacity-90">
                      <td className="p-4 font-semibold">{cand.name}</td>
                      <td className="p-4 uppercase text-[10px] opacity-75">{cand.nicheId}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center font-semibold" style={{ color: config.colors.accent }}>
                          <CheckCircle className="w-3.5 h-3.5 mr-1" /> Verified 100%
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded border font-bold text-[11px]" style={{ borderColor: config.colors.border, color: config.colors.accent }}>
                          {cand.certification}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="px-3 py-1.5 rounded text-[11px] border font-semibold" style={{ borderColor: config.colors.border }}>
                          Ver Expediente Completo
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'studio' && (
          <div className="border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold flex items-center">
                  <Sliders className="w-5 h-5 mr-2" style={{ color: config.colors.accent }} />
                  AfectoMatch Weight Studio ({config.tagline})
                </h2>
                <p className="text-xs opacity-75 mt-1">Calibración de ponderadores algorítmicos para emparejamiento de familias y Zielers</p>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full border" style={{ borderColor: config.colors.border, color: config.colors.accent }}>
                Suma Total: {((culturalWeight + eqWeight + operationalWeight + skillsWeight) * 100).toFixed(0)}%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl border" style={{ borderColor: config.colors.border }}>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>W_C: Ponderador Cultural / Tradición</span>
                  <span className="font-mono font-bold" style={{ color: config.colors.accent }}>{(culturalWeight * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0" max="1" step="0.05"
                  value={culturalWeight}
                  onChange={(e) => setCulturalWeight(Number(e.target.value))}
                  className="w-full h-2 rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>W_E: Ponderador Emocional / EQ</span>
                  <span className="font-mono font-bold" style={{ color: config.colors.accent }}>{(eqWeight * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0" max="1" step="0.05"
                  value={eqWeight}
                  onChange={(e) => setEqWeight(Number(e.target.value))}
                  className="w-full h-2 rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>W_O: Ponderador Operativo</span>
                  <span className="font-mono font-bold" style={{ color: config.colors.accent }}>{(operationalWeight * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0" max="1" step="0.05"
                  value={operationalWeight}
                  onChange={(e) => setOperationalWeight(Number(e.target.value))}
                  className="w-full h-2 rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>W_H: Ponderador Skills Clínicos</span>
                  <span className="font-mono font-bold" style={{ color: config.colors.accent }}>{(skillsWeight * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0" max="1" step="0.05"
                  value={skillsWeight}
                  onChange={(e) => setSkillsWeight(Number(e.target.value))}
                  className="w-full h-2 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'isa' && (
          <div className="border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
            <h2 className="text-xl font-bold flex items-center">
              <DollarSign className="w-5 h-5 mr-2" style={{ color: config.colors.accent }} />
              Monitor Global FinTech ISA (Recuperación de Fondos)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Contratos ISA Activos</div>
                <div className="text-2xl font-bold font-mono mt-1">42 Contratos</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Retención Acumulada Mes</div>
                <div className="text-2xl font-bold font-mono mt-1" style={{ color: config.colors.accent }}>$10,080.00 USD</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Tasa de Recuperación (6 Meses)</div>
                <div className="text-2xl font-bold font-mono mt-1" style={{ color: config.colors.accent }}>98.4%</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dev_spec' && (
          <div className="border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm font-mono text-xs" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
            <div className="flex items-center space-x-2 text-amber-500 font-bold">
              <Brain className="w-4 h-4" />
              <span>Especificación Técnica Interna Dev & Pipeline Logs</span>
            </div>
            <p className="opacity-80 leading-relaxed">
              Esta sección contiene los registros técnicos de orquestación agéntica LangGraph, embeddings de pgvector (1536 dimensiones) y endpoints de integración FinTech.
            </p>
            <div className="p-4 rounded-xl border bg-black/10 space-y-2 opacity-90" style={{ borderColor: config.colors.border }}>
              <div>[LangGraph Evaluator]: Prompt pipeline loaded. Target Precision@3: 95.2%</div>
              <div>[pgvector DB]: Cosine similarity index active on `candidate_vectors`.</div>
              <div>[Stripe & Wise Rail]: Multi-currency automated withholding active.</div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
