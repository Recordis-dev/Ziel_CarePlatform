import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';
import { VersionSwitcher } from './VersionSwitcher';
import { ShieldCheck, Layers, BookOpen, DollarSign, Users, Menu, X, Sparkles, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { config } = useBrand();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nichos', path: '/niches' },
    { name: 'Edupreneur Academy', path: '/academy' },
    { name: 'Precios', path: '/pricing' },
    { name: 'Brandbook', path: '/brandbook', highlight: true },
    { name: 'Portales', path: '/portal/family' },
    { name: 'Documentación', path: '/docs' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      style={{ backgroundColor: `${config.colors.bgLight}E6`, borderColor: config.colors.border }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl transition-transform group-hover:scale-105"
                 style={{ backgroundColor: `${config.colors.primary}10` }}>
              {config.logoSvg}
            </div>
            <div>
              <span className={`text-2xl font-bold tracking-tight ${config.fontHeading}`}
                    style={{ color: config.colors.primary }}>
                ZIEL
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-medium"
                    style={{ color: config.colors.secondary }}>
                Care & FinTech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    active ? 'font-semibold shadow-sm' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: active ? config.colors.cardBg : 'transparent',
                    color: active ? config.colors.primary : config.colors.textMuted,
                    border: active ? `1px solid ${config.colors.border}` : '1px solid transparent',
                  }}
                >
                  {link.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-500" />}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Brand Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <VersionSwitcher compact />

            <Link
              to="/portal/family"
              className="px-4 py-2 rounded-xl text-xs font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              style={{
                backgroundColor: config.colors.primary,
                color: '#FFFFFF',
              }}
            >
              <Users className="w-3.5 h-3.5" />
              Acceso a Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <VersionSwitcher compact />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border text-slate-700 hover:bg-slate-100"
              style={{ borderColor: config.colors.border }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b px-4 pt-2 pb-6 space-y-2 bg-white" style={{ borderColor: config.colors.border }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-100 flex items-center gap-2"
            >
              {link.highlight && <Sparkles className="w-4 h-4 text-amber-500" />}
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/portal/family"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-semibold block text-white"
              style={{ backgroundColor: config.colors.primary }}
            >
              Acceso a Portales
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
