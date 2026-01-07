import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Target, Zap, Settings, ClipboardList, 
  BarChart3, CheckCircle2, Plus, Edit3, Save, ArrowRight 
} from 'lucide-react';
import { IconButton, Badge } from '../../components/ui/IconButton';

const CourseDetailModal = ({ isOpen, onClose, course }) => {
  const [activeSubTab, setActiveSubTab] = useState('matrix');

  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 md:p-8">
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="absolute inset-0 " 
          />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="
              relative bg-white w-full max-w-5xl rounded-[2.5rem] md:rounded-[4rem] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] md:max-h-[92vh]
              border-[3px] md:border-[6px] border-white outline outline-1 outline-slate-100
            "
          >
            {/* --- HEADER --- */}
            <div className="p-6 md:p-10 border-b-[3px] border-slate-50 flex flex-col lg:flex-row gap-6 justify-between items-center bg-slate-50/50 ">
              <div className="flex items-center gap-4 md:gap-6 w-full lg:w-auto">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-xl shrink-0">
                  <Target size={24} className="md:size-7" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-2xl font-black text-slate-900 uppercase tracking-tighter truncate">{course.name}</h3>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="blue">{course.sks} SKS</Badge>
                    <Badge variant="default">Target 4.0</Badge>
                  </div>
                </div>
                <div className="lg:hidden ml-auto">
                   <IconButton icon={X} onClick={onClose} />
                </div>
              </div>
              
              {/* --- NAVIGATION TABS (Scrollable di Mobile) --- */}
              <div className="flex bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-slate-200 shadow-sm gap-1 md:gap-2 w-full lg:w-auto overflow-x-auto no-scrollbar">
                {[
                  { id: 'matrix', icon: Settings, label: 'Matrix' },
                  { id: 'tasks', icon: 'Tasks', label: 'Assignment', realIcon: ClipboardList },
                  { id: 'simulation', icon: BarChart3, label: 'Simulation' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSubTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 lg:flex-none ${
                      activeSubTab === tab.id ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    {tab.realIcon ? <tab.realIcon size={14} /> : <tab.icon size={14} />} 
                    <span className={tab.label === 'Assignment' ? 'hidden sm:inline' : 'inline'}>{tab.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="hidden lg:block">
                <IconButton icon={X} onClick={onClose} />
              </div>
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar">
              
              {/* TAB 1: SCORE MATRIX */}
              {activeSubTab === 'matrix' && (
                <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Card 1 */}
                    <div className="p-6 md:p-8 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] border-2 border-slate-100 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Actual Score</span>
                        <Edit3 size={14} className="text-blue-600" />
                      </div>
                      <h4 className="text-xs md:text-sm font-black uppercase">UTS / UAS Input</h4>
                      <input type="number" placeholder="88" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500/20" />
                      <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors">Update</button>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 md:p-8 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] border-2 border-slate-100 space-y-4">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Set Weighting</span>
                      <div className="space-y-3">
                        {['Tugas', 'UTS', 'UAS'].map(comp => (
                          <div key={comp} className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-600">{comp}</span>
                            <input type="text" defaultValue="33%" className="w-12 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-center py-1 outline-none" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 md:p-8 bg-blue-50 rounded-[2rem] md:rounded-[2.5rem] border-2 border-blue-100 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                      <div>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Override</p>
                        <p className="text-xs font-bold text-blue-900 mt-2">Ganti estimasi keyakinan dengan nilai asli dosen.</p>
                      </div>
                      <button className="mt-4 bg-white text-blue-600 py-3 rounded-xl text-[10px] font-black uppercase border border-blue-200 shadow-sm">Switch Now</button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ASSIGNMENT TASK */}
              {activeSubTab === 'tasks' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center gap-4">
                    <h4 className="text-base md:text-xl font-black uppercase text-slate-900 tracking-tight">Project Checklist</h4>
                    <button className="flex items-center gap-2 text-blue-600 font-black text-[9px] md:text-[10px] uppercase bg-blue-50 px-3 md:px-4 py-2 rounded-xl">
                      <Plus size={14}/> <span className="hidden xs:inline">Add Task</span>
                    </button>
                  </div>
                  <div className="space-y-3">
                    {['Laporan Praktikum 1', 'Analisa Sistem', 'Final Project Demo'].map((task, i) => (
                      <div key={i} className="flex flex-col xs:flex-row xs:items-center justify-between p-5 md:p-6 bg-white border-2 border-slate-50 rounded-2xl md:rounded-3xl hover:border-blue-200 transition-all gap-4">
                        <div className="flex items-center gap-4">
                          <input type="checkbox" className="w-5 h-5 rounded-lg accent-blue-600 shrink-0" />
                          <span className="font-bold text-slate-700 text-sm md:text-base">{task}</span>
                        </div>
                        <button className="lg:opacity-0 lg:group-hover:opacity-100 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-tighter transition-all hover:bg-emerald-500 hover:text-white w-full xs:w-auto text-center">
                          Mark Submitted
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: SIMULATION */}
              {activeSubTab === 'simulation' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-12 text-white overflow-hidden relative shadow-2xl border-[3px] md:border-[4px] border-slate-800">
                  <div className="relative z-10 space-y-6 md:space-y-8">
                    <div className="flex items-center gap-3">
                      <Zap className="text-amber-400" fill="currentColor" size={20} />
                      <h4 className="text-lg md:text-2xl font-black uppercase tracking-tight">What-If Simulator</h4>
                    </div>
                    <div className="space-y-6">
                      <p className="text-slate-400 font-bold text-xs md:text-sm max-w-md">Simulasikan nilai UAS untuk menjaga grade <span className="text-white underline decoration-blue-500 underline-offset-4 font-black">A</span>.</p>
                      <div className="space-y-4">
                        <div className="flex justify-between text-[9px] md:text-[10px] font-black uppercase text-slate-500">
                          <span>UAS Score</span>
                          <span className="text-blue-400 text-xl md:text-2xl font-black">95 / 100</span>
                        </div>
                        <input type="range" className="w-full h-2 md:h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                      </div>
                      <div className="p-6 md:p-8 bg-blue-600/20 rounded-[2rem] border-2 border-blue-500/30 flex items-center justify-between gap-4">
                         <div className="min-w-0">
                            <p className="text-[9px] md:text-[10px] font-black text-blue-400 uppercase tracking-widest truncate">Predicted Course GPA</p>
                            <p className="text-xl md:text-4xl font-black truncate">4.00 (Grade A)</p>
                         </div>
                         <CheckCircle2 className="text-blue-400 shrink-0 size-8 md:size-14" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[-20%] right-[-10%] w-60 h-60 md:w-80 md:h-80 bg-blue-600/20 blur-[80px] md:blur-[100px] rounded-full" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CourseDetailModal;