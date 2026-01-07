import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, RefreshCw } from 'lucide-react';
import IconButton from '../../components/ui/IconButton';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }} 
      className="bg-white rounded-[4rem] p-12 flex flex-col items-center justify-center space-y-12 relative overflow-hidden border border-slate-100 shadow-sm"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50">
        <motion.div 
          className="h-full bg-blue-600" 
          initial={{ width: "0%" }} 
          animate={{ width: `${(1500 - timeLeft) / 1500 * 100}%` }} 
        />
      </div>
      <div className="flex justify-between w-full px-4">
        <div className="flex items-center gap-3">
          <Cpu className="text-blue-600" size={24} strokeWidth={2.5} />
          <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em]">Deep Work Engine</h4>
        </div>
        <IconButton icon={Zap} tooltip="Turbo Mode Engaged" variant="ghost" size={18} />
      </div>
      
      <div className="relative w-72 h-72 flex items-center justify-center">
        <svg className="absolute inset-0 transform -rotate-90 scale-110 drop-shadow-2xl shadow-blue-500/10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" className="stroke-slate-50" strokeWidth="6" fill="none" />
          <motion.circle 
            cx="50" cy="50" r="45" 
            className="stroke-blue-600" strokeWidth="6" fill="none" 
            strokeDasharray="283"
            animate={{ strokeDashoffset: 283 - (timeLeft / 1500) * 283 }}
            transition={{ ease: "linear" }}
          />
        </svg>
        <div className="text-center z-10 space-y-2">
          <span className="text-7xl font-black text-slate-900 tracking-tighter leading-none block">{formatTime(timeLeft)}</span>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Studying Golang</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button 
          type="button"
          onClick={() => setIsActive(!isActive)}
          className={`px-14 py-5 rounded-[2rem] text-xs font-black uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 border-b-4 ${
            isActive ? 'bg-slate-900 text-white border-black shadow-slate-200' : 'bg-blue-600 text-white border-blue-800 shadow-blue-100'
          }`}
        >
          {isActive ? 'Pause Focus' : 'Engage Focus'}
        </button>
        <IconButton 
          icon={RefreshCw} 
          tooltip="Reset Timer Focus" 
          onClick={() => {setTimeLeft(1500); setIsActive(false)}} 
          variant="ghost" 
        />
      </div>
    </motion.div>
  );
};

export default PomodoroTimer;