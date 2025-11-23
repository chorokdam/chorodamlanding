import React from 'react';
import { AppItem } from '../types';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';

interface AppCardProps {
  app: AppItem;
  isFeatured?: boolean;
  minimal?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ app, isFeatured = false, minimal = false }) => {
  const isComingSoon = app.status === 'coming-soon';

  // --- Minimal Card (For sidebars or lists) ---
  if (minimal) {
    return (
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-stone-100 text-stone-500 rounded-full flex items-center justify-center group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
            <app.icon size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-stone-800 truncate group-hover:text-emerald-700 transition-colors">{app.title}</h4>
            <p className="text-xs text-stone-400 truncate">{app.category}</p>
          </div>
          {isComingSoon && <Lock size={14} className="text-stone-300" />}
        </div>
      </div>
    );
  }

  // --- Featured Card (Large, Hero-like) ---
  if (isFeatured) {
    return (
      <div className="relative h-full bg-white rounded-xl overflow-hidden group border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative p-8 md:p-12 flex flex-col h-full z-10">
          <div className="flex items-start justify-between mb-8">
            <div className="w-16 h-16 bg-stone-50 rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
              <app.icon size={32} strokeWidth={1.5} />
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">
              {app.status}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-stone-900 mb-4 group-hover:text-emerald-800 transition-colors">
            {app.title}
          </h3>
          <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-lg">
            {app.description}
          </p>

          <div className="mt-auto pt-8 border-t border-stone-100 flex items-center justify-between">
             <div className="flex flex-col">
               <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider mb-1">Category</span>
               <span className="text-sm font-medium text-stone-700">{app.category}</span>
             </div>
             
             <a 
               href={app.url} 
               className="flex items-center gap-2 pl-6 pr-4 py-3 bg-stone-900 text-white rounded-full font-medium text-sm hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-200 group-hover:gap-3"
             >
               앱 열어보기 <ArrowRight size={16} />
             </a>
          </div>
        </div>
      </div>
    );
  }

  // --- Default Card ---
  return (
    <div className={`
      bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300
      flex flex-col h-full relative overflow-hidden group
      ${isComingSoon ? 'bg-stone-50' : ''}
    `}>
      <div className="flex items-start justify-between mb-6">
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center transition-colors
          ${isComingSoon ? 'bg-stone-100 text-stone-400' : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'}
        `}>
          <app.icon size={22} strokeWidth={2} />
        </div>
        {isComingSoon && <span className="text-[10px] font-bold bg-stone-200 text-stone-500 px-2 py-1 rounded-md">SOON</span>}
      </div>

      <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors">
        {app.title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
        {app.description}
      </p>

      {!isComingSoon ? (
        <a href={app.url} className="inline-flex items-center text-sm font-bold text-stone-400 group-hover:text-emerald-600 transition-colors mt-auto">
          Explore <ExternalLink size={14} className="ml-1.5" />
        </a>
      ) : (
        <div className="mt-auto text-xs text-stone-400 italic">Preparing...</div>
      )}
    </div>
  );
};

export default AppCard;
