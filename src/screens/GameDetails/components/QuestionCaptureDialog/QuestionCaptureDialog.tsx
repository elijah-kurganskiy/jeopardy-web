import Button from "components/Button";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import React from "react";
import { useGameController, useGameState } from "service/game";
import Dialog from "components/Dialog/Dialog";
import styles from "./QuestionCaptureDialog.module.css";

const QuestionCaptureDialog = () => {
  const { currentQuestion, user, answeredPlayerIds } = useGameState();
  const { captureQuestion } = useGameController();

  const userAlreadyAnswered =
    !!user?.id && answeredPlayerIds.includes(user?.id);

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

      <Button
        className={styles.dialog__button}
        onClick={captureQuestion}
        disabled={userAlreadyAnswered}
      >
        I know
      </Button>
    </Dialog>
  );
};

export default React.memo(QuestionCaptureDialog);
