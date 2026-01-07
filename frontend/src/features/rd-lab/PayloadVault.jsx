import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Plus, CheckCircle2 } from 'lucide-react';
import IconButton from '../../components/ui/IconButton';

const PayloadVault = () => {
  const snippets = [
    'GORM Middleware Auth.go', 
    'XSS Reflection Payload List', 
    'SQLMap Custom Tamper', 
    'Bypass Cloudflare Script'
  ];

  return (
    <motion.div 
      whileHover={{ y: -4 }} 
      className="bg-white rounded-[4rem] flex flex-col border border-slate-100 shadow-sm overflow-hidden"
    >
      <div className="p-10 pb-6 flex justify-between items-center border-b border-slate-50">
        <div className="flex items-center gap-4">
          <Terminal size={24} strokeWidth={2.5} className="text-slate-400" />
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Payload Vault</h4>
        </div>
        <IconButton icon={Plus} tooltip="Buat Catatan Snippet Baru" variant="dark" size={16} />
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {snippets.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between p-8 border-b border-slate-50 group cursor-pointer hover:bg-slate-900 transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-all shadow-lg shadow-blue-200" />
              <span className="text-xs font-black text-slate-700 group-hover:text-white transition-colors">{item}</span>
            </div>
            <IconButton icon={CheckCircle2} tooltip="Salin ke Clipboard" variant="ghost" size={16} />
          </div>
        ))}
      </div>
      <button 
        type="button" 
        className="p-8 bg-slate-50 text-center text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-slate-900 transition-colors border-t border-slate-100"
      >
        Lihat Koleksi Lengkap (42 Snippets)
      </button>
    </motion.div>
  );
};

export default PayloadVault;