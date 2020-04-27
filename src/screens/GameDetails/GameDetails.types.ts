import { GameType, QuizType } from "types";

export interface QueryGame {
  game: GameType & {
    quiz: QuizType;
  };
}
