import Dialog from "components/Dialog";
import Typography, { TypographyType } from "components/Typography";
import React from "react";
import { OnIncorrectAnswerPayload } from "types";

interface Props extends OnIncorrectAnswerPayload {
  className?: string;
}

const IncorrectAnswerDialog = ({ rightAnswer }: Props) => {
  return (
    <Dialog>
      <Typography typographyType={TypographyType.H6}>{rightAnswer}</Typography>
    </Dialog>
  );
};

export default React.memo(IncorrectAnswerDialog);
