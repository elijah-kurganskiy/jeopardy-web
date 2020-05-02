import React from "react";
import { QuestionType } from "types";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import cn from "classnames";
import styles from "./Question.module.css";

interface QuestionProps {
  question: QuestionType;
  className?: string;
}

const Question = React.memo(
  ({ question: { price }, className }: QuestionProps) => {
    return (
      <div className={cn(className, styles.question)}>
        <Typography
            className={styles.question__price}
          typographyType={TypographyType.SUBTITLE}
          typographyColor={TypographyColor.SECONDARY}
        >
          {price}
        </Typography>
      </div>
    );
  }
);

export default Question;
