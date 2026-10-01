import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { X, FileText } from 'lucide-react';

interface MarkdownModalProps {
  isOpen: boolean;
  docId: string | null;
  onClose: () => void;
}

export const MarkdownModal: React.FC<MarkdownModalProps> = ({ isOpen, docId, onClose }) => {
  const { config, version } = useBrand();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!docId) return;

    setLoading(true);
    fetch(`/${docId}`)
      .then((res) => {
        if (!res.ok) {
          return fetch(`./${docId}`);
        }
        return res;
      })
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setContent(`# Error al cargar ${docId}\n\nNo se pudo cargar el archivo.`);
        setLoading(false);
      });
  }, [docId]);

  if (!isOpen || !docId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl border flex flex-col overflow-hidden ${config.fontBody}`}
        style={{
          backgroundColor: config.colors.cardBg.includes('slate-900') ? '#0B132B' : '#FFFFFF',
          borderColor: config.colors.border,
          color: config.colors.textPrimary,
        }}
      >

        {/* Header Modal */}
        <div className={`px-6 py-4 border-b flex items-center justify-between`} style={{ borderColor: config.colors.border }}>
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl border`} style={{ borderColor: config.colors.border }}>
              <FileText className={`w-5 h-5`} style={{ color: config.colors.accent }} />
            </div>
            <div>
              <h3 className={`text-base font-bold ${config.fontHeading}`}>{docId}</h3>
              <p className="text-xs opacity-70">Documentación de Arquitectura • Versión {version.toUpperCase()}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border`} style={{ borderColor: config.colors.border, color: config.colors.accent }}>
              Theme: {config.name}
            </span>
            <button
              onClick={onClose}
              className={`p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4 text-xs sm:text-sm leading-relaxed font-mono">
          {loading ? (
            <div className="py-20 text-center opacity-70">
              Cargando especificaciones markdown...
            </div>
          ) : (
            <div className="whitespace-pre-wrap font-mono">
              {content}
            </div>
          )}
        </div>

        {/* Footer Modal */}
        <div className={`px-6 py-3 border-t flex items-center justify-between text-xs opacity-80`} style={{ borderColor: config.colors.border }}>
          <span>ZIEL Architecture Spec Viewer</span>
          <button
            onClick={onClose}
            className={`px-4 py-1.5 rounded-xl font-semibold border`}
            style={{ borderColor: config.colors.border }}
          >
            Cerrar Vista
          </button>
        </div>

      </div>
    </div>
  );
};
