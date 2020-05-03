import React, { useContext } from "react";
import { GameEvent, QuestionType, RoundType } from "types";

export interface GameController {
  selectQuestion: (questionId: number) => void;
  answer: (answer: string) => void;
  captureQuestion: () => void;
}

export interface GameState {
  stateName: string;
  currentRound: RoundType;
  currentQuestion?: QuestionType;
  answeredPlayerIds: number[];
  currentPlayerId: number;
  events: GameEvent[];
  answeringPlayerId?: number;
  answeringPlayer?: {
    username: string;
  };
  user?: {
    id: number;
  };
  openedQuestionsIds: number[];
}

const GameControllerContext = React.createContext<GameController>(null!);
const GameStateContext = React.createContext<GameState>(null!);

export const useGameController = () => {
  return useContext(GameControllerContext);
};

export const useGameState = () => {
  return useContext(GameStateContext);
};

export function GameControllerProvider(props: {
  controller: GameController;
  children: React.ReactNode;
}) {
  return (
    <GameControllerContext.Provider value={props.controller}>
      {props.children}
    </GameControllerContext.Provider>
  );
}

export function GameStateProvider(props: {
  state: GameState;
  children: React.ReactNode;
}) {
  return (
    <GameStateContext.Provider value={props.state}>
      {props.children}
    </GameStateContext.Provider>
  );
}
