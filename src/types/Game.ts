export interface GameType {
  id: number;
}

export interface QuizType {
  id: number;
  rounds: RoundType[];
}

export interface RoundType {
  id: number;
  name: string;
  themes: ThemeType[];
}

export interface ThemeType {
  id: number;
  name: string;
  questions: QuestionType[];
}

export interface QuestionType {
  id: number;
  price: number;
  title: string;
}
