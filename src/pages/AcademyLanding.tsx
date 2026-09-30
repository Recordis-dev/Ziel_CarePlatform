import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, BookOpen, CheckCircle, Award, DollarSign,
  TrendingUp, ShieldCheck, Sparkles, ArrowRight, PlayCircle
} from 'lucide-react';

export const AcademyLanding: React.FC = () => {
  const [monthlySalary, setMonthlySalary] = useState<number>(2000);
  const minThreshold = 1200;
  const retentionPercentage = 0.10;
  const nominalTuition = 1500;
  const capAmount = nominalTuition * 1.5;

  const isEligibleForPayment = monthlySalary >= minThreshold;
  const monthlyPayment = isEligibleForPayment ? monthlySalary * retentionPercentage : 0;
  const monthsToCompleteCap = monthlyPayment > 0 ? Math.ceil(capAmount / monthlyPayment) : 0;

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-20">

      {/* Hero */}
      <section className="relative pt-12 pb-16 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Edupreneur Academy & Career Accelerator</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Acelera tu Carrera como Cuidadora Elite con <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Financiamiento ISA ($0 Inicial)</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Te capacitamos y certificamos con el Sello Elite (RCP, Cuidado Posparto, Montessori y Protocolo UHNW). Solo pagas cuando consigues un empleo de alto nivel en nuestra plataforma.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/caregiver/onboarding"
              className="px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all text-sm inline-flex items-center"
            >
              Postular a la Nanny Academy
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive ISA Calculator Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Simulador FinTech</span>
              <h2 className="text-2xl font-bold text-white mt-1">Calculadora del Acuerdos de Ingresos Compartidos (ISA)</h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Nuestros acuerdos ISA protegen a las cuidadoras: si tus ingresos son menores al umbral mínimo, tu pago mensual es $0 USD.
              </p>
            </div>

            {/* Slider */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Salario Mensual Estimado:</span>
                <span className="text-xl font-bold font-mono text-emerald-400">${monthlySalary.toLocaleString()} USD/mes</span>
              </div>
              <input
                type="range"
                min="800"
                max="5000"
                step="100"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>$800 USD</span>
                <span>Umbral Mínimo: ${minThreshold} USD</span>
                <span>$5,000 USD</span>
              </div>
            </div>

            {/* Rules */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400">Costo Inicial</div>
                <div className="text-base font-bold text-emerald-400 font-mono">$0 USD</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400">Cap Máximo (1.5x)</div>
                <div className="text-base font-bold text-white font-mono">${capAmount.toLocaleString()} USD</div>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 bg-slate-950 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm text-white">Proyección de Pagos ISA</span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-mono border ${isEligibleForPayment ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'}`}>
                {isEligibleForPayment ? 'ISA Activo' : 'Bajo Umbral Mínimo ($0 pago)'}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-900 text-sm">
                <span className="text-slate-400">Retención Mensual (10%):</span>
                <span className="font-mono font-bold text-emerald-400 text-lg">${monthlyPayment.toFixed(0)} USD / mes</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-900 text-sm">
                <span className="text-slate-400">Tiempo para completar Cap Máximo:</span>
                <span className="font-mono font-bold text-white text-base">
                  {isEligibleForPayment ? `${monthsToCompleteCap} meses` : 'N/A (Sin cobro)'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                {isEligibleForPayment ? (
                  <span>✅ Al ganar ${monthlySalary} USD/mes, retienes el 90% (${(monthlySalary - monthlyPayment).toFixed(0)} USD) de tu sueldo libre.</span>
                ) : (
                  <span>⚠️ Tu salario está por debajo de ${minThreshold} USD/mes. No se realiza ninguna retención de acuerdo a los términos del contrato ISA.</span>
                )}
              </div>
            </div>

            <Link
              to="/caregiver/onboarding"
              className="block w-full text-center py-3 rounded-xl font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors text-sm"
            >
              Aceptar Términos y Postular
            </Link>
          </div>

        </div>
      </section>

      {/* Curriculum & Certification Modules */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white">Plan de Estudios Sello Elite</h2>
          <p className="text-slate-400 text-xs mt-2">Módulos prácticos en formato micro-learning accesibles desde cualquier teléfono inteligente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">01</div>
            <h3 className="font-bold text-white text-base">Salud & Emergencias Pediátricas</h3>
            <p className="text-xs text-slate-400">RCP pediátrico, maniobra de Heimlich, protocolos de prevención de accidentes e higiene clínica.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-300 flex items-center justify-center font-bold">02</div>
            <h3 className="font-bold text-white text-base">Cuidado Posparto & Nutrición Tradicional</h3>
            <p className="text-xs text-slate-400">Acompañamiento en lactancia materna, preparación de alimentos nutritivos y técnicas de relajación nocturna.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold">03</div>
            <h3 className="font-bold text-white text-base">Protocolo VIP & Etiqueta UHNW</h3>
            <p className="text-xs text-slate-400">Confidencialidad, discreción residencial, ciberseguridad familiar y comunicación profesional con la familia.</p>
          </div>
        </div>
      </section>

    </div>
  );
};
