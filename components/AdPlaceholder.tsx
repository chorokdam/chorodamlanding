import React from 'react';
import { AdPlaceholderProps } from '../types';

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ format, label = "ADVERTISEMENT", className = "" }) => {
  
  const getDimensions = () => {
    switch (format) {
      case 'horizontal':
        return 'min-h-[90px] w-full max-w-[728px]';
      case 'rectangle':
        return 'min-h-[250px] w-full'; 
      case 'vertical':
        return 'min-h-[600px] w-full';
      default:
        return 'min-h-[100px] w-full';
    }
  };

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <div 
        className={`
          bg-stone-50 border border-dashed border-stone-300 rounded-xl
          flex flex-col items-center justify-center text-stone-400 
          relative overflow-hidden group cursor-pointer hover:border-stone-400 hover:bg-stone-100 transition-all
          ${getDimensions()}
        `}
      >
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
        </div>

        <span className="text-[10px] font-bold tracking-[0.2em] text-stone-300 mb-2 uppercase group-hover:text-stone-500 transition-colors">
          {label}
        </span>
        <span className="text-sm font-medium opacity-60">Google Ad Space</span>
        <span className="text-xs opacity-40 mt-1 font-mono">{format}</span>
      </div>
    </div>
  );
};

export default AdPlaceholder;
