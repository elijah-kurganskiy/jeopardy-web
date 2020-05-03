import React from "react";
import { useParams } from "react-router-dom";
import { GameController, GameControllerProvider } from "service/game";
import Board from "./components/Board";
import QuestionModal from "./components/QuestionModal";
import {
  useCurrentRound,
  useGameQuery,
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
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  const gameController: GameController = {
    selectQuestion,
    captureQuestion,
  };

  return (
    <div className={styles.game}>
      <GameControllerProvider controller={gameController}>
        <Board round={currentRound} />
        <QuestionModal
          isOpen={!!currentQuestion}
          text={currentQuestion?.title}
        />
      </GameControllerProvider>
    </div>
  );
}
