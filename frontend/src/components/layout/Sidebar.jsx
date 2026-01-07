import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  Briefcase, 
  ShieldAlert, 
  Settings,
  ChevronLeft, 
  ChevronRight,
  LogOut,
  Zap,
  X
} from 'lucide-react';
import IconButton from '../ui/IconButton';

const Sidebar = ({ collapsed, setCollapsed, activeTab, setActiveTab, mobileOpen, setMobileOpen }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Control Unit' },
    { id: 'academic', icon: BookOpen, label: 'Grade Guardian' },
    { id: 'business', icon: Briefcase, label: 'Lavirix CRM' },
    { id: 'security', icon: ShieldAlert, label: 'R&D Lab' },
    { id: 'settings', icon: Settings, label: 'System Config' },
  ];

  return (
    <motion.aside 
      initial={false}
      animate={{ 
        width: collapsed ? 120 : 340, 
        x: mobileOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -340 : 0)
      }}
      className="fixed lg:relative h-full bg-slate-50 flex flex-col p-8 z-[90] transition-all duration-500"
    >
      <div className="flex items-center justify-between mb-20 px-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-slate-900 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-slate-300 flex-shrink-0 border border-slate-700 relative overflow-hidden group">
            <Zap className="text-white fill-white relative z-10" size={28} />
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </div>
          {!collapsed && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="font-black text-2xl tracking-tighter leading-none">AmbisHub</h1>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1.5">Command Suite</p>
            </motion.div>
          )}
        </div>
        <button 
          type="button" 
          onClick={() => setMobileOpen(false)} 
          className="lg:hidden p-4 bg-white rounded-2xl shadow-sm text-slate-400"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => { setActiveTab(item.id); setMobileOpen(false); }}
            className={`w-full flex items-center gap-6 p-6 rounded-[2.5rem] transition-all relative group ${
              activeTab === item.id 
              ? 'bg-white shadow-2xl shadow-slate-200/50 text-slate-900' 
              : 'text-slate-400 hover:text-slate-700 hover:bg-white/50'
            }`}
          >
            <item.icon 
              size={26} 
              strokeWidth={activeTab === item.id ? 3 : 2} 
              className={`flex-shrink-0 transition-all ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-110'}`} 
            />
            {!collapsed && (
              <span className={`text-sm font-black tracking-tight whitespace-nowrap uppercase tracking-[0.1em] ${activeTab === item.id ? 'opacity-100' : 'opacity-60'}`}>
                {item.label}
              </span>
            )}
            {activeTab === item.id && (
              <>
                <motion.div 
                  layoutId="sidebar-pill" 
                  className="absolute left-0 w-2 h-10 bg-slate-900 rounded-r-full shadow-lg shadow-slate-400" 
                />
                <div className="absolute inset-y-6 right-8 w-1 h-1 rounded-full bg-blue-600" />
              </>
            )}
          </button>
        ))}
      </nav>

      <div className="pt-10 border-t border-slate-200 space-y-6">
        <IconButton 
          icon={collapsed ? ChevronRight : ChevronLeft} 
          tooltip={collapsed ? "Buka Menu" : "Kecilkan Menu"} 
          onClick={() => setCollapsed(!collapsed)} 
          variant="ghost"
        />
        <button 
          type="button" 
          className="w-full flex items-center gap-6 p-6 rounded-[2.5rem] text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all group"
        >
          <LogOut size={26} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
          {!collapsed && <span className="text-sm font-black uppercase tracking-widest">Shutdown System</span>}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;