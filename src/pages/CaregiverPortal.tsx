import React, { useState } from 'react';
import {
  GraduationCap, Briefcase, Award, CheckCircle, Clock,
  DollarSign, ShieldCheck, UserCheck, ChevronRight
} from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const CaregiverPortal: React.FC = () => {
  const { config, version } = useBrand();
  const [activeTab, setActiveTab] = useState<'jobs' | 'academy' | 'isa'>('jobs');

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
              <span>Zieler / Cuidadora Certified #402</span>
              <span>•</span>
              <span className="font-semibold" style={{ color: config.colors.accent }}>Sello ZIEL Elite ({version.toUpperCase()})</span>
            </div>
            <h1 className={`text-2xl font-bold ${config.fontHeading}`}>Portal de Zielers & Edupreneurs</h1>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('jobs')}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'jobs' ? config.colors.primary : 'transparent',
                color: activeTab === 'jobs' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              Muro de Vacantes VIP
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'academy' ? config.colors.primary : 'transparent',
                color: activeTab === 'academy' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              Mis Cursos Academy
            </button>
            <button
              onClick={() => setActiveTab('isa')}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-colors border"
              style={{
                borderColor: config.colors.border,
                backgroundColor: activeTab === 'isa' ? config.colors.primary : 'transparent',
                color: activeTab === 'isa' ? '#FFFFFF' : config.colors.textPrimary,
              }}
            >
              Estado Contrato ISA
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center">
              <Briefcase className="w-5 h-5 mr-2" style={{ color: config.colors.accent }} />
              Vacantes Exclusivas Sugeridas para Zielers
            </h2>

            <div className="space-y-4">
              <div
                className="border rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm"
                style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
              >
                <div>
                  <span
                    className="text-[10px] uppercase font-bold px-2 py-0.5 rounded border"
                    style={{ borderColor: config.colors.border, color: config.colors.accent }}
                  >
                    Tradicional Latino • Miami, FL
                  </span>
                  <h3 className={`text-lg font-bold mt-1 ${config.fontHeading}`}>Familia Bicultural — Cuidado de Infante (0-2 años)</h3>
                  <p className="text-xs opacity-75 mt-1">Sueldo: $2,800 USD/mes • Horario: Lunes a Viernes (8:00 - 17:00)</p>
                  <p className="text-xs opacity-90 mt-2">Requisitos: Certificación en RCP, calidez afectiva, preparación de alimentos tradicionales.</p>
                </div>
                <button
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors border"
                  style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', borderColor: config.colors.border }}
                >
                  Postularme
                </button>
              </div>

              <div
                className="border rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm"
                style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
              >
                <div>
                  <span
                    className="text-[10px] uppercase font-bold px-2 py-0.5 rounded border"
                    style={{ borderColor: config.colors.border, color: config.colors.accent }}
                  >
                    UHNW Executive • Nueva York & Viajes
                  </span>
                  <h3 className={`text-lg font-bold mt-1 ${config.fontHeading}`}>Familia VIP — Nanny Bilingüe de Viaje</h3>
                  <p className="text-xs opacity-75 mt-1">Sueldo: $4,500 USD/mes • Modalidad: Live-in / Travel</p>
                  <p className="text-xs opacity-90 mt-2">Requisitos: Protocolo ZIEL VIP, pasaporte abierto, firmado de NDA.</p>
                </div>
                <button
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors border"
                  style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', borderColor: config.colors.border }}
                >
                  Postularme
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academy' && (
          <div
            className="border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm"
            style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
          >
            <h2 className="text-xl font-bold flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" style={{ color: config.colors.accent }} />
              Avance en Edupreneur Academy
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold">Módulo: Primeros Auxilios & RCP Pediátrico</span>
                  <span className="font-bold font-mono" style={{ color: config.colors.accent }}>100% Completado</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden opacity-30 bg-current">
                  <div className="bg-emerald-500 h-full w-full" />
                </div>
              </div>

              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold">Módulo: Protocolo de Seguridad UHNW</span>
                  <span className="font-bold font-mono" style={{ color: config.colors.accent }}>75% Completado</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden opacity-30 bg-current">
                  <div className="bg-emerald-500 h-full w-[75%]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'isa' && (
          <div
            className="border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm"
            style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}
          >
            <h2 className="text-xl font-bold flex items-center">
              <DollarSign className="w-5 h-5 mr-2" style={{ color: config.colors.accent }} />
              Estado de tu Acuerdo de Ingresos Compartidos (ISA)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Total Matrícula Financiada</div>
                <div className="text-xl font-bold font-mono mt-1">$1,500.00 USD</div>
                <div className="text-[10px] opacity-60 mt-1">Costo inicial cubierto $0</div>
              </div>

              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Cap Máximo de Pago (1.5x)</div>
                <div className="text-xl font-bold font-mono mt-1" style={{ color: config.colors.accent }}>$2,250.00 USD</div>
                <div className="text-[10px] opacity-60 mt-1">Límite absoluto de reembolso</div>
              </div>

              <div className="p-4 rounded-xl border" style={{ borderColor: config.colors.border }}>
                <div className="opacity-75">Acumulado Reembolsado</div>
                <div className="text-xl font-bold font-mono mt-1" style={{ color: config.colors.accent }}>$480.00 USD</div>
                <div className="text-[10px] opacity-60 mt-1">2 de 24 meses transcurridos</div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
