import React, { useContext } from "react";

export interface GameController {
  selectQuestion: (questionId: number) => void;
  captureQuestion: () => void;
}

const GameControllerContext = React.createContext<GameController>(null!);

export const useGameController = () => {
  return useContext(GameControllerContext);
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
