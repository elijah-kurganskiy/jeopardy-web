import { ThemeType } from "types";
import React from "react";
import Typography, { TypographyType } from "components/Typography";
import Question from "./../Question";
import styles from "./Theme.module.css";
import cn from "classnames";
interface ThemeProps {
  theme: ThemeType;
  className?: string;
}

const Theme = ({ theme: { name, questions }, className }: ThemeProps) => {
  return (
    <div className={cn(styles.theme, className)}>
      <Typography
        typographyType={TypographyType.TITLE}
        className={styles.theme__title}
      >
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
