import React from 'react';
import { AppItem } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface AppCardProps {
  app: AppItem;
  isFeatured?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ app, isFeatured = false }) => {
  
  // --- Featured Card (HaruGalpi - Large) ---
  if (isFeatured) {
    return (
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)" }}
        initial={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}
        transition={{ duration: 0.3 }}
        className="relative h-full bg-white rounded-xl overflow-hidden group border border-stone-200 flex flex-col"
      >
        <div className="relative p-8 md:p-12 flex flex-col h-full z-10">
          <div className="flex items-start justify-between mb-8">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100"
            >
              <app.icon size={36} strokeWidth={1.5} />
            </motion.div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wide">
              {app.status === 'live' ? 'Live Service' : app.status}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 group-hover:text-emerald-800 transition-colors">
            {app.title}
          </h3>
          <p className="text-stone-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg font-light">
            {app.description}
          </p>

          <div className="mt-auto pt-8 border-t border-stone-100 flex items-center justify-between">
             <div className="flex flex-col">
               <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Category</span>
               <span className="text-sm font-medium text-stone-700">{app.category}</span>
             </div>
             
             <motion.a 
               href={app.url} 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex items-center gap-2 pl-6 pr-4 py-3 bg-stone-900 text-white rounded-full font-medium text-sm md:text-base hover:bg-emerald-600 transition-colors shadow-xl shadow-stone-200 hover:shadow-emerald-200"
             >
               앱 열어보기 <ArrowRight size={16} />
             </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  // --- Default Card (Project B, Idea Lab - Small) ---
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm flex flex-col h-full min-h-[250px] relative overflow-hidden group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 bg-stone-50 text-stone-500 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors rounded-xl flex items-center justify-center border border-stone-100 group-hover:border-emerald-100">
          <app.icon size={22} strokeWidth={2} />
        </div>
        {app.status !== 'live' && (
           <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider border border-stone-200 px-2 py-0.5 rounded-full">
             {app.status}
           </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors">
        {app.title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
        {app.description}
      </p>
      
      <div className="mt-auto pt-4 border-t border-stone-50">
        <span className="inline-flex items-center text-xs font-bold text-stone-300 group-hover:text-emerald-600 transition-colors">
          More Info <ExternalLink size={12} className="ml-1" />
        </span>
      </div>
    </motion.div>
  );
};

export default AppCard;
