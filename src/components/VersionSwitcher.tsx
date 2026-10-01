import React, { useState } from 'react';
import { useBrand, BRAND_CONFIGS, BrandVersion } from '../context/BrandContext';
import { Sparkles, Palette, ChevronDown, Check } from 'lucide-react';

export const VersionSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { version, setVersion, config } = useBrand();
  const [isOpen, setIsOpen] = useState(false);

  const versions: BrandVersion[] = ['v0', 'v1', 'v2', 'v3'];

  if (compact) {
    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shadow-sm border"
          style={{
            backgroundColor: config.colors.primary,
            color: '#FFFFFF',
            borderColor: config.colors.secondary,
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{config.badge}</span>
          <ChevronDown className="w-3 h-3 opacity-80" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-72 rounded-xl bg-white shadow-2xl border border-slate-200 z-50 p-2 overflow-hidden animate-fadeIn">
            <div className="px-3 py-2 border-b border-slate-100 mb-1">
              <p className="text-xs font-semibold text-slate-800 uppercase tracking-wider">Evolución de Marca & Brandbook</p>
              <p className="text-[11px] text-slate-500">Selecciona para transformar el sistema completo</p>
            </div>
            <div className="space-y-1">
              {versions.map((v) => {
                const item = BRAND_CONFIGS[v];
                const isSelected = version === v;
                return (
                  <button
                    key={v}
                    onClick={() => {
                      setVersion(v);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-start gap-2.5 ${
                      isSelected ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center border"
                      style={{ backgroundColor: item.colors.primary, borderColor: item.colors.secondary }}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-900 font-medium">{item.name}</span>
                        {isSelected && <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">Activo</span>}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">{item.tagline}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg rounded-2xl p-2 md:p-3 flex items-center justify-between gap-3 my-4">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-lg bg-slate-900 text-white">
          <Palette className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Selector de Evolución de Marca ZIEL</h4>
          <p className="text-[11px] text-slate-600">Compara el MVP original v0 con las identidades v1, v2 y v3</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {versions.map((v) => {
          const item = BRAND_CONFIGS[v];
          const isSelected = version === v;
          return (
            <button
              key={v}
              onClick={() => setVersion(v)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border ${
                isSelected
                  ? 'ring-2 ring-slate-900 shadow-sm text-slate-900 bg-slate-100 font-bold border-slate-400'
                  : 'text-slate-600 hover:bg-slate-50 border-slate-200'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full inline-block"
                style={{ backgroundColor: item.colors.primary }}
              />
              <span>{item.id.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
