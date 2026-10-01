import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BrandProvider } from './context/BrandContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingTools } from './components/FloatingTools';
import { MarkdownModal } from './components/MarkdownModal';
import { HomeLanding } from './pages/HomeLanding';
import { NicheLanding } from './pages/NicheLanding';
import { AcademyLanding } from './pages/AcademyLanding';
import { PricingPage } from './pages/PricingPage';
import { BrandbookPage } from './pages/BrandbookPage';
import { FamilyPortal } from './pages/FamilyPortal';
import { CaregiverPortal } from './pages/CaregiverPortal';
import { AdminPortal } from './pages/AdminPortal';
import { DocsPage } from './pages/DocsPage';

export function AppContent() {
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans antialiased selection:bg-slate-200">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomeLanding />} />
            <Route path="/niches" element={<NicheLanding />} />
            <Route path="/academy" element={<AcademyLanding />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/brandbook" element={<BrandbookPage />} />
            <Route path="/portal/family" element={<FamilyPortal />} />
            <Route path="/portal/caregiver" element={<CaregiverPortal />} />
            <Route path="/portal/admin" element={<AdminPortal />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating discrete version switcher & MD docs trigger */}
        <FloatingTools onOpenMd={(docName) => setActiveDoc(docName)} />

        {/* Markdown Modal */}
        <MarkdownModal
          isOpen={!!activeDoc}
          docId={activeDoc}
          onClose={() => setActiveDoc(null)}
        />
      </div>
    </Router>
  );
}

export function App() {
  return (
    <BrandProvider>
      <AppContent />
    </BrandProvider>
  );
}

export default App;
