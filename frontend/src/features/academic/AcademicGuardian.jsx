import React, { useState } from 'react';
import { RefreshCw, Plus } from 'lucide-react';

// PERHATIKAN: Sekarang menggunakan { } karena di atas kita pakai 'export const'
import { IconButton } from '../../components/ui/IconButton'; 
import CourseCard from './CourseCard';
import AddCourseModal from './AddCourseModal';
import { COURSES as INITIAL_COURSES } from '../../data/mockData';

const AcademicGuardian = () => {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCourse = (newCourse) => {
    const courseWithId = {
      ...newCourse,
      id: Date.now(),
      score: 0,
      confidence: 50,
      attendance: 4
    };
    setCourses([...courses, courseWithId]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Academic Guardian
          </h2>
          <p className="text-slate-500 font-bold text-sm">
            Sistem Monitoring Nilai Target IPK 4.0 PENS
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <IconButton 
            icon={RefreshCw} 
            tooltip="Sync SIAKAD PENS" 
            variant="ghost" 
            onClick={() => console.log("Syncing...")}
          />
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 border-b-4 border-blue-800"
          >
            <Plus size={18} strokeWidth={3} /> Tambah Matkul
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <AddCourseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleAddCourse} 
      />
    </div>
  );
};

export default AcademicGuardian;