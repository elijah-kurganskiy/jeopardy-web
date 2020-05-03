import cn from "classnames";
import Typography from "components/Typography";
import React from "react";
import { ThemeType } from "types";
import Question from "./../Question";
import styles from "./Theme.module.css";

interface ThemeProps {
  theme: ThemeType;
  className?: string;
}

const Theme = ({ theme: { name, questions }, className }: ThemeProps) => {
  return (
    <div className={cn(styles.theme, className)}>
      <Typography type="title" className={styles.theme__title}>
        {name}
      </Typography>
      {questions.map((question) => (
        <Question
          key={question.id}
          className={styles.theme__question}
          question={question}
        />
      ))}
    </div>
  );
};

export default React.memo(Theme);
