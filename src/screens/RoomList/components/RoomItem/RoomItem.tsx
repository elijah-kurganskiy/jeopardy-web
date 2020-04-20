import React, { useCallback } from "react";
import Typography, { TypographyType } from "components/Typography";
import styles from "./RoomItem.module.css";

interface Props {
  id: number;
  name: string;
  onClick: (id: number) => void;
}

export default function RoomItem({ name, onClick, id }: Props) {
  const onClickCallback = useCallback(() => onClick(id), [id, onClick]);
  return (
    <div onClick={onClickCallback} className={styles.room}>
      <Typography typographyType={TypographyType.TITLE}>{name}</Typography>
    </div>
  );
}
