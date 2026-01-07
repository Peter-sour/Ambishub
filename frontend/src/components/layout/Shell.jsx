import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';

const Shell = ({ children, activeTab, setActiveTab }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900 overflow-hidden relative selection:bg-blue-100 selection:text-blue-900">
      
      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setMobileOpen(false)} 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[80] lg:hidden" 
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <Sidebar 
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Command Center */}
      <main className="flex-1 relative flex flex-col p-4 md:p-6 lg:p-10 pl-4 lg:pl-0 w-full overflow-hidden">
        <motion.div 
          layout
          className="bg-white w-full h-full rounded-[4rem] lg:rounded-[6rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] flex flex-col border-4 border-white overflow-hidden relative"
        >
          {/* Header */}
          <Header activeTab={activeTab} setMobileOpen={setMobileOpen} />

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto px-10 md:px-20 py-12 md:py-20 custom-scrollbar scroll-smooth">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="h-full z-10 relative"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-blue-100/40 blur-[180px] rounded-full opacity-60" />
        <div className="absolute bottom-0 left-40 -z-10 w-[600px] h-[600px] bg-emerald-100/30 blur-[150px] rounded-full opacity-60" />
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 40px; border: 4px solid transparent; background-clip: content-box; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; background-clip: content-box; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Shell;