import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Brain, Lock, CheckCircle, Calendar,
  DollarSign, Sparkles, UserCheck, ChevronRight
} from 'lucide-react';
import { MOCK_CANDIDATES, NICHES } from '../data/mockData';

export const FamilyPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matches' | 'interviews' | 'payroll'>('matches');

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-20">

      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-slate-400 mb-1">
              <span>Familia Residencia #802</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Nicho: Tradicional Latino & Diáspora</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Portal de Gestión Familiar & Matches</h1>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('matches')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'matches' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Feed de Matches (ICA Score)
            </button>
            <button
              onClick={() => setActiveTab('interviews')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'interviews' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Entrevistas Agendadas
            </button>
            <button
              onClick={() => setActiveTab('payroll')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'payroll' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Nómina Transfronteriza
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {activeTab === 'matches' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-sm font-semibold text-white">AfectoMatch Engine Activo</div>
                  <div className="text-xs text-slate-400">Algoritmo de 4 etapas con pgvector y evaluador agéntico LangGraph</div>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                Precision@3 Target 95%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_CANDIDATES.map((cand) => (
                <div key={cand.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <img src={cand.avatarUrl} alt={cand.masked_name} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h3 className="font-bold text-sm text-white">{cand.masked_name}</h3>
                        <p className="text-xs text-slate-400">{cand.location}</p>
                      </div>
                    </div>
                    <div className="text-right bg-slate-950 px-3 py-2 rounded-xl border border-emerald-500/30">
                      <div className="text-[10px] text-slate-400">ICA Score</div>
                      <div className="text-lg font-bold font-mono text-emerald-400">{cand.ica_score}%</div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl text-xs space-y-1">
                    <div className="text-slate-400 font-semibold">Pilares Afectivos:</div>
                    <div className="flex flex-wrap gap-1">
                      {cand.pillars.map((p, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[11px]">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1">
                    <div className="font-semibold text-emerald-400">Síntesis de Alineación:</div>
                    <p className="text-slate-400 leading-relaxed">{cand.agent_synthesis.pros[0]}</p>
                  </div>

                  <div className="pt-2 flex justify-between items-center border-t border-slate-800">
                    <span className="text-xs text-slate-500">Certificación: {cand.certifications[0]}</span>
                    <button
                      onClick={() => setActiveTab('interviews')}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                    >
                      Agendar Entrevista
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'interviews' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Calendar className="w-5 h-5 text-emerald-400 mr-2" />
              Entrevistas Virtuales Agendadas
            </h2>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center text-xs">
              <div>
                <div className="font-semibold text-white text-sm">Entrevista con María G. (ZIEL Elite)</div>
                <div className="text-slate-400 mt-0.5">Mañana a las 10:00 AM EST • Sala Encargada ZIEL Concierge</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">Confirmada</span>
            </div>
          </div>
        )}

        {activeTab === 'payroll' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <DollarSign className="w-5 h-5 text-emerald-400 mr-2" />
              Gestión de Nómina Transfronteriza (Multi-Currency Payment Rail)
            </h2>
            <p className="text-xs text-slate-400">Procesamiento automático de pagos, impuestos locales y retención ISA vía Stripe & Wise API.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Próximo Pago de Nómina</div>
                <div className="text-lg font-bold text-white font-mono mt-1">$2,400.00 USD</div>
                <div className="text-[10px] text-slate-500 mt-1">Programado para el 30 de este mes</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Retención ISA Edupreneur</div>
                <div className="text-lg font-bold text-emerald-400 font-mono mt-1">$240.00 USD (10%)</div>
                <div className="text-[10px] text-slate-500 mt-1">Transferido automáticamente a Academy Fund</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Estado Legal Contrato</div>
                <div className="text-lg font-bold text-teal-300 font-mono mt-1">Smart Contract Active</div>
                <div className="text-[10px] text-slate-500 mt-1">EE.UU. / FL Jurisdiction</div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
