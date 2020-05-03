import { GameType, QuizType } from "types";

interface GameState {
  stateName: string;
  currentRoundId: number;
  selectedQuestionId?: number;
}

export interface QueryGame {
  game: GameType & {
    quiz: QuizType;
    state: GameState;
  };
}

export interface SubscriptionOnGameStateChange {
  onChangeGameState: GameState;
}
