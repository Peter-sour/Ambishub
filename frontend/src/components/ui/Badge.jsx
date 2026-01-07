import React from 'react';

const Badge = ({ children, variant = "default" }) => {
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

export default Badge;