import React, { useState } from 'react';
import {
  Brain, Calendar, DollarSign, Lock
} from 'lucide-react';
import { MOCK_CANDIDATES } from '../data/mockData';
import { useBrand } from '../context/BrandContext';

export const FamilyPortal: React.FC = () => {
  const { config, version } = useBrand();
  const [activeTab, setActiveTab] = useState<'matches' | 'interviews' | 'payroll'>('matches');
  const [signedNda, setSignedNda] = useState<Record<string, boolean>>({});

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
              <span>Familia Residencia #802</span>
              <span>•</span>
              <span className="font-semibold" style={{ color: config.colors.accent }}>Brand Version: {version.toUpperCase()}</span>
            </div>
            <h1 className={`text-2xl font-bold ${config.fontHeading}`}>Portal de Gestión Familiar & Matches</h1>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('matches')}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'matches' ? config.colors.primary : 'transparent',
                color: activeTab === 'matches' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              Feed de Matches (ICA Score)
            </button>
            <button
              onClick={() => setActiveTab('interviews')}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'interviews' ? config.colors.primary : 'transparent',
                color: activeTab === 'interviews' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              Entrevistas Agendadas
            </button>
            <button
              onClick={() => setActiveTab('payroll')}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'payroll' ? config.colors.primary : 'transparent',
                color: activeTab === 'payroll' ? '#FFFFFF' : config.colors.textPrimary,
              }}
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
            <div
              className="flex items-center justify-between p-4 rounded-xl border"
              style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5" style={{ color: config.colors.accent }} />
                <div>
                  <div className="text-sm font-semibold">AfectoMatch Engine Activo</div>
                  <div className="text-xs opacity-75">Algoritmo vectorial pgvector con evaluador LangGraph RAG</div>
                </div>
              </div>
              <span
                className="text-xs font-mono px-3 py-1 rounded-full border"
                style={{ borderColor: config.colors.border, color: config.colors.accent }}
              >
                Precision Target 95%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_CANDIDATES.map((cand) => {
                const isUnlocked = signedNda[cand.id];
                return (
                  <div
                    key={cand.id}
                    className="border rounded-2xl p-6 space-y-4 shadow-sm"
                    style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt={cand.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <h3 className={`font-bold text-sm ${config.fontHeading}`}>{isUnlocked ? cand.name : "Perfil Enmascarado (Requiere NDA)"}</h3>
                          <p className="text-xs opacity-75">Miami, FL</p>
                        </div>
                      </div>
                      <div className="text-right p-2 rounded-xl border" style={{ borderColor: config.colors.border }}>
                        <div className="text-[10px] opacity-70">ICA Score</div>
                        <div className="text-lg font-bold font-mono" style={{ color: config.colors.accent }}>{cand.icaScore}%</div>
                      </div>
                    </div>

                    {!isUnlocked ? (
                      <div className="p-4 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 text-center space-y-2">
                        <Lock className="w-5 h-5 text-amber-500 mx-auto" />
                        <div className="text-xs font-semibold">Protocolo de Privacidad ZIEL</div>
                        <p className="text-[11px] opacity-80">Firma el NDA digital para revelar el expediente completo, certificaciones y síntesis de entrevista.</p>
                        <button
                          onClick={() => setSignedNda(prev => ({ ...prev, [cand.id]: true }))}
                          className="mt-2 px-3 py-1.5 rounded-lg text-xs font-semibold border"
                          style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', borderColor: config.colors.border }}
                        >
                          Firmar NDA Digital
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="p-3 rounded-xl text-xs space-y-1 border" style={{ borderColor: config.colors.border }}>
                          <div className="opacity-75 font-semibold">Pilares Afectivos:</div>
                          <div className="flex flex-wrap gap-1">
                            {cand.pros.map((p, i) => (
                              <span key={i} className="px-2 py-0.5 rounded text-[11px] border" style={{ borderColor: config.colors.border }}>{p}</span>
                            ))}
                          </div>
                        </div>

                        <div className="text-xs space-y-1">
                          <div className="font-semibold" style={{ color: config.colors.accent }}>Síntesis de Alineación:</div>
                          <p className="opacity-80 leading-relaxed">{cand.pros[0]}</p>
                        </div>

                        <div className="pt-2 flex justify-between items-center border-t" style={{ borderColor: config.colors.border }}>
                          <span className="text-xs opacity-75">Certificación: {cand.certification}</span>
                          <button
                            onClick={() => setActiveTab('interviews')}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border"
                            style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', borderColor: config.colors.border }}
                          >
                            Agendar Entrevista
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'interviews' && (
          <div
            className="border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm"
            style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
          >
            <h2 className="text-xl font-bold flex items-center">
              <Calendar className="w-5 h-5 mr-2" style={{ color: config.colors.accent }} />
              Entrevistas Virtuales Agendadas
            </h2>
            <div className="p-4 rounded-xl border flex justify-between items-center text-xs" style={{ borderColor: config.colors.border }}>
              <div>
                <div className="font-semibold text-sm">Entrevista con María G. (ZIEL Elite)</div>
                <div className="opacity-75 mt-0.5">Mañana a las 10:00 AM EST • Sala Encargada ZIEL Concierge</div>
              </div>
              <span className="px-3 py-1 rounded-full font-semibold border" style={{ borderColor: config.colors.border, color: config.colors.accent }}>Confirmada</span>
            </div>
          </div>
        )}

        {activeTab === 'payroll' && (
          <div
            className="border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm"
            style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
          >
            <h2 className="text-xl font-bold flex items-center">
              <DollarSign className="w-5 h-5 mr-2" style={{ color: config.colors.accent }} />
              Gestión de Nómina Transfronteriza (Multi-Currency Payment Rail)
            </h2>
            <p className="text-xs opacity-75">Procesamiento automático de pagos, impuestos locales y retención ISA vía Stripe & Wise API.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Próximo Pago de Nómina</div>
                <div className="text-lg font-bold font-mono mt-1">$2,400.00 USD</div>
                <div className="text-[10px] opacity-60 mt-1">Programado para el 30 de este mes</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Retención ISA Edupreneur</div>
                <div className="text-lg font-bold font-mono mt-1" style={{ color: config.colors.accent }}>$240.00 USD (10%)</div>
                <div className="text-[10px] opacity-60 mt-1">Transferido automáticamente a Academy Fund</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Estado Legal Contrato</div>
                <div className="text-lg font-bold font-mono mt-1" style={{ color: config.colors.accent }}>Smart Contract Active</div>
                <div className="text-[10px] opacity-60 mt-1">EE.UU. / FL Jurisdiction</div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
