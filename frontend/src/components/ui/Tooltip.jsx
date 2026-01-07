import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);
  
  return (
    <div 
      className="relative flex items-center justify-center" 
      onMouseEnter={() => setShow(true)} 
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full mb-4 px-4 py-2 bg-slate-900/95 backdrop-blur-md text-white text-[11px] font-black rounded-xl whitespace-nowrap z-[100] shadow-2xl border border-white/20 pointer-events-none tracking-wider uppercase"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-slate-900/95" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

