import React, { useState } from 'react';
import {
  GraduationCap, Briefcase, Award, CheckCircle, Clock,
  DollarSign, ShieldCheck, UserCheck, ChevronRight
} from 'lucide-react';

export const CaregiverPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'academy' | 'isa'>('jobs');

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-20">

      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-slate-400 mb-1">
              <span>Cuidadora Certified #402</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Sello ZIEL Elite Verified</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Portal de Nanny & Edupreneur</h1>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'jobs' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Muro de Vacantes VIP
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'academy' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Mis Cursos Academy
            </button>
            <button
              onClick={() => setActiveTab('isa')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${activeTab === 'isa' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Estado de Contrato ISA
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Briefcase className="w-5 h-5 text-emerald-400 mr-2" />
              Vacantes Exclusivas Sugeridas
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Tradicional Latino • Miami, FL
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">Familia Bicultural — Cuidado de Infante (0-2 años)</h3>
                  <p className="text-xs text-slate-400 mt-1">Sueldo: $2,800 USD/mes • Horario: Lunes a Viernes (8:00 - 17:00)</p>
                  <p className="text-xs text-slate-300 mt-2">Requisitos: Certificación en RCP, calidez afectiva, preparación de alimentos tradicionales.</p>
                </div>
                <button className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors">
                  Postularme
                </button>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    UHNW Executive • Nueva York & Viajes
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">Familia VIP — Nanny Bilingüe de Viaje</h3>
                  <p className="text-xs text-slate-400 mt-1">Sueldo: $4,500 USD/mes • Modalidad: Live-in / Travel</p>
                  <p className="text-xs text-slate-300 mt-2">Requisitos: Protocolo ZIEL VIP, pasaporte abierto, firmado de NDA.</p>
                </div>
                <button className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors">
                  Postularme
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academy' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <GraduationCap className="w-5 h-5 text-emerald-400 mr-2" />
              Avance en Edupreneur Academy
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-white">Módulo: Primeros Auxilios & RCP Pediátrico</span>
                  <span className="text-emerald-400 font-bold font-mono">100% Completado</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full" />
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-white">Módulo: Protocolo de Seguridad UHNW</span>
                  <span className="text-emerald-400 font-bold font-mono">75% Completado</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[75%]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'isa' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <DollarSign className="w-5 h-5 text-emerald-400 mr-2" />
              Estado de tu Acuerdo de Ingresos Compartidos (ISA)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Total Matrícula Financiada</div>
                <div className="text-xl font-bold text-white font-mono mt-1">$1,500.00 USD</div>
                <div className="text-[10px] text-slate-500 mt-1">Costo inicial cubierto $0</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Cap Máximo de Pago (1.5x)</div>
                <div className="text-xl font-bold text-emerald-400 font-mono mt-1">$2,250.00 USD</div>
                <div className="text-[10px] text-slate-500 mt-1">Límite absoluto de reembolso</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-400">Acumulado Reembolsado</div>
                <div className="text-xl font-bold text-teal-300 font-mono mt-1">$480.00 USD</div>
                <div className="text-[10px] text-slate-500 mt-1">2 de 24 meses transcurridos</div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
