import React from 'react';
import { Download, Plus } from 'lucide-react';
import IconButton from '../../components/ui/IconButton';
import Button from '../../components/ui/Button';
import RevenueChart from '../academic/RevenueChart';
import KanbanBoard from './KanbanBoard';

const LavirixSuite = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Lavirix Suite</h2>
          <p className="text-slate-500 font-bold text-sm">Lavirixweb Business Command & CRM</p>
        </div>
        <div className="flex items-center gap-4">
          <IconButton icon={Download} tooltip="Download Laporan PDF" variant="ghost" />
          <Button variant="success" icon={Plus}>Proyek Baru</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <RevenueChart />
        <KanbanBoard />
      </div>
    </div>
  );
};

export default LavirixSuite;