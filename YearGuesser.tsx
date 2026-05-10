import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  ArrowLeft,
  Calendar,
  ArrowRight,
  Hash
} from 'lucide-react';
import { YEAR_GUESSER_DATA } from './data';

interface YearGuesserProps {
  onBack: () => void;
}

const YearGuesser: React.FC<YearGuesserProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'feedback' | 'finished'>('playing');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuestion = YEAR_GUESSER_DATA[currentIndex];

  const handleAnswer = (option: string) => {
    if (gameState !== 'playing') return;

    setSelectedOption(option);
    const correct = option === currentQuestion.year.toString();
    setIsCorrect(correct);
    setGameState('feedback');

    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < YEAR_GUESSER_DATA.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setGameState('playing');
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setGameState('finished');
    }
  };

  if (gameState === 'finished') {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 bg-rose-600 rounded-[60px] shadow-2xl text-white">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl mb-8"
        >
          <Trophy className="w-20 h-20 text-rose-600" />
        </motion.div>
        
        <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-4">Ավարտ!</h2>
        <div className="text-9xl font-black italic mb-12 text-yellow-400">{score} / {YEAR_GUESSER_DATA.length}</div>

        <button 
          onClick={onBack}
          className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase italic tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          Վերադառնալ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* Header Info */}
      <div className="flex justify-between items-center bg-white p-6 rounded-[32px] shadow-sm border-2 border-slate-50">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white">
              <Hash className="w-8 h-8" />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none">Տարեթիվ</p>
              <p className="text-xl font-black text-slate-800 italic">{currentIndex + 1} / {YEAR_GUESSER_DATA.length}</p>
           </div>
        </div>

        <div className="flex flex-col items-center">
           <div className="text-rose-600 font-black italic text-3xl leading-none">{score}</div>
           <div className="text-[10px] font-black uppercase text-slate-300 tracking-widest mt-1">ՄԻԱՎՈՐ</div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-slate-950 p-6 sm:p-20 rounded-[40px] sm:rounded-[60px] shadow-2xl border-t-8 border-orange-500 space-y-8 sm:space-y-12 relative overflow-hidden">
          <div className="text-center space-y-4 sm:space-y-8">
            <p className="text-orange-500 uppercase font-black tracking-[0.4em] text-[10px] sm:text-xs">Ո՞ր տարեթիվն է սա</p>
            <h3 className="text-2xl sm:text-6xl font-black text-white italic leading-tight tracking-tight uppercase break-words">
               {currentQuestion.spanish}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {currentQuestion.options.map((option, idx) => (
               <motion.button
                 key={idx}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 disabled={gameState !== 'playing'}
                 onClick={() => handleAnswer(option)}
                 className={`
                    p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] font-black uppercase italic tracking-widest text-2xl sm:text-3xl transition-all border-b-8
                    ${selectedOption === option 
                      ? (isCorrect ? 'bg-yellow-400 text-black border-yellow-600' : 'bg-rose-600 text-white border-rose-800')
                      : (gameState === 'feedback' && option === currentQuestion.year.toString() ? 'bg-green-500 text-white border-green-700' : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-orange-500 hover:text-white hover:border-orange-600 shadow-sm shadow-black/50')}
                 `}
               >
                 {option}
               </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {gameState === 'feedback' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-6 border-t border-slate-800 flex flex-col items-center gap-6"
              >
                <div className="flex items-center gap-4">
                  {isCorrect ? (
                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                  ) : (
                    <XCircle className="w-12 h-12 text-rose-600" />
                  )}
                  <span className={`text-3xl font-black italic uppercase ${isCorrect ? 'text-green-400' : 'text-rose-600'}`}>
                    {isCorrect ? 'Ճիշտ է!' : 'Սխալ է!'}
                  </span>
                </div>

                <button 
                  onClick={handleNext}
                  className="w-full max-w-sm p-6 bg-orange-500 text-white rounded-3xl font-black uppercase italic tracking-widest text-xl shadow-xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Հաջորդը <ArrowRight className="w-6 h-6" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
      </div>

      <button 
        onClick={onBack}
        className="mx-auto flex items-center gap-4 bg-white hover:bg-slate-50 px-10 py-4 rounded-full text-slate-500 font-black uppercase italic tracking-widest transition-all shadow-sm border border-slate-100"
      >
        <ArrowLeft className="w-5 h-5" /> Վերադառնալ
      </button>
    </div>
  );
};

export default YearGuesser;
