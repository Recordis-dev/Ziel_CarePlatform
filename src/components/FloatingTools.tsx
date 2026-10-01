import React, { useState } from 'react';
import { useBrand, BRAND_CONFIGS, BrandVersion } from '../context/BrandContext';
import { Sparkles, FileText, X, Check, Layers, BookOpen } from 'lucide-react';

interface FloatingToolsProps {
  onOpenMd: (docName: string) => void;
}

export const FloatingTools: React.FC<FloatingToolsProps> = ({ onOpenMd }) => {
  const { version, setVersion, config } = useBrand();
  const [isVersionOpen, setIsVersionOpen] = useState(false);
  const [isMdOpen, setIsMdOpen] = useState(false);

  const versions: BrandVersion[] = ['v0', 'v1', 'v2', 'v3'];

  const docFiles = [
    { id: 'README.md', name: 'README General', icon: '📘' },
    { id: 'product_requirements_document.md', name: 'PRD Especificaciones', icon: '📜' },
    { id: 'panorama_de_implementacion.md', name: 'Panorama Implementación', icon: '🗺️' },
    { id: 'development_log.md', name: 'Development Log', icon: '📝' },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5 font-sans">

      {/* Popover Menu for Brand Evolutions */}
      {isVersionOpen && (
        <div
          className="w-80 rounded-2xl shadow-2xl border p-3.5 animate-fadeIn backdrop-blur-xl transition-all"
          style={{
            backgroundColor: config.colors.cardBg.includes('slate-900') ? '#0B132B' : '#FFFFFF',
            borderColor: config.colors.border,
            color: config.colors.textPrimary,
          }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-current opacity-20">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Evolución de Marca & Brand</span>
            </div>
            <button
              onClick={() => setIsVersionOpen(false)}
              className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] opacity-75 mb-3 leading-tight">
            Cambia la versión para transformar colores, tipografía, logo, geometría y narrativa en todo el sitio.
          </p>

          <div className="space-y-1.5">
            {versions.map((v) => {
              const item = BRAND_CONFIGS[v];
              const isSelected = version === v;
              return (
                <button
                  key={v}
                  onClick={() => {
                    setVersion(v);
                    setIsVersionOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 border ${
                    isSelected
                      ? 'font-bold ring-2 ring-emerald-500 shadow-md'
                      : 'hover:opacity-90 opacity-80'
                  }`}
                  style={{
                    backgroundColor: isSelected ? item.colors.cardBg : 'transparent',
                    borderColor: item.colors.border,
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center border"
                    style={{ backgroundColor: item.colors.primary, borderColor: item.colors.secondary }}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{item.name}</span>
                      {isSelected && (
                        <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                          Activo
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] opacity-75 truncate">{item.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Popover Menu for Markdown Documents */}
      {isMdOpen && (
        <div
          className="w-72 rounded-2xl shadow-2xl border p-3.5 animate-fadeIn backdrop-blur-xl transition-all"
          style={{
            backgroundColor: config.colors.cardBg.includes('slate-900') ? '#0B132B' : '#FFFFFF',
            borderColor: config.colors.border,
            color: config.colors.textPrimary,
          }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-current opacity-20">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Documentación MD</span>
            </div>
            <button
              onClick={() => setIsMdOpen(false)}
              className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] opacity-75 mb-3 leading-tight">
            Selecciona un archivo Markdown para visualizar la especificación técnica en un modal ad-hoc.
          </p>

          <div className="space-y-1">
            {docFiles.map((doc) => (
              <button
                key={doc.id}
                onClick={() => {
                  onOpenMd(doc.id);
                  setIsMdOpen(false);
                }}
                className="w-full text-left p-2 rounded-xl text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-2.5"
              >
                <span className="text-base">{doc.icon}</span>
                <span className="font-medium text-[11px]">{doc.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Trigger Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setIsMdOpen(!isMdOpen);
            setIsVersionOpen(false);
          }}
          className="px-3.5 py-2 rounded-full text-xs font-semibold shadow-xl backdrop-blur-lg border transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: config.colors.cardBg,
            borderColor: config.colors.border,
            color: config.colors.textPrimary,
          }}
        >
          <FileText className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">Docs MD</span>
        </button>

        <button
          onClick={() => {
            setIsVersionOpen(!isVersionOpen);
            setIsMdOpen(false);
          }}
          className="px-4 py-2 rounded-full text-xs font-semibold shadow-xl border transition-all flex items-center gap-2 hover:scale-105 active:scale-95 text-white"
          style={{
            backgroundColor: config.colors.primary,
            borderColor: config.colors.secondary,
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Brand: {config.id.toUpperCase()}</span>
        </button>
      </div>

    </div>
  );
};
