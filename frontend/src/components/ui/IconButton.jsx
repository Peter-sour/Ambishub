import React from 'react';
import { Tooltip } from './Tooltip'; 

// 1. Export IconButton (Named Export)
export const IconButton = ({ icon: Icon, onClick, tooltip, variant = "ghost", size = 20 }) => {
  const variants = {
    ghost: "text-slate-500 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-100",
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200 border border-blue-500",
    success: "bg-emerald-50 text-emerald-600 border border-emerald-400 shadow-xl shadow-emerald-200",
    dark: "bg-slate-900 text-white hover:bg-black border border-slate-700 shadow-xl shadow-slate-300",
    glass: "bg-white/50 backdrop-blur-sm text-slate-600 hover:bg-white border border-white"
  };

  return (
    <Tooltip text={tooltip}>
      <button 
        type="button"
        onClick={onClick}
        className={`p-3.5 rounded-2xl transition-all active:scale-90 flex items-center justify-center group ${variants[variant] || variants.ghost}`}
      >
        <Icon size={size} strokeWidth={2.5} />
      </button>
    </Tooltip>
  );
};

// 2. Tambahkan Export Badge yang Hilang (Named Export)
export const Badge = ({ children, variant = "default" }) => {
  const styles = {
    default: "bg-slate-100 text-slate-600 border border-slate-200",
    critical: "bg-red-50 text-red-600 border border-red-200 shadow-sm shadow-red-50",
    success: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200"
  };
  return (
    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest leading-none ${styles[variant]}`}>
      {children}
    </span>
  );
};

// PENTING: Hapus baris "export default IconButton" jika ada di bawah sini!

export default IconButton;