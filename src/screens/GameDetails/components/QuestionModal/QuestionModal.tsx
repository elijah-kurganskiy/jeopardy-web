import React from "react";
// import cn from "classnames";
import Modal from "components/Modal";
import Paper from "components/Paper";
import Typography, { TypographyType } from "components/Typography";
import Button from "components/Button";
import { useGameController } from "service/game";
import styles from "./QuestionModal.module.css";

interface Props {
  image?: string;
  isOpen?: boolean;
  text?: string;
}

const QuestionModal = ({ text, isOpen }: Props) => {
  const { captureQuestion } = useGameController();
  return (
    <Modal className={styles.modal} isOpen={isOpen}>
      <Paper className={styles.dialog}>
        <Typography typographyType={TypographyType.H6}>{text}</Typography>

        <Button className={styles.dialog__button} onClick={captureQuestion}>
          I know
        </Button>
      </Paper>
    </Modal>
  );
};

export default React.memo(QuestionModal);
