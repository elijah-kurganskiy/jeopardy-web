import cn from "classnames";
import Typography, { TypographyType } from "components/Typography";
import React from "react";
import styles from "./UserItem.module.css";

interface Props {
  name: string;
  className?: string;
}

function UserItem({ name, className }: Props) {
  return (
    <div className={cn(className, styles.room)}>
      <Typography typographyType={TypographyType.TITLE}>{name}</Typography>
    </div>
  );
}

export default React.memo(UserItem);
