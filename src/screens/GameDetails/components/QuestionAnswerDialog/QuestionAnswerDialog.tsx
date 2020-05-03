import Button from "components/Button";
import Dialog from "components/Dialog";
import Input from "components/Input";
// import cn from "classnames";
import Typography from "components/Typography";
import React, { useCallback, useMemo, useState } from "react";
import { useGameController, useGameState } from "service/game";
import styles from "./QuestionAnswerDialog.module.css";

const QuestionAnswerDialog = () => {
  const {
    answeringPlayerId,
    answeringPlayer,
    currentQuestion,
    user,
  } = useGameState();
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

  const currentUserIsAnswering = answeringPlayerId === user?.id;

  const renderInput = useMemo(() => {
    return (
      <>
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
      </>
    );
  }, [answerValue, onChangeInput, onClick]);

  const renderStub = useMemo(
    () => (
      <>
        <Typography
          className={styles.dialog__stubText}
          type="subtitle"
          color="secondary"
        >
          {answeringPlayer?.username} is answering
        </Typography>
      </>
    ),
    [answeringPlayer]
  );

  return (
    <Dialog className={styles.dialog}>
      <Typography type="h6" color="primary" className={styles.dialog__title}>
        Вопрос за {currentQuestion?.price}
      </Typography>

      <Typography type="title" color="primary" className={styles.dialog__text}>
        {currentQuestion?.title}
      </Typography>
      {currentUserIsAnswering ? renderInput : renderStub}
    </Dialog>
  );
};

export default React.memo(QuestionAnswerDialog);
