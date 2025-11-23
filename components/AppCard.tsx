import React from 'react';
import { AppItem } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface AppCardProps {
  app: AppItem;
  isFeatured?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ app, isFeatured = false }) => {
  
  // --- Featured Card (HaruGalpi) ---
  if (isFeatured) {
    return (
      <motion.div 
        whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
        initial={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full bg-white rounded-xl overflow-hidden group border border-stone-200"
      >
        <div className="relative p-10 md:p-14 flex flex-col h-full z-10">
          <div className="flex items-start justify-between mb-10">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100"
            >
              <app.icon size={40} strokeWidth={1.5} />
            </motion.div>
            <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">
              {app.status}
            </span>
          </div>

          <h3 className="text-4xl font-bold text-stone-900 mb-6 group-hover:text-emerald-800 transition-colors">
            {app.title}
          </h3>
          <p className="text-stone-500 text-lg leading-relaxed mb-12 max-w-lg font-light">
            {app.description}
          </p>

          <div className="mt-auto pt-10 border-t border-stone-100 flex items-center justify-between">
             <div className="flex flex-col">
               <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Category</span>
               <span className="text-sm font-medium text-stone-700">{app.category}</span>
             </div>
             
             <motion.a 
               href={app.url} 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex items-center gap-3 pl-8 pr-6 py-4 bg-stone-900 text-white rounded-full font-medium text-base hover:bg-emerald-600 transition-colors shadow-xl shadow-stone-200 hover:shadow-emerald-200"
             >
               앱 열어보기 <ArrowRight size={18} />
             </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  // --- Default Card (Fallback, though not used in current layout) ---
  return (
    <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm flex flex-col h-full">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
          <app.icon size={22} strokeWidth={2} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-stone-800 mb-3">{app.title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-6">{app.description}</p>
      <a href={app.url} className="inline-flex items-center text-sm font-bold text-stone-400 hover:text-emerald-600 transition-colors mt-auto">
        Explore <ExternalLink size={14} className="ml-1.5" />
      </a>
    </div>
  );
};

export default AppCard;
