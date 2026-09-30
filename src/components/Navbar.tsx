import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck, Heart, GraduationCap, Briefcase, BookOpen,
  Menu, X, Sparkles, ChevronDown, UserCheck, Shield, Code
} from 'lucide-react';
import { NICHES } from '../data/mockData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nicheDropdown, setNicheDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent">
                ZIEL Care
              </span>
              <span className="text-[10px] tracking-wider uppercase block text-emerald-400 font-semibold">
                Multi-Niche Care Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/') ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
            >
              Inicio
            </Link>

            {/* Niche Dropdown */}
            <div className="relative" onMouseLeave={() => setNicheDropdown(false)}>
              <button
                onClick={() => setNicheDropdown(!nicheDropdown)}
                onMouseEnter={() => setNicheDropdown(true)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                <span>Nichos & Especialidades</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {nicheDropdown && (
                <div className="absolute left-0 top-full mt-1 w-72 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                  {Object.values(NICHES).map((niche) => (
                    <Link
                      key={niche.id}
                      to={`/${niche.slug}`}
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:text-emerald-400 hover:bg-slate-800/80 transition-colors"
                      onClick={() => setNicheDropdown(false)}
                    >
                      <div className="font-semibold">{niche.name}</div>
                      <div className="text-xs text-slate-400 truncate">{niche.subtitle}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/academy"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/academy') ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
            >
              Edupreneur Academy
            </Link>

            <Link
              to="/pricing"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/pricing') ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
            >
              Precios
            </Link>

            <Link
              to="/family/dashboard"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/family/dashboard') ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
            >
              Portal Familia
            </Link>

            <Link
              to="/caregiver/jobs"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/caregiver/jobs') ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
            >
              Portal Nanny
            </Link>

            <Link
              to="/docs/architecture"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 ${isActive('/docs/architecture') ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50'}`}
            >
              <Code className="w-4 h-4" />
              <span>Docs & API</span>
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/family/onboarding"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/20"
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              Iniciar Intake
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Inicio
          </Link>

          <div className="py-2 border-t border-b border-slate-800 my-2">
            <div className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Nichos de Servicio
            </div>
            {Object.values(NICHES).map((niche) => (
              <Link
                key={niche.id}
                to={`/${niche.slug}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-1.5 text-sm text-slate-300 hover:text-emerald-400"
              >
                {niche.name}
              </Link>
            ))}
          </div>

          <Link
            to="/academy"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Edupreneur Academy
          </Link>
          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Precios
          </Link>
          <Link
            to="/family/dashboard"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Portal Familia
          </Link>
          <Link
            to="/caregiver/jobs"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Portal Nanny
          </Link>
          <Link
            to="/admin/candidates"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Portal Admin
          </Link>
          <Link
            to="/docs/architecture"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-emerald-400 hover:bg-slate-800"
          >
            Docs & API Specs
          </Link>

          <Link
            to="/family/onboarding"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300"
          >
            Iniciar Intake Familiar
          </Link>
        </div>
      )}
    </header>
  );
};
