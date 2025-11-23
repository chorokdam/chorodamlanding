import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  PenLine, 
  Mail,
  Palette,
  ArrowUpRight,
  Sparkles,
  Coffee,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import { AppItem } from './types';
import AdPlaceholder from './components/AdPlaceholder';
import AppCard from './components/AppCard';

// --- Data ---
const APPS_DATA: AppItem[] = [
  {
    id: '1',
    title: '하루갈피',
    description: '스쳐 지나가는 하루를 조용한 갈피로 남겨두는 미니멀 일기 앱. 복잡한 소셜 기능 없이, 오직 당신의 기록과 감정에만 집중할 수 있는 공간입니다.',
    icon: PenLine,
    url: 'https://harugalpi.vercel.app',
    status: 'live',
    category: 'Lifestyle'
  },
  {
    id: '2',
    title: '컬러 팔레트',
    description: 'AI가 추천하는 감각적인 배색 조합 도구.',
    icon: Palette,
    url: '#',
    status: 'beta',
    category: 'Design Tool'
  },
  {
    id: '3',
    title: '프로젝트 B',
    description: '감정과 장면을 담아내는 새로운 기록 도구.',
    icon: Leaf,
    url: '#',
    status: 'coming-soon',
    category: 'Planning'
  },
  {
    id: '4',
    title: '아이디어 랩',
    description: '일상의 불편함을 해결하는 작은 실험들.',
    icon: Layers,
    url: '#',
    status: 'coming-soon',
    category: 'Lab'
  },
];

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-stone-100/90 backdrop-blur-md border-stone-200 py-3 shadow-sm' : 'bg-transparent border-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Leaf size={18} fill="currentColor" className="opacity-90" />
            </div>
            <span className="font-bold text-xl text-stone-800 tracking-tight">
              초록담
            </span>
          </div>
          
          <nav className="flex items-center gap-6">
            <a href="mailto:daily.chorokdam@gmail.com" className="text-sm font-medium text-stone-500 hover:text-emerald-600 transition-colors hidden md:block">
              문의하기
            </a>
            <a 
              href="mailto:daily.chorokdam@gmail.com" 
              className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-emerald-600 transition-colors shadow-sm"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-6 max-w-6xl mx-auto">
        
        {/* --- Hero Section --- */}
        <section className="mb-20 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles size={12} />
              Indie App Studio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 leading-[1.1] mb-6 tracking-tight">
              일상의 작은 틈을 <br/>
              <span className="text-emerald-600 relative inline-block">
                초록빛<span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/40 -z-10"></span>
              </span>으로 채웁니다.
            </h1>
            <p className="text-lg text-stone-500 font-light leading-relaxed max-w-lg">
              초록담은 일상의 소소한 가치를 발견하고 기록하는 도구를 만듭니다.
              천천히, 하지만 단단하게 필요한 앱을 만들어갑니다.
            </p>
          </motion.div>

          {/* Hero Right: Status */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:block text-right"
          >
            <p className="text-stone-400 text-sm mb-1">Current Status</p>
            <div className="flex items-center gap-2 text-emerald-600 font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-stone-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Developing New Project
            </div>
          </motion.div>
        </section>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Feature (Left Large) */}
          <div className="md:col-span-8 flex flex-col gap-6">
            {/* Featured App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="h-full">
                <AppCard app={APPS_DATA[0]} isFeatured={true} />
              </div>
            </motion.div>

            {/* Secondary Apps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {APPS_DATA.slice(1, 3).map((app, idx) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <AppCard app={app} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar / Ad Column (Right) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Profile / Intro Card (White, Standard Style) */}
            <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 text-stone-600 flex items-center justify-center group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                  <Coffee size={22} strokeWidth={2} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 mb-3">지속 가능한 창작</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                초록담은 숫자가 아닌 가치를 좇습니다. 이 곳의 수익금은 지속 가능한 서비스 운영과 더 나은 도구를 만들기 위한 거름이 됩니다.
              </p>
              
              <a href="mailto:daily.chorokdam@gmail.com" className="inline-flex items-center text-sm font-bold text-stone-400 hover:text-emerald-600 transition-colors">
                Contact Studio <ArrowUpRight size={14} className="ml-1.5" />
              </a>
            </div>

            {/* Vertical Ad Unit */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex-grow min-h-[300px] flex flex-col items-center justify-center text-center">
               <AdPlaceholder format="rectangle" label="Sponsor" />
               <p className="text-xs text-stone-400 mt-4 px-4">
                 이 공간은 Google AdSense 광고를 통해 운영에 도움을 줍니다.
               </p>
            </div>

            {/* Small Lab Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <AppCard app={APPS_DATA[3]} minimal={true} />
            </motion.div>
          </div>
        </div>

        {/* --- Bottom Ad Section --- */}
        <section className="mt-20 mb-10">
          <div className="w-full max-w-4xl mx-auto border-t border-stone-200 pt-10 flex flex-col items-center">
             <h3 className="text-sm font-medium text-stone-400 mb-6 uppercase tracking-widest">Sponsored</h3>
             <AdPlaceholder format="horizontal" className="w-full" />
          </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="bg-stone-100 border-t border-stone-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-col justify-center items-center gap-6 text-center">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
             <Leaf size={20} />
             <span className="font-bold text-lg">초록담</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <a href="mailto:daily.chorokdam@gmail.com" className="flex items-center gap-2 text-stone-500 hover:text-emerald-600 font-medium transition-colors">
              <Mail size={16} />
              daily.chorokdam@gmail.com
            </a>
            <div className="text-stone-400 text-sm flex flex-wrap justify-center gap-4">
               <span>© 2025 Chorokdam Studio.</span>
               <span className="hidden md:inline">|</span>
               <a href="#" className="hover:text-stone-800 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-stone-800 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
