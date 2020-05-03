import { GameEvent, GameType, QuizType } from "types";

interface GameState {
  stateName: string;
  currentRoundId: number;
  selectedQuestionId?: number;
  openedQuestionsIds: number[];
  events: GameEvent[];
  answeringPlayerId?: number;
  answeredPlayerIds: [];
  currentPlayerId: number;
}

export interface QueryGame {
  game: GameType & {
    quiz: QuizType;
    state: GameState;
  };
}

export interface QueryCurrentUser {
  me: {
    id: number;
    username: string;
  };
}

export interface SubscriptionOnGameStateChange {
  onChangeGameState: GameState;
}
