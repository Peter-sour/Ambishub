import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer 
} from 'recharts';
import { REVENUE_DATA } from '../../data/mockData';

const RevenueChart = () => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="lg:col-span-8 bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-sm flex flex-col min-h-[450px]"
    >
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-inner">
            <TrendingUp size={28} strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="font-black text-slate-900 uppercase text-[11px] tracking-widest mb-1">Total Revenue</h4>
            <p className="text-slate-400 text-[10px] font-black">TAHUNAN 2024</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-4xl font-black text-slate-900 tracking-tighter leading-none">Rp 15.6M</span>
          <div className="flex items-center justify-end gap-1.5 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">+12% GROWTH</p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={REVENUE_DATA}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fontWeight: '900', fill: '#94a3b8' }} 
              dy={15} 
            />
            <YAxis hide />
            <RechartsTooltip 
              cursor={{ stroke: '#10b981', strokeWidth: 2 }}
              contentStyle={{ 
                borderRadius: '1.5rem', 
                border: '1px solid #f1f5f9', 
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', 
                padding: '16px' 
              }}
              itemStyle={{ fontSize: '11px', fontWeight: '900', color: '#10b981' }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#10b981" 
              strokeWidth={6} 
              fillOpacity={1} 
              fill="url(#colorRev)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;