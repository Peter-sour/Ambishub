import React from 'react';
import { motion } from 'framer-motion';

export const CircularProgress = ({ progress = 75, target = 86, color = "stroke-blue-600", size = 150 }) => {
  const radius = (size - 40) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90 drop-shadow-sm">
        <circle 
          className="stroke-slate-100" 
          strokeWidth="14" 
          fill="transparent" 
          r={radius} 
          cx={size / 2} 
          cy={size / 2} 
        />
        <motion.circle
          className={color}
          strokeWidth="14"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "circOut" }}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute text-center">
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-black text-slate-900 tracking-tighter leading-none">{progress}</span>
          <span className="text-[10px] font-bold text-slate-400 ml-1">/100</span>
        </div>
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1.5">Goal {target}</p>
      </div>
    </div>
  );
};

export default CircularProgress;