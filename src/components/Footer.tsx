import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Globe, Lock, Code, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-lg font-bold text-white">ZIEL Care</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plataforma Multi-Nicho de Cuidado Familiar, Staffing VIP y Aceleración Edupreneur. Cobertura transfronteriza en EE.UU., México, Colombia y España.
            </p>
            <div className="flex items-center space-x-3 text-xs text-slate-500">
              <span className="flex items-center"><Globe className="w-3.5 h-3.5 mr-1" /> Cross-Border</span>
              <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1" /> NDA Vault</span>
            </div>
          </div>

          {/* Service Niches */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Nichos de Servicio</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/latino-tradicional" className="hover:text-emerald-400 transition-colors">Tradicional Latino</Link></li>
              <li><Link to="/uhnw-executive" className="hover:text-emerald-400 transition-colors">UHNW VIP Executive</Link></li>
              <li><Link to="/postpartum-doula" className="hover:text-emerald-400 transition-colors">Posparto & Doula</Link></li>
              <li><Link to="/senior-companion" className="hover:text-emerald-400 transition-colors">Acompañamiento Senior</Link></li>
            </ul>
          </div>

          {/* Platform & Portals */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Portales de Usuario</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/family/onboarding" className="hover:text-emerald-400 transition-colors">Intake Psicometría Familia</Link></li>
              <li><Link to="/family/dashboard" className="hover:text-emerald-400 transition-colors">Portal Familias & Control</Link></li>
              <li><Link to="/academy" className="hover:text-emerald-400 transition-colors">Edupreneur Nanny Academy</Link></li>
              <li><Link to="/caregiver/jobs" className="hover:text-emerald-400 transition-colors">Muro de Vacantes Nannies</Link></li>
              <li><Link to="/admin/candidates" className="hover:text-emerald-400 transition-colors">Portal Admin & Matching Studio</Link></li>
            </ul>
          </div>

          {/* Developer & SEO / Geo AI */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Arquitectura & Generative AI</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/docs/architecture" className="hover:text-emerald-400 transition-colors flex items-center"><Code className="w-3.5 h-3.5 mr-1 text-emerald-400" /> Arquitectura de Módulos</Link></li>
              <li><Link to="/docs/api" className="hover:text-emerald-400 transition-colors flex items-center"><Cpu className="w-3.5 h-3.5 mr-1 text-emerald-400" /> Especificación API REST</Link></li>
              <li><Link to="/docs/database" className="hover:text-emerald-400 transition-colors">Esquemas PostgreSQL + pgvector</Link></li>
              <li><a href="sitemap.xml" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">XML Sitemap (SEO / AI Crawlers)</a></li>
              <li><a href="robots.txt" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Robots.txt Configuration</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ZIEL Care Platform. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Diseñado para despliegue automatizado en GitHub Pages vía GitHub Actions.</p>
        </div>
      </div>
    </footer>
  );
};
