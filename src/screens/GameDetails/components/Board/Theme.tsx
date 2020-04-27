import { ThemeType } from "types";
import React from "react";
import Typography from "components/Typography";
import Question from "./Question";

interface ThemeProps {
  theme: ThemeType;
}

const Theme = ({ theme: { name, questions } }: ThemeProps) => {
  return (
    <div>
      <Typography>{name}</Typography>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default React.memo(Theme);
