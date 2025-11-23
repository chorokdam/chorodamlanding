import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  PenLine, 
  Mail,
  ArrowUpRight,
  Sparkles,
  Coffee
} from 'lucide-react';
import { motion } from 'framer-motion';
import { AppItem } from './types';
import AdPlaceholder from './components/AdPlaceholder';
import AppCard from './components/AppCard';

// --- Data: Only HaruGalpi remains ---
const APPS_DATA: AppItem[] = [
  {
    id: '1',
    title: '하루갈피',
    description: '스쳐 지나가는 하루를 조용한 갈피로 남겨두는 미니멀 일기 앱. 복잡한 소셜 기능 없이, 오직 당신의 기록과 감정에만 집중할 수 있는 공간입니다.',
    icon: PenLine,
    url: 'https://harugalpi.vercel.app',
    status: 'live',
    category: 'Lifestyle'
  }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } // Custom easing for smooth effect
  }
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* --- Header --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-stone-100/80 backdrop-blur-md border-stone-200 py-3 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200"
            >
              <Leaf size={18} fill="currentColor" className="opacity-90" />
            </motion.div>
            <span className="font-bold text-xl text-stone-800 tracking-tight">
              초록담
            </span>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a 
              href="mailto:daily.chorokdam@gmail.com" 
              className="px-5 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-emerald-200/50 flex items-center gap-2"
            >
              <Mail size={14} />
              Contact
            </a>
          </motion.nav>
        </div>
      </header>

      <main className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
        
        {/* --- Hero Section with Animations --- */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-24 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-10"
        >
          <div className="max-w-2xl relative z-10">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles size={12} />
              Indie App Studio
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] mb-8 tracking-tight">
              일상의 작은 틈을 <br/>
              <span className="relative inline-block text-emerald-600 z-10">
                초록빛
                {/* Highlighter Animation */}
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                  className="absolute bottom-2 left-0 h-4 bg-emerald-200/50 -z-10 rounded-sm"
                />
              </span>으로 채웁니다.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-stone-500 font-light leading-relaxed max-w-lg">
              초록담은 일상의 소소한 가치를 발견하고 기록하는 도구를 만듭니다.
              복잡함은 덜어내고, 꼭 필요한 온기만 담았습니다.
            </motion.p>
          </div>

          {/* Hero Right: Simple Status */}
          <motion.div variants={itemVariants} className="hidden md:block text-right pb-2">
            <div className="flex items-center gap-2 text-stone-500 font-medium text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              현재 서비스 운영 중
            </div>
          </motion.div>
        </motion.section>

        {/* --- Main Content Grid --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          
          {/* Left Column: HaruGalpi (Takes 2/3 space) */}
          <div className="lg:col-span-2 h-full">
            <AppCard app={APPS_DATA[0]} isFeatured={true} />
          </div>

          {/* Right Column: Intro & Ad (Takes 1/3 space) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Studio Intro Card */}
            <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm transition-all duration-300 relative overflow-hidden h-fit">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center">
                  <Coffee size={24} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 mb-3">지속 가능한 창작</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                초록담은 숫자가 아닌 가치를 좇습니다. <br/>
                이 곳의 수익금은 지속 가능한 서비스 운영과 더 나은 도구를 만들기 위한 거름이 됩니다.
              </p>
              
              <a href="mailto:daily.chorokdam@gmail.com" className="inline-flex items-center text-sm font-bold text-stone-400 hover:text-emerald-600 transition-colors group">
                Contact Studio <ArrowUpRight size={14} className="ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Vertical Ad Unit */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex-grow min-h-[250px] flex flex-col items-center justify-center text-center">
               <AdPlaceholder format="rectangle" label="Sponsor" />
               <p className="text-[10px] text-stone-300 mt-4 px-4 font-medium tracking-wide">
                 ADVERTISEMENT
               </p>
            </div>

          </div>
        </motion.div>

        {/* --- Bottom Ad Section --- */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 mb-10"
        >
          <div className="w-full max-w-4xl mx-auto border-t border-stone-200 pt-12 flex flex-col items-center">
             <AdPlaceholder format="horizontal" className="w-full opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </motion.section>

      </main>

      {/* --- Footer --- */}
      <footer className="bg-stone-50 border-t border-stone-200 py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 text-emerald-700 opacity-80">
             <Leaf size={20} />
             <span className="font-bold text-lg">초록담</span>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <a href="mailto:daily.chorokdam@gmail.com" className="flex items-center gap-2 text-stone-500 hover:text-emerald-600 font-medium transition-colors">
              <Mail size={16} />
              daily.chorokdam@gmail.com
            </a>
            <p className="text-stone-400 text-sm">
               © 2025 Chorokdam Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
