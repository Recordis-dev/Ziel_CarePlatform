import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pb-20">

      {/* Header */}
      <section className="pt-12 pb-16 text-center border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            Modelos de Cobro Transparentes
          </span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Inversión Transparente por Nicho de Cuidado
          </h1>
          <p className="mt-4 text-slate-400 text-sm max-w-xl mx-auto">
            Sin comisiones ocultas. Garantía de sustitución de 90 días en todas las contrataciones.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Latino Traditional Tier */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Tradicional Latino</div>
              <h3 className="text-2xl font-bold text-white">Placement + Sub</h3>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-extrabold font-mono">1.5 Meses</span>
                <span className="text-xs text-slate-400 ml-1">de salario</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ideal para familias que buscan calidez cultural, apoyo de hogar y el reconfortante Efecto Abuela.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-4 border-t border-slate-800">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Intakes psicométricos ilimitados</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Verificación de antecedentes de hogar</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Reemplazo sin costo (90 días)</li>
              </ul>
            </div>
            <Link
              to="/family/onboarding"
              className="mt-8 block w-full text-center py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs transition-colors"
            >
              Seleccionar Tradicional
            </Link>
          </div>

          {/* UHNW VIP Tier */}
          <div className="bg-slate-900 border-2 border-emerald-500 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-emerald-500/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
              Más Solicitado Executive
            </div>
            <div className="space-y-4">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">UHNW VIP Concierge</div>
              <h3 className="text-2xl font-bold text-white">Executive Placement</h3>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-extrabold font-mono">$2,500 - $5,000</span>
                <span className="text-xs text-slate-400 ml-1">USD Fee</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Garantía de confidencialidad absoluta (NDA), pasaporte abierto y sustitución de emergencia en menos de 24 horas.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-4 border-t border-slate-800">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Personal ZIEL Protocol certificado</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Búsqueda internacional Interpol/FBI</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Sustituciones VIP &lt; 24h</li>
              </ul>
            </div>
            <Link
              to="/family/onboarding"
              className="mt-8 block w-full text-center py-3 rounded-xl font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 text-xs transition-colors"
            >
              Iniciar Intake VIP
            </Link>
          </div>

          {/* Posparto Package */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Posparto & Doula</div>
              <h3 className="text-2xl font-bold text-white">Paquete Cerrado</h3>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-extrabold font-mono">$1,500 - $6,000</span>
                <span className="text-xs text-slate-400 ml-1">USD / paquete</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Atención clínica y apoyo afectivo por semanas cerradas durante la cuarentena y el período posparto.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-4 border-t border-slate-800">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Asistencia nocturna y lactancia</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Certificación RCP pediátrico</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Alimentación restaurativa materna</li>
              </ul>
            </div>
            <Link
              to="/family/onboarding"
              className="mt-8 block w-full text-center py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs transition-colors"
            >
              Reservar Paquete Posparto
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
