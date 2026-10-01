import React, { useState } from 'react';
import { useBrand, BRAND_CONFIGS, BrandVersion } from '../context/BrandContext';
import { VersionSwitcher } from '../components/VersionSwitcher';
import { Palette, Layers, Award, Sparkles, Eye, Check, Download, Share2, Compass, Shield, Shirt, Package, FileText } from 'lucide-react';

export const BrandbookPage: React.FC = () => {
  const { config, version, setVersion } = useBrand();
  const [activeTab, setActiveTab] = useState<'overview' | 'palettes' | 'geometry' | 'applications'>('overview');

  const versions: BrandVersion[] = ['v0', 'v1', 'v2', 'v3'];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${config.fontBody}`}
         style={{ backgroundColor: config.colors.bgLight, color: config.colors.textPrimary }}>

      {/* Brandbook Header */}
      <section className="border-b py-12" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border"
                   style={{ backgroundColor: `${config.colors.secondary}15`, color: config.colors.secondary, borderColor: `${config.colors.secondary}30` }}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>ZIEL Brandbook & Identidad de Marca</span>
              </div>
              <h1 className={`text-3xl sm:text-4xl font-extrabold ${config.fontHeading}`} style={{ color: config.colors.primary }}>
                Evolución de la Marca ZIEL (v0 - v3)
              </h1>
              <p className="text-sm mt-2 text-slate-600 max-w-2xl">
                Manual completo de identidad, geometría sagrada, paletas de color, tipografía y aplicaciones físicas y digitales extraídas del Brandbook oficial.
              </p>
            </div>

            <div className="flex-shrink-0">
              <VersionSwitcher compact />
            </div>
          </div>

          {/* Navigation Subtabs */}
          <div className="flex items-center gap-2 border-t mt-8 pt-4 overflow-x-auto" style={{ borderColor: config.colors.border }}>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'overview' ? 'shadow-sm text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
              style={{ backgroundColor: activeTab === 'overview' ? config.colors.primary : 'transparent' }}
            >
              Vista General de Evoluciones
            </button>

            <button
              onClick={() => setActiveTab('palettes')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'palettes' ? 'shadow-sm text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
              style={{ backgroundColor: activeTab === 'palettes' ? config.colors.primary : 'transparent' }}
            >
              Paletas de Color & Hexadecimales
            </button>

            <button
              onClick={() => setActiveTab('geometry')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'geometry' ? 'shadow-sm text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
              style={{ backgroundColor: activeTab === 'geometry' ? config.colors.primary : 'transparent' }}
            >
              Geometría & Simbolismo (137.5°, π, Vesica Piscis)
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'applications' ? 'shadow-sm text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
              style={{ backgroundColor: activeTab === 'applications' ? config.colors.primary : 'transparent' }}
            >
              Aplicaciones Físicas & Uniformes
            </button>
          </div>

        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* TAB 1: OVERVIEW COMPARISON */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className={`text-2xl font-extrabold ${config.fontHeading}`} style={{ color: config.colors.primary }}>
                Comparativo de las 4 Evoluciones de Marca ZIEL
              </h2>
              <p className="text-xs text-slate-600 mt-1">Haz clic en cualquier versión para activarla globalmente en toda la aplicación.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {versions.map((v) => {
                const item = BRAND_CONFIGS[v];
                const isCurrent = version === v;
                return (
                  <div
                    key={v}
                    onClick={() => setVersion(v)}
                    className={`cursor-pointer rounded-3xl p-6 border transition-all relative flex flex-col justify-between ${
                      isCurrent ? 'ring-4 shadow-xl' : 'hover:shadow-md'
                    }`}
                    style={{
                      backgroundColor: item.colors.cardBg,
                      borderColor: isCurrent ? item.colors.primary : item.colors.border,
                    }}
                  >
                    {isCurrent && (
                      <span className="absolute top-4 right-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Versión Activa
                      </span>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl border" style={{ backgroundColor: item.colors.bgLight, borderColor: item.colors.border }}>
                          {item.logoSvg}
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{item.id}</span>
                          <h3 className="font-bold text-sm text-slate-900 line-clamp-1">{item.name}</h3>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-slate-700 italic">"{item.tagline}"</p>
                      </div>

                      {/* Swatches */}
                      <div className="flex gap-1.5 pt-2">
                        {item.hexPalette.map((p, idx) => (
                          <div key={idx} className="flex-1 h-6 rounded-md border border-black/10 shadow-inner" style={{ backgroundColor: p.hex }} title={`${p.name}: ${p.hex}`} />
                        ))}
                      </div>

                      <div className="text-[11px] text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                        <p className="font-semibold text-slate-900">{item.geometryDetails.title}</p>
                        <p className="line-clamp-2">{item.symbolism}</p>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all ${
                          isCurrent ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {isCurrent ? 'Versión Seleccionada' : `Activar ${v.toUpperCase()}`}
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: PALETTES & HEX CODES */}
        {activeTab === 'palettes' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className={`text-2xl font-extrabold ${config.fontHeading}`} style={{ color: config.colors.primary }}>
                Paleta de Color Oficial - {config.name}
              </h2>
              <p className="text-xs text-slate-600 mt-1">Tokens de diseño y valores hexadecimales de la versión actual.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.hexPalette.map((color, idx) => (
                <div key={idx} className="rounded-3xl border p-5 shadow-sm space-y-4" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
                  <div className="h-28 rounded-2xl border shadow-inner flex items-end p-3" style={{ backgroundColor: color.hex }}>
                    <span className="text-xs font-mono font-bold bg-black/60 text-white px-2 py-1 rounded backdrop-blur-md">
                      {color.hex}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{color.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{color.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl p-6 border shadow-sm" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
              <h3 className="font-bold text-sm text-slate-900 mb-2">Variables CSS Generadas Dinámicamente</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto">
{`:root {
  --ziel-primary: ${config.colors.primary};
  --ziel-secondary: ${config.colors.secondary};
  --ziel-accent: ${config.colors.accent};
  --ziel-bg-light: ${config.colors.bgLight};
  --ziel-card-bg: ${config.colors.cardBg};
  --ziel-font-heading: '${config.fontHeading}';
}`}
              </pre>
            </div>
          </div>
        )}

        {/* TAB 3: GEOMETRY & SYMBOLISM */}
        {activeTab === 'geometry' && (
          <div className="space-y-8">
            <div className="rounded-3xl p-8 border shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
              <div className="md:col-span-5 flex justify-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-48 h-48 flex items-center justify-center">
                  {config.logoSvg}
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Rigor Matemático & Filosofía</span>
                <h3 className={`text-2xl font-extrabold ${config.fontHeading}`} style={{ color: config.colors.primary }}>
                  {config.geometryDetails.title}
                </h3>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900">{config.geometryDetails.p1Title}</p>
                    <p className="mt-0.5 text-slate-600">{config.geometryDetails.p1Desc}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900">{config.geometryDetails.p2Title}</p>
                    <p className="mt-0.5 text-slate-600">{config.geometryDetails.p2Desc}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900">{config.geometryDetails.p3Title}</p>
                    <p className="mt-0.5 text-slate-600">{config.geometryDetails.p3Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PHYSICAL APPLICATIONS */}
        {activeTab === 'applications' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className={`text-2xl font-extrabold ${config.fontHeading}`} style={{ color: config.colors.primary }}>
                Aplicaciones Físicas y Merchandising - {config.badge}
              </h2>
              <p className="text-xs text-slate-600 mt-1">Gafetes, uniformes scrub, certificados y papelería corporativa.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.physicalApps.map((app, idx) => (
                <div key={idx} className="rounded-3xl border p-6 shadow-sm space-y-4" style={{ backgroundColor: config.colors.cardBg, borderColor: config.colors.border }}>
                  <div className="p-3 rounded-2xl w-fit" style={{ backgroundColor: `${config.colors.primary}15` }}>
                    {idx === 0 && <Shield className="w-6 h-6" style={{ color: config.colors.primary }} />}
                    {idx === 1 && <Shirt className="w-6 h-6" style={{ color: config.colors.primary }} />}
                    {idx === 2 && <Package className="w-6 h-6" style={{ color: config.colors.primary }} />}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {app.tag}
                    </span>
                    <h4 className="font-bold text-base text-slate-900 mt-2">{app.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{app.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
