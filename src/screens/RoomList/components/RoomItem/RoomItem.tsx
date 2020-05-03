import cn from "classnames";
import Typography from "components/Typography";
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
      <Typography type="title">{name}</Typography>
      <Typography
        className={styles.room_actionLabel}
        type="subtitle"
        color="secondary"
      >
        JOIN
      </Typography>
    </div>
  );
}

export default React.memo(RoomItem);
