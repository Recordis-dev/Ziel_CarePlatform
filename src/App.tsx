import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomeLanding } from './pages/HomeLanding';
import { NicheLanding } from './pages/NicheLanding';
import { AcademyLanding } from './pages/AcademyLanding';
import { PricingPage } from './pages/PricingPage';
import { FamilyPortal } from './pages/FamilyPortal';
import { CaregiverPortal } from './pages/CaregiverPortal';
import { AdminPortal } from './pages/AdminPortal';
import { DocsPage } from './pages/DocsPage';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeLanding />} />

            <Route path="/:nicheSlug" element={<NicheLanding />} />

            <Route path="/academy" element={<AcademyLanding />} />
            <Route path="/pricing" element={<PricingPage />} />

            <Route path="/family/onboarding" element={<FamilyPortal />} />
            <Route path="/family/dashboard" element={<FamilyPortal />} />
            <Route path="/family/matches" element={<FamilyPortal />} />
            <Route path="/family/interviews" element={<FamilyPortal />} />
            <Route path="/family/payroll" element={<FamilyPortal />} />

            <Route path="/caregiver/onboarding" element={<CaregiverPortal />} />
            <Route path="/caregiver/academy" element={<CaregiverPortal />} />
            <Route path="/caregiver/jobs" element={<CaregiverPortal />} />
            <Route path="/caregiver/isa-status" element={<CaregiverPortal />} />

            <Route path="/admin/candidates" element={<AdminPortal />} />
            <Route path="/admin/matching-studio" element={<AdminPortal />} />
            <Route path="/admin/isa-management" element={<AdminPortal />} />

            <Route path="/docs/:docSection" element={<DocsPage />} />
            <Route path="/docs" element={<Navigate to="/docs/architecture" replace />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
