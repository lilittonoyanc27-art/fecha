import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Puzzle, 
  RefreshCcw, 
  CheckCircle2, 
  ArrowLeft,
  Trophy,
  Sparkles,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { DATE_BUILDER_DATA } from './data';

interface DateSentenceBuilderProps {
  onBack: () => void;
}

const DateSentenceBuilder: React.FC<DateSentenceBuilderProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = DATE_BUILDER_DATA[currentIndex];

  useEffect(() => {
    if (current) {
      setAvailableWords([...current.words].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
      setFeedback(null);
    }
  }, [currentIndex]);

  const addWord = (word: string, index: number) => {
    if (feedback === 'correct') return;
    setAvailableWords(prev => prev.filter((_, i) => i !== index));
    setSelectedWords(prev => [...prev, word]);
  };

  const removeWord = (word: string, index: number) => {
    if (feedback === 'correct') return;
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
    setAvailableWords(prev => [...prev, word]);
  };

  const handleNext = () => {
    if (currentIndex < DATE_BUILDER_DATA.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      setFinished(true);
    }
  };

  const checkSentence = () => {
    const built = selectedWords.join(' ');
    if (built === current.correctSentence) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('wrong');
    }
  };

  const reset = () => {
    if (feedback !== null) return;
    setAvailableWords([...current.words].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setFeedback(null);
  };

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 bg-slate-950 rounded-[60px] text-white shadow-2xl">
        <Trophy className="w-24 h-24 text-yellow-400 mb-8" />
        <h2 className="text-5xl font-black uppercase italic mb-8">Շատ լավ է!</h2>
        <div className="text-9xl font-black mb-12 text-yellow-400">{score} / {DATE_BUILDER_DATA.length}</div>
        <button onClick={onBack} className="px-12 py-5 bg-rose-600 text-white rounded-full font-black uppercase italic tracking-widest shadow-xl">
           Վերադառնալ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black rounded-full text-xs font-black uppercase tracking-[0.3em]">
           <Calendar className="w-4 h-4" /> Կառուցիր ամսաթիվը
        </div>
        <h2 className="text-4xl sm:text-7xl font-black text-slate-950 uppercase italic tracking-tighter shrink-0">ՎԵՐԱԿԱՆԳՆԻՐ ԿԱՐԳԸ</h2>
        <p className="text-xl font-bold text-rose-600 uppercase tracking-widest italic">{current.translation}</p>
      </div>

      <div className="bg-white p-8 sm:p-16 rounded-[60px] shadow-2xl space-y-12 border-b-8 border-orange-500 min-h-[500px] flex flex-col justify-between">
          <div className={`min-h-[140px] p-8 bg-slate-50 border-4 border-dashed rounded-[40px] flex flex-wrap items-center justify-center gap-4 transition-colors ${feedback === 'wrong' ? 'border-rose-300 bg-rose-50' : 'border-slate-200'}`}>
            <AnimatePresence>
              {selectedWords.map((word, idx) => (
                <motion.button
                  key={`selected-${idx}-${word}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  whileHover={{ y: -5 }}
                  onClick={() => removeWord(word, idx)}
                  className={`px-8 py-4 text-white rounded-2xl font-black text-2xl uppercase italic shadow-lg border-b-4 ${feedback === 'wrong' ? 'bg-rose-600 border-rose-800' : 'bg-orange-500 border-orange-700'}`}
                >
                  {word}
                </motion.button>
              ))}
            </AnimatePresence>
            {selectedWords.length === 0 && (
              <p className="text-slate-300 font-bold uppercase tracking-widest">Տեղադրիր բառերն այստեղ...</p>
            )}
          </div>

          <AnimatePresence>
            {feedback === 'correct' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-center space-y-2"
              >
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-green-100 text-green-700 rounded-full text-xs font-black uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Ճիշտ է!
                </div>
                <p className="text-3xl font-black italic text-green-600">{current.correctSentence}</p>
              </motion.div>
            )}
            {feedback === 'wrong' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-center space-y-2"
              >
                <p className="text-rose-600 font-black uppercase text-xs tracking-widest">Ճիշտ տարբերակն էր՝</p>
                <p className="text-3xl font-black italic text-slate-800">{current.correctSentence}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center justify-center gap-4">
             <AnimatePresence>
                {feedback === null && availableWords.map((word, idx) => (
                  <motion.button
                    key={`available-${idx}-${word}`}
// ...
                    initial={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => addWord(word, idx)}
                    className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-black text-2xl uppercase italic shadow-sm hover:shadow-xl hover:border-black transition-all"
                  >
                    {word}
                  </motion.button>
                ))}
             </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
             <button 
                onClick={reset}
                className="flex-1 p-8 bg-slate-100 text-slate-500 rounded-[40px] font-black uppercase italic tracking-widest text-xl flex items-center justify-center gap-4 hover:bg-slate-200"
             >
                <RefreshCcw className="w-6 h-6" /> Վերսկսել
             </button>
             <button 
                onClick={feedback !== null ? handleNext : checkSentence}
                disabled={selectedWords.length === 0}
                className={`flex-1 p-8 rounded-[40px] font-black uppercase italic tracking-widest text-xl flex items-center justify-center gap-4 transition-all shadow-xl
                   ${feedback === 'correct' ? 'bg-green-600 text-white' : feedback === 'wrong' ? 'bg-rose-600 text-white' : 'bg-slate-950 text-white hover:scale-[1.02]'}
                   ${selectedWords.length === 0 ? 'opacity-50' : ''}
                `}
             >
                {feedback !== null ? <><CheckCircle2 className="w-8 h-8" /> Հաջորդը <ArrowRight className="w-8 h-8" /></> : <><Sparkles className="w-8 h-8" /> Ստուգել</>}
             </button>
          </div>
      </div>

      <button 
        onClick={onBack}
        className="mx-auto flex items-center gap-4 bg-slate-100 hover:bg-slate-200 px-10 py-4 rounded-full text-slate-500 font-black uppercase italic tracking-widest transition-all"
      >
        <ArrowLeft className="w-5 h-5" /> Վերադառնալ
      </button>
    </div>
  );
};

export default DateSentenceBuilder;
