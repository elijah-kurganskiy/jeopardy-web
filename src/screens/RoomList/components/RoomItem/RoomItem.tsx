import cn from "classnames";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import React, { useCallback } from "react";
import styles from "./RoomItem.module.css";

interface Props {
  id: number;
  name: string;
  className?: string;
  onClick: (id: number) => void;
}

function RoomItem({ name, onClick, id, className }: Props) {
  const onClickCallback = useCallback(() => onClick(id), [id, onClick]);
  return (
    <div onClick={onClickCallback} className={cn(className, styles.room)}>
      <Typography typographyType={TypographyType.TITLE}>{name}</Typography>
      <Typography
        className={styles.room_actionLabel}
        typographyType={TypographyType.SUBTITLE}
        typographyColor={TypographyColor.SECONDARY}
      >
        JOIN
      </Typography>
    </div>
  );
}

export default React.memo(RoomItem);
