import { useQuery } from "@apollo/react-hooks";
import cn from "classnames";
import React, { useCallback } from "react";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import { QUERY_QUIZZES } from "./QuizList.graphql";
import styles from "./QuizList.module.css";
import { QuizzesQuery } from "./QuizList.types";

interface QuizItemProps {
  name: string;
  id: number;
  selected: boolean;
  onClick: (id: number) => void;
  className?: string;
}

const QuizItem = React.memo(
  ({ name, id, className, onClick, selected }: QuizItemProps) => {
    const onClickItem = useCallback(() => onClick(id), [onClick, id]);
    return (
      <div
        className={cn(className, styles.quiz__item, {
          [styles.quiz__item_selected]: selected,
        })}
        onClick={onClickItem}
      >
        <Typography
          typographyType={TypographyType.TITLE}
          typographyColor={TypographyColor.PRIMARY}
        >
          {name}
        </Typography>
      </div>
    );
  }
);

interface Props {
  selectedId: number | null;
  onSelectId: (id: number) => void;
}

function QuizList({ selectedId, onSelectId }: Props) {
  const { data, loading } = useQuery<QuizzesQuery>(QUERY_QUIZZES);
  if (loading) {
    return <div>"Loading..."</div>;
  }
  const { quizzes } = data!;
  return (
    <div>
      {quizzes.map((quiz) => (
        <QuizItem
          className={styles.quizzes__item}
          name={quiz.name}
          id={quiz.id}
          selected={quiz.id === selectedId}
          key={quiz.id}
          onClick={onSelectId}
        />
      ))}
    </div>
  );
}

export default QuizList;
