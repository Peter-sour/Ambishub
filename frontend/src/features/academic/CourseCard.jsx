import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Import komponen UI (Pastikan menggunakan Named Import)
import { CircularProgress } from '../../components/ui/CircularProgress';
import { IconButton,Badge } from '../../components/ui/IconButton';

// Import Modal Detail yang baru kita buat
import CourseDetailModal from './CourseDetailModal';

const CourseCard = ({ course }) => {
  // 1. State untuk kontrol Modal Detail
  const [isDetailOpen, setIsDetailOpen] = useState(false);
    
  return (
    <>
      <motion.div 
        whileHover={{ 
          y: -10, 
          shadow: "0 40px 80px -15px rgba(0, 0, 0, 0.1)" 
        }}
        className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative group transition-all duration-300"
      >
        {/* Tombol Buka Detail Nilai */}
        <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 z-10 translate-y-2 group-hover:translate-y-0">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton 
              icon={ExternalLink} 
              tooltip="Buka Detail Nilai" 
              variant="dark" 
              size={16} 
              onClick={() => setIsDetailOpen(true)} // 2. Trigger buka modal
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <CircularProgress 
            progress={course.score} 
            target={course.target} 
            color={course.score < course.target ? "stroke-amber-500" : "stroke-blue-600"} 
          />
          
          <div className="text-center space-y-4 w-full">
            <div>
              <h3 className="font-black text-slate-900 text-xl tracking-tight leading-tight">{course.name}</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">
                {course.sks} SKS • Dosen PENS IT
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Badge variant={course.attendance <= 1 ? "critical" : "blue"}>
                {course.attendance <= 1 ? "⚠️ Absen Kritis" : `Sisa Absen: ${course.attendance}`}
              </Badge>
              <Badge variant="default">Conf: {course.confidence}%</Badge>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Letakkan Komponen Modal di sini */}
      <CourseDetailModal 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
        course={course} 
      />
    </>
  );
};

export default CourseCard;