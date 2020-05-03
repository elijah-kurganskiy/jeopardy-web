import Button from "components/Button";
// import cn from "classnames";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import React, { useCallback, useState } from "react";
import { useGameController, useGameState } from "service/game";
import Dialog from "components/Dialog";
import Input from "components/Input";
import styles from "./QuestionAnswerDialog.module.css";

const QuestionCaptureDialog = () => {
  const { currentQuestion } = useGameState();
  const { answer } = useGameController();
  const [answerValue, changeAnswer] = useState<string>("");

  const onClick = useCallback(() => {
    answer(answerValue);
  }, [answer, answerValue]);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeAnswer(e.target.value);
    },
    [changeAnswer]
  );

  return (
    <Dialog className={styles.dialog}>
      <Typography
        typographyType={TypographyType.H6}
        typographyColor={TypographyColor.PRIMARY}
        className={styles.dialog__title}
      >
        Вопрос за {currentQuestion?.price}
      </Typography>

      <Typography
        typographyType={TypographyType.TITLE}
        typographyColor={TypographyColor.PRIMARY}
        className={styles.dialog__text}
      >
        {currentQuestion?.title}
      </Typography>
      <Input
        className={styles.dialog__input}
        value={answerValue}
        onChange={onChangeInput}
      />
      <Button
        className={styles.dialog__button}
        onClick={onClick}
        disabled={answerValue.length === 0}
      >
        Answer
      </Button>
    </Dialog>
  );
};

export default React.memo(QuestionCaptureDialog);
