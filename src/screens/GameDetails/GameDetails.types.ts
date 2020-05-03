import { GameEvent, GameType, QuizType } from "types";

interface GameState {
  stateName: string;
  currentRoundId: number;
  selectedQuestionId?: number;
  openedQuestionsIds: number[];
  events: GameEvent[];
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
