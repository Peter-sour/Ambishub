import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import Shell from './components/layout/Shell';
import AcademicGuardian from './features/academic/AcademicGuardian';
import LavirixSuite from './features/business/LavirixSuite';
import RDLab from './features/rd-lab/RDlab';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const getActiveContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-32">
            <AcademicGuardian />
            <LavirixSuite />
            <RDLab />
          </div>
        );
      case 'academic': 
        return <AcademicGuardian />;
      case 'business': 
        return <LavirixSuite />;
      case 'security': 
        return <RDLab />;
      default: 
        return (
          <div className="h-full flex flex-col items-center justify-center space-y-8 text-center">
            <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 border border-slate-100 shadow-inner">
              <Settings size={64} className="animate-spin-slow opacity-20" />
            </div>
            <h3 className="text-2xl font-black text-slate-300 uppercase tracking-[0.4em]">Inisialisasi Sistem...</h3>
          </div>
        );
    }
  };

  return (
    <Shell activeTab={activeTab} setActiveTab={setActiveTab}>
      {getActiveContent()}
    </Shell>
  );
};

export default App;