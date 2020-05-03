import Button from "components/Button";
// import cn from "classnames";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import React, { useCallback, useMemo, useState } from "react";
import { useGameController, useGameState } from "service/game";
import Dialog from "components/Dialog";
import Input from "components/Input";
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
            typographyType={TypographyType.SUBTITLE}
          typographyColor={TypographyColor.SECONDARY}
        >
          {answeringPlayer?.username} is answering
        </Typography>
      </>
    ),
    [answeringPlayer]
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
      {currentUserIsAnswering ? renderInput : renderStub}
    </Dialog>
  );
};

export default React.memo(QuestionAnswerDialog);
