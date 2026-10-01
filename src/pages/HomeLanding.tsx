import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { VersionSwitcher } from '../components/VersionSwitcher';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Heart, Award, ArrowRight, CheckCircle2, Sliders, Calculator, Zap, ChevronRight, Lock, BookOpen } from 'lucide-react';
import { SEGMENTS_DATA } from '../data/mockData';

export const HomeLanding: React.FC = () => {
  const { config, version } = useBrand();
  const [selectedNiche, setSelectedNiche] = useState('latino_traditional');
  const activeSegment = SEGMENTS_DATA.find((s) => s.id === selectedNiche) || SEGMENTS_DATA[1];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${config.fontBody}`}
         style={{ backgroundColor: config.colors.bgLight, color: config.colors.textPrimary }}>

      {/* Top Banner with Brand Version Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <VersionSwitcher />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-sm"
                   style={{ backgroundColor: `${config.colors.secondary}15`, color: config.colors.secondary, borderColor: `${config.colors.secondary}30` }}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{config.badge}</span>
              </div>

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${config.fontHeading}`}
                  style={{ color: config.colors.primary }}>
                {config.tagline}
              </h1>

              <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl"
                 style={{ color: config.colors.textMuted }}>
                Plataforma bilingüe de cuidados de alta afinidad (AfectoMatch Engine) potenciada con FinTech Edupreneur (Contratos ISA) para familias exigentes y cuidadores certificados.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/portal/family"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:opacity-95 transition-all flex items-center gap-2 text-white"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  <Heart className="w-4 h-4" />
                  Encontrar Cuidado de Alta Afinidad
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/brandbook"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm border hover:bg-white/50 transition-all flex items-center gap-2"
                  style={{ borderColor: config.colors.border, color: config.colors.primary }}
                >
                  <BookOpen className="w-4 h-4" />
                  Explorar Brandbook {version.toUpperCase()}
                </Link>
              </div>

              {/* Key Trust Stats */}
              <div className="pt-6 border-t grid grid-cols-3 gap-4" style={{ borderColor: config.colors.border }}>
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: config.colors.primary }}>94.8%</div>
                  <div className="text-xs text-slate-500">Índice ICA Promedio</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: config.colors.primary }}>&lt; 72 hrs</div>
                  <div className="text-xs text-slate-500">Tiempo de Colocación</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: config.colors.primary }}>$0 USD</div>
                  <div className="text-xs text-slate-500">Costo Inicial ISA Nannies</div>
                </div>
              </div>

            </div>

            {/* Interactive Preview Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6 md:p-8 shadow-2xl border transition-all relative overflow-hidden"
                   style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
                <div className="flex items-center justify-between pb-4 border-b mb-6" style={{ borderColor: config.colors.border }}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl" style={{ backgroundColor: `${config.colors.primary}15` }}>
                      {config.logoSvg}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm" style={{ color: config.colors.primary }}>Sello Elite ZIEL</h3>
                      <p className="text-xs opacity-75">Compatibilidad Afectiva & Seguridad</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full text-emerald-700 bg-emerald-50 border border-emerald-200">
                    ICA 96.5%
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-xl border flex justify-between items-center" style={{ backgroundColor: config.colors.bgLight, borderColor: config.colors.border }}>
                    <span className="font-semibold">Nicho Seleccionado:</span>
                    <span className="font-bold uppercase tracking-wider text-xs" style={{ color: config.colors.secondary }}>
                      {activeSegment.name}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-slate-700">Vector Afectivo Cultural:</p>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: '96.5%', backgroundColor: config.colors.primary }} />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="font-semibold text-slate-700">Verificaciones de Seguridad:</p>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50/60 p-2 rounded-lg">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Background Check VIP
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50/60 p-2 rounded-lg">
                        <CheckCircle2 className="w-3.5 h-3.5" /> NDA Ciberseguridad
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <span className="text-xs text-slate-500">Garantía ZIEL 12 meses</span>
                    <Link to="/portal/family" className="font-bold text-xs flex items-center gap-1 hover:underline" style={{ color: config.colors.primary }}>
                      Ver Match Simulado <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Selector Section */}
      <section className="py-12 border-t" style={{ borderColor: config.colors.border, backgroundColor: `${config.colors.primary}05` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${config.fontHeading}`} style={{ color: config.colors.primary }}>
              Motor Configurador Multi-Nicho
            </h2>
            <p className="text-sm mt-2 text-slate-600">
              La plataforma adapta dinámicamente sus campos de datos, algoritmos ICA y diseño visual según el segmento activado.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {SEGMENTS_DATA.map((seg) => {
              const selected = seg.id === selectedNiche;
              return (
                <button
                  key={seg.id}
                  onClick={() => setSelectedNiche(seg.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selected ? 'ring-2 shadow-md' : 'hover:bg-white/80'
                  }`}
                  style={{
                    backgroundColor: selected ? config.colors.cardBg : 'transparent',
                    borderColor: selected ? config.colors.primary : config.colors.border,
                  }}
                >
                  <div className="text-2xl mb-2">{seg.icon}</div>
                  <h3 className="font-bold text-xs uppercase tracking-wider" style={{ color: selected ? config.colors.primary : 'inherit' }}>
                    {seg.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{seg.tagline}</p>
                </button>
              );
            })}
          </div>

          {/* Active Segment Detail Card */}
          <div className="rounded-3xl p-6 md:p-8 border shadow-lg" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Atributo Clave Target</span>
                <h4 className="text-lg font-bold mt-1" style={{ color: config.colors.primary }}>{activeSegment.keyAttribute}</h4>
                <p className="text-xs text-slate-600 mt-2">{activeSegment.tagline}</p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pesos Algoritmo ICA (W)</span>
                <div className="space-y-1.5 mt-2 text-xs">
                  <div className="flex justify-between"><span>Cultural (W_C):</span> <span className="font-bold">{activeSegment.weights.W_C}%</span></div>
                  <div className="flex justify-between"><span>Operativo (W_O):</span> <span className="font-bold">{activeSegment.weights.W_O}%</span></div>
                  <div className="flex justify-between"><span>Emocional/EQ (W_E):</span> <span className="font-bold">{activeSegment.weights.W_E}%</span></div>
                  <div className="flex justify-between"><span>Habilidades Clínicas (W_H):</span> <span className="font-bold">{activeSegment.weights.W_H}%</span></div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Verificaciones & Modelo</span>
                <div className="mt-2 text-xs space-y-2">
                  <p className="font-semibold text-slate-800">Verificación: <span className="font-normal text-slate-600">{activeSegment.verification}</span></p>
                  <p className="font-semibold text-slate-800">Modelo de Cobro: <span className="font-normal text-slate-600">{activeSegment.pricingModel}</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Narrative Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 md:p-12 border shadow-xl relative overflow-hidden"
             style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.secondary }}>
              Narrativa & Filosofía de Marca ZIEL
            </span>
            <h2 className={`text-3xl font-extrabold mt-2 ${config.fontHeading}`} style={{ color: config.colors.primary }}>
              {config.geometryDetails.title}
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed italic">
              "{config.brandNarrative}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-bold text-xs text-slate-900">{config.geometryDetails.p1Title}</h4>
                <p className="text-xs text-slate-600 mt-1">{config.geometryDetails.p1Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-bold text-xs text-slate-900">{config.geometryDetails.p2Title}</h4>
                <p className="text-xs text-slate-600 mt-1">{config.geometryDetails.p2Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-bold text-xs text-slate-900">{config.geometryDetails.p3Title}</h4>
                <p className="text-xs text-slate-600 mt-1">{config.geometryDetails.p3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
