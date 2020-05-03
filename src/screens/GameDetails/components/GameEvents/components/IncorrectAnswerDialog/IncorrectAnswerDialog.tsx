import Dialog from "components/Dialog";
import Typography from "components/Typography";
import React from "react";
import { OnIncorrectAnswerPayload } from "types";

interface Props extends OnIncorrectAnswerPayload {
  className?: string;
}

const IncorrectAnswerDialog = ({ rightAnswer }: Props) => {
  return (
    <Dialog>
      <Typography type="h6">{rightAnswer}</Typography>
    </Dialog>
  );
};

export default React.memo(IncorrectAnswerDialog);
