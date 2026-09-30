import React, { useState } from 'react';
import {
  ShieldCheck, Brain, DollarSign, UserCheck, Sliders,
  CheckCircle, AlertCircle, FileText
} from 'lucide-react';
import { MOCK_CANDIDATES, NICHES } from '../data/mockData';

export const AdminPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'candidates' | 'studio' | 'isa'>('candidates');

  const [culturalWeight, setCulturalWeight] = useState(0.40);
  const [eqWeight, setEqWeight] = useState(0.30);
  const [operationalWeight, setOperationalWeight] = useState(0.20);
  const [skillsWeight, setSkillsWeight] = useState(0.10);

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-20">

      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-slate-400 mb-1">
              <span>Concierge Admin Dashboard</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">ZIEL Operations Engine</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Portal de Administración & Matching Studio</h1>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('candidates')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'candidates' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Auditoría Candidatas
            </button>
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'studio' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              AfectoMatch Studio
            </button>
            <button
              onClick={() => setActiveTab('isa')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'isa' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Monitor FinTech ISA
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {activeTab === 'candidates' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <UserCheck className="w-5 h-5 text-emerald-400 mr-2" />
              Verificación de Candidatas & Otorgamiento de Sello Elite
            </h2>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-semibold uppercase text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-4">Candidata</th>
                    <th className="p-4">Nicho</th>
                    <th className="p-4">Background Check</th>
                    <th className="p-4">Sello Elite</th>
                    <th className="p-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {MOCK_CANDIDATES.map((cand) => (
                    <tr key={cand.id} className="hover:bg-slate-800/40">
                      <td className="p-4 font-semibold text-white">{cand.real_name}</td>
                      <td className="p-4 uppercase text-[10px] text-slate-400">{cand.niche}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center text-emerald-400 font-semibold">
                          <CheckCircle className="w-3.5 h-3.5 mr-1" /> Verified 100%
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                          ZIEL Elite Active
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[11px]">
                          Ver Expediente
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
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Sliders className="w-5 h-5 text-emerald-400 mr-2" />
                  AfectoMatch Weight Studio
                </h2>
                <p className="text-xs text-slate-400 mt-1">Ajuste manual de los ponderadores del algoritmo ICA para calibración de matching</p>
              </div>
              <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Suma Total: {((culturalWeight + eqWeight + operationalWeight + skillsWeight) * 100).toFixed(0)}%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>W_C: Ponderador Cultural / Tradición</span>
                  <span className="font-mono font-bold text-emerald-400">{(culturalWeight * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0" max="1" step="0.05"
                  value={culturalWeight}
                  onChange={(e) => setCulturalWeight(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-800 h-2 rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>W_E: Ponderador Emocional / EQ</span>
                  <span className="font-mono font-bold text-teal-300">{(eqWeight * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0" max="1" step="0.05"
                  value={eqWeight}
                  onChange={(e) => setEqWeight(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-800 h-2 rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>W_O: Ponderador Operativo</span>
                  <span className="font-mono font-bold text-cyan-300">{(operationalWeight * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0" max="1" step="0.05"
                  value={operationalWeight}
                  onChange={(e) => setOperationalWeight(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-800 h-2 rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>W_H: Ponderador Skills Clínicos</span>
                  <span className="font-mono font-bold text-emerald-400">{(skillsWeight * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0" max="1" step="0.05"
                  value={skillsWeight}
                  onChange={(e) => setSkillsWeight(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-800 h-2 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'isa' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <DollarSign className="w-5 h-5 text-emerald-400 mr-2" />
              Monitor Global FinTech ISA (Recuperación de Fondos)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Contratos ISA Activos</div>
                <div className="text-2xl font-bold text-white font-mono mt-1">42 Contratos</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Retención Acumulada Mes</div>
                <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">$10,080.00 USD</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Tasa de Recuperación (6 Meses)</div>
                <div className="text-2xl font-bold text-teal-300 font-mono mt-1">98.4%</div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
