import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save } from 'lucide-react';
import { IconButton } from '../../components/ui/IconButton';

const AddCourseModal = ({ isOpen, onClose, onSave }) => {
  // State internal untuk menampung input user
  const [formData, setFormData] = useState({
    name: '',
    sks: '',
    target: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!formData.name || !formData.sks || !formData.target) return;

    // Kirim data ke parent (AcademicGuardian)
    onSave({
      name: formData.name,
      sks: parseInt(formData.sks),
      target: parseInt(formData.target)
    });

    // Reset form setelah simpan
    setFormData({ name: '', sks: '', target: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Overlay dengan Blur */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />
          
          {/* Box Modal sesuai Screenshot */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[3.5rem] shadow-md overflow-hidden border border-white p-10 md:p-12 hover:border-black"
          >
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">Tambah Matkul</h3>
              <IconButton icon={X} onClick={onClose} size={18} variant="ghost" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Input Nama Matkul */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Nama Mata Kuliah</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Contoh: Pemrograman Go" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] px-6 py-5 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Input SKS */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">SKS</label>
                  <input 
                    required
                    type="number" 
                    value={formData.sks}
                    onChange={(e) => setFormData({...formData, sks: e.target.value})}
                    placeholder="3" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] px-6 py-5 text-sm font-bold focus:outline-none" 
                  />
                </div>
                {/* Input Target Nilai */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Target Nilai</label>
                  <input 
                    required
                    type="number" 
                    value={formData.target}
                    onChange={(e) => setFormData({...formData, target: e.target.value})}
                    placeholder="86" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] px-6 py-5 text-sm font-bold focus:outline-none" 
                  />
                </div>
              </div>

              {/* Tombol Simpan sesuai Style Screenshot */}
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-200 mt-4 flex items-center justify-center gap-3 hover:bg-blue-700 active:scale-95 transition-all border-b-4 border-blue-800"
              >
                <Save size={18} strokeWidth={3} /> Simpan Data
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddCourseModal;