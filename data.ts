import { TheoryPoint, DateSentenceExercise, YearExercise } from './types';

export const DATE_THEORY: TheoryPoint[] = [
  {
    title: "📅 Ամսաթվի կանոնները",
    explanation: "Իսպաներենում ամսաթիվը սովորաբար կազմվում է հետևյալ կերպ՝\n1. Hoy es («Այսօր … է») (ոչ պարտադիր)\n2. el (արտիկլ)\n3. թիվ\n4. de (նախդիր)\n5. ամիս\n6. de (նախդիր)\n7. տարի",
    example: "Hoy es el 8 de mayo de 2026",
    translation: "Այսօր 2026 թվականի մայիսի 8-ն է"
  },
  {
    title: "✅ Ճիշտ տարբերակներ",
    explanation: "🔹 1. Estamos en + տարի (Estamos en 2026 — Մենք 2026 թվականին ենք)\n🔹 2. En + տարի (En 2026 viajo a España — 2026-ին գնում եմ Իսպանիա)\n🔹 3. Este año / El año pasado (Այս տարի / Անցյալ տարի)\n🔹 4. El año que viene (Հաջորդ տարի)",
    example: "El año pasado viajé a España.",
    translation: "Անցյալ տարի ճանապարհորդեցի Իսպանիա"
  },
  {
    title: "🧠 Ամենակարևորը",
    explanation: "👉 Ամսաթիվ (օր + ամիս + տարի): el 9 de mayo de 2026\n👉 Միայն տարի: en 2026 ✔️ (❌ en año 2026)",
    example: "En 2026",
    translation: "2026-ին"
  },
  {
    title: "🔥 Կարճ",
    explanation: "• Estamos en 2026\n• En 2026\n• El año pasado\n• Este año\n• El año que viene",
    example: "Este año estudio mucho.",
    translation: "Այս տարի շատ եմ սովորում"
  }
];

export const DATE_BUILDER_DATA: DateSentenceExercise[] = [
  { id: 1, words: ["Hoy", "es", "el", "5", "de", "mayo", "de", "2025"], correctSentence: "Hoy es el 5 de mayo de 2025", translation: "Այսօր 2025 թվականի մայիսի 5-ն է" },
  { id: 2, words: ["Hoy", "es", "el", "12", "de", "junio", "de", "2024"], correctSentence: "Hoy es el 12 de junio de 2024", translation: "Այսօր 2024 թվականի հունիսի 12-ն է" },
  { id: 3, words: ["Hoy", "es", "el", "1", "de", "enero", "de", "2000"], correctSentence: "Hoy es el 1 de enero de 2000", translation: "Այսօր 2000 թվականի հունվարի 1-ն է" },
  { id: 4, words: ["Hoy", "es", "el", "25", "de", "diciembre", "de", "2023"], correctSentence: "Hoy es el 25 de diciembre de 2023", translation: "Այսօր 2023 թվականի դեկտեմբերի 25-ն է" },
  { id: 5, words: ["Hoy", "es", "el", "31", "de", "octubre", "de", "2026"], correctSentence: "Hoy es el 31 de octubre de 2026", translation: "Այսօր 2026 թվականի հոկտեմբերի 31-ն է" }
];

export const YEAR_GUESSER_DATA: YearExercise[] = [
  { id: 1, year: 1663, spanish: "mil seiscientos sesenta y tres", options: ["1663", "1763", "1673"] },
  { id: 2, year: 1775, spanish: "mil setecientos setenta y cinco", options: ["1775", "1875", "1765"] },
  { id: 3, year: 1995, spanish: "mil novecientos noventa y cinco", options: ["1995", "1895", "1985"] },
  { id: 4, year: 2024, spanish: "dos mil veinticuatro", options: ["2024", "2124", "2014"] },
  { id: 5, year: 2110, spanish: "dos mil ciento diez", options: ["2110", "2010", "2210"] },
  { id: 6, year: 1812, spanish: "mil ochocientos doce", options: ["1812", "1822", "1712"] },
  { id: 7, year: 1540, spanish: "mil quinientos cuarenta", options: ["1540", "1640", "1550"] },
  { id: 8, year: 2200, spanish: "dos mil doscientos", options: ["2200", "2100", "2300"] },
  { id: 9, year: 1905, spanish: "mil novecientos cinco", options: ["1905", "1805", "1915"] },
  { id: 10, year: 2050, spanish: "dos mil cincuenta", options: ["2050", "2005", "2150"] }
];
