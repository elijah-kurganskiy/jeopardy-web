import React from "react";
import { GAME_ACTIONS_STATES, useGameState } from "service/game";
import Board from "../Board";
import QuestionAnswerDialog from "../QuestionAnswerDialog";
import QuestionCaptureDialog from "../QuestionCaptureDialog";

const GameRouter = () => {
  const { stateName, currentRound } = useGameState();
  switch (stateName) {
    case GAME_ACTIONS_STATES.WAITING_FOR_CAPTURE_QUESTION:
      return (
        <>
          <Board round={currentRound} />
          <QuestionCaptureDialog />
        </>
      );
    case GAME_ACTIONS_STATES.WAITING_FOR_USER_ANSWER:
      return (
        <>
          <Board round={currentRound} />
          <QuestionAnswerDialog />
        </>
      );
    default:
      return <Board round={currentRound} />;
  }
};

export default React.memo(GameRouter);
