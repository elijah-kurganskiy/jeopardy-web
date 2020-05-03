import cn from "classnames";
import Typography from "components/Typography";
import React, { useCallback } from "react";
import { useGameController, useGameState } from "service/game";
import { QuestionType } from "types";
import styles from "./Question.module.css";

interface QuestionProps {
  question: QuestionType;
  className?: string;
}

const Question = React.memo(
  ({ question: { id, price }, className }: QuestionProps) => {
    const { selectQuestion } = useGameController();
    const { openedQuestionsIds, user, currentPlayerId } = useGameState();
    const hidden = openedQuestionsIds.includes(id);
    const onClick = useCallback(() => selectQuestion(id), [selectQuestion, id]);
    const disableSelecting = user?.id !== currentPlayerId;
    return (
      <div
        onClick={onClick}
        className={cn(
          className,
          disableSelecting && styles.question_disabled,
          hidden && styles.question_hidden,
          styles.question
        )}
      >
        <Typography
          className={styles.question__price}
          type="subtitle"
          color="secondary"
        >
          {price}
        </Typography>
      </div>
    );
  }
);

export default Question;
