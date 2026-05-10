/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppScreen = 'menu' | 'theory' | 'date_builder' | 'year_guesser';

export interface DateSentenceExercise {
  id: number;
  words: string[];
  correctSentence: string;
  translation: string;
}

export interface YearExercise {
  id: number;
  year: number;
  spanish: string;
  options: string[];
}

export interface TheoryPoint {
  title: string;
  explanation: string;
  example: string;
  translation: string;
}
