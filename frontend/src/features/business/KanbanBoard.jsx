import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MoreVertical } from 'lucide-react';
import IconButton from '../../components/ui/IconButton';
import Badge from '../../components/ui/Badge';
import { KANBAN_TASKS } from '../../data/mockData';

const KanbanBoard = () => {
  return (
    <div className="lg:col-span-4 h-full">
      <motion.div 
        whileHover={{ y: -4 }}
        className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-sm h-full"
      >
        <div className="flex justify-between items-center mb-10">
          <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]">Client Pipeline</h4>
          <IconButton icon={Settings} tooltip="Atur Kanban" size={16} />
        </div>
        <div className="space-y-6">
          {KANBAN_TASKS.map(task => (
            <div 
              key={task.id} 
              className="p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 group cursor-pointer hover:bg-white transition-all hover:shadow-2xl hover:shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <Badge variant={task.status === 'Coding' ? 'blue' : 'warning'}>{task.status}</Badge>
                <IconButton icon={MoreVertical} tooltip="Opsi Proyek" size={14} />
              </div>
              <h5 className="font-black text-slate-900 text-base leading-tight tracking-tight mb-2">{task.title}</h5>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{task.client}</p>
              <div className={`absolute bottom-0 left-0 h-1 transition-all group-hover:w-full w-0 ${task.status === 'Coding' ? 'bg-blue-600' : 'bg-amber-500'}`} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default KanbanBoard;