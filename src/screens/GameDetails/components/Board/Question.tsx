import React from "react";
import { QuestionType } from "types";
import Typography from "components/Typography/Typography";

interface QuestionProps {
  question: QuestionType;
}

const Question = React.memo(({ question: { price } }: QuestionProps) => {
  return (
    <div>
      <Typography>{price}</Typography>
    </div>
  );
});

export default Question;
