import React from 'react';
import { motion } from 'motion/react';
import { DATE_THEORY } from './data';
import { Lightbulb, Zap, Calendar } from 'lucide-react';

export default function TheoryView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-6 sm:space-y-8 py-6 sm:py-8"
    >
      <div className="bg-slate-950 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] shadow-2xl border-orange-500 border-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <Calendar className="w-24 h-24 sm:w-32 sm:h-32 text-orange-500" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-yellow-400 uppercase italic mb-4 sm:mb-6">Իսպաներենի Ամսաթվերը</h2>
        <p className="text-white text-base sm:text-lg leading-relaxed max-w-2xl opacity-80">
          Սովորիր, թե ինչպես ճիշտ կազմել և արտասանել ամսաթվերն ու տարեթվերը իսպաներենում:
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {DATE_THEORY.map((point, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-5 sm:p-6 rounded-3xl shadow-sm border-2 border-slate-50 flex flex-col sm:flex-row gap-4 sm:gap-6 hover:border-rose-600 transition-all"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-rose-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
              <span className="text-lg sm:text-xl font-black italic">{i + 1}</span>
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 uppercase italic leading-none">{point.title}</h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base whitespace-pre-line">{point.explanation}</p>
              <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-orange-500 mt-2 sm:mt-4">
                <p className="text-orange-500 font-black text-base sm:text-lg italic">"{point.example}"</p>
                <p className="text-slate-400 font-bold text-[10px] sm:text-sm uppercase tracking-wider">{point.translation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-rose-600 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] text-white flex flex-col sm:flex-row items-center gap-4 sm:gap-8 shadow-xl">
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-yellow-400 rounded-full flex items-center justify-center shadow-inner">
             <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-rose-600" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
             <p className="text-xl font-black uppercase italic">Հիշի՛ր</p>
             <p className="text-white/90 font-medium leading-relaxed text-sm sm:text-base">
                Ամսաթվերը միշտ օգտագործվում են արական սեռի արտիկլով՝ "el": Ամիսների անունները միշտ փոքրատառով են գրվում իսպաներենում:
             </p>
          </div>
      </div>
    </motion.div>
  );
}
