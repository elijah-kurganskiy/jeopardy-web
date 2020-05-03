import React from "react";
import { useParams } from "react-router-dom";
import {
  GameController,
  GameControllerProvider,
  GameState,
  GameStateProvider,
} from "service/game";
import GameEvents from "./components/GameEvents";
import GameRouter from "./components/GameRouter";
import {
  useCurrentRound,
  useGameQuery,
  useOnAnswer,
  useOnCaptureQuestion,
  useOnSelectQuestion,
  useSelectedQuestion,
} from "./GameDetails.helper";
import styles from "./GameDetails.module.css";

export default function GameDetails() {
  let { id } = useParams();
  const gameId = parseInt(id!, 10);
  const { data, loading, error } = useGameQuery(gameId);

  const currentRound = useCurrentRound(data);
  const currentQuestion = useSelectedQuestion(data);
  const selectQuestion = useOnSelectQuestion(gameId);
  const captureQuestion = useOnCaptureQuestion(gameId);
  const answer = useOnAnswer(gameId);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  const gameController: GameController = {
    selectQuestion,
    captureQuestion,
    answer,
  };

  const gameState: GameState = {
    ...data?.game.state!,
    currentRound,
    currentQuestion,
  };

  return (
    <div className={styles.game}>
      <GameControllerProvider controller={gameController}>
        <GameStateProvider state={gameState}>
          <GameRouter />
          <GameEvents />
        </GameStateProvider>
      </GameControllerProvider>
    </div>
  );
}
