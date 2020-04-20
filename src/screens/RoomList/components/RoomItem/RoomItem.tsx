import React, { useCallback } from "react";
import Typography, { TypographyType } from "components/Typography";
import styles from "./RoomItem.module.css";
import cn from "classnames";
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
    </div>
  );
}

export default React.memo(RoomItem);
