import React from "react";
import Modal from "components/Modal";
import Paper from "components/Paper";
import styles from "./Dialog.module.css";
import cn from "classnames";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Dialog = ({ children, className }: Props) => {
  return (
    <Modal className={styles.modal} isOpen={true}>
      <Paper className={cn(className, styles.dialog)}>{children}</Paper>
    </Modal>
  );
};

export default React.memo(Dialog);
