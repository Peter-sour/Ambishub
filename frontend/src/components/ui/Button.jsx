import React from 'react';

const Button = ({ children, onClick, variant = "primary", icon: Icon, className = "" }) => {
  const variants = {
    primary: "bg-blue-600 text-white border-blue-800 shadow-blue-200 hover:bg-blue-700",
    success: "bg-emerald-500 text-white border-emerald-700 shadow-emerald-200 hover:bg-emerald-600",
    ghost: "bg-slate-100 text-slate-700 border-slate-300 shadow-slate-100 hover:bg-slate-200"
  };

  return (
    <button 
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-2xl transition-all active:scale-95 border-b-4 ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={18} strokeWidth={3} />}
      {children}
    </button>
  );
};

export default Button;