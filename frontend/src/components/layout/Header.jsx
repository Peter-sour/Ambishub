import React from 'react';
import { Menu, Target, ChevronRight, Search, Bell, Layers, User } from 'lucide-react';
import IconButton from '../ui/IconButton';

const Header = ({ activeTab, setMobileOpen }) => {
  return (
    <header className="px-10 md:px-20 py-12 md:py-16 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-50 gap-10">
      <div className="flex items-center gap-10">
        <button 
          type="button"
          onClick={() => setMobileOpen(true)} 
          className="lg:hidden p-5 bg-slate-50 rounded-[1.5rem] text-slate-500 hover:text-slate-900 shadow-sm border border-slate-100"
        >
          <Menu size={28} />
        </button>
        
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] leading-none">
            <Target size={14} className="text-blue-500 animate-pulse" />
            <span>Malakul Control Unit</span>
            <ChevronRight size={10} className="text-slate-200" />
            <span className="text-slate-900">{activeTab}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            AmbisHub Suite
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-6 w-full sm:w-auto">
        <div className="hidden xl:flex items-center gap-6 bg-slate-50 px-8 py-4 rounded-[2rem] border border-slate-100 shadow-inner group hover:bg-white transition-all cursor-help">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-xl border border-slate-50 group-hover:rotate-12 transition-transform">
            <Search size={20} strokeWidth={3} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] leading-none mb-1.5">Operator Profile</p>
            <p className="text-xs font-black text-slate-800 uppercase tracking-widest leading-none">Malakul <span className="text-blue-600">/ V4.0</span></p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <IconButton icon={Bell} tooltip="Pesan & Notifikasi Sistem" variant="glass" size={22} />
          <IconButton icon={Layers} tooltip="System Modules" variant="glass" size={22} />
          <div className="w-16 h-16 rounded-[2.2rem] bg-slate-900 flex items-center justify-center text-white shadow-2xl shadow-slate-400 cursor-pointer hover:scale-105 active:scale-95 transition-all group overflow-hidden border border-slate-700">
            <User size={30} className="group-hover:translate-y-1 transition-transform" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;