import React, { useCallback } from "react";
import { QuestionType } from "types";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import cn from "classnames";
import { useGameController, useGameState } from "service/game";
import styles from "./Question.module.css";

interface QuestionProps {
  question: QuestionType;
  className?: string;
}

const Question = React.memo(
  ({ question: { id, price }, className }: QuestionProps) => {
    const { selectQuestion } = useGameController();
    const { openedQuestionsIds } = useGameState();
    const hidden = openedQuestionsIds.includes(id);
    const onClick = useCallback(() => selectQuestion(id), [selectQuestion, id]);
    return (
      <div
        onClick={onClick}
        className={cn(
          className,
          hidden && styles.question_hidden,
          styles.question
        )}
      >
        <Typography
          className={styles.question__price}
          typographyType={TypographyType.SUBTITLE}
          typographyColor={TypographyColor.SECONDARY}
        >
          {price}
        </Typography>
      </div>
    );
  }
);

export default Question;
