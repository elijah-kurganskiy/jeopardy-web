import { ReactComponent as CloseIcon } from "assets/icons/ic-24-cross.svg";
import Button, { ButtonColor, ButtonType } from "components/Button";
import Input from "components/Input";
import Modal from "components/Modal";
import Typography from "components/Typography";
import React from "react";
import { useField, useForm } from "react-final-form-hooks";
import styles from "./AddRoomDialog.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (payload: { name: string }) => void;
}

function AddRoomDialog({ isOpen, onClose, onSave }: Props) {
  const { form, handleSubmit, submitting } = useForm({
    onSubmit: onSave,
    destroyOnUnregister: true,
    subscription: { submitting: true, submitError: true },
  });
  const roomName = useField("name", form, undefined, {
    value: true,
  });

  return (
    <Modal className={styles.modal} isOpen={isOpen}>
      <div className={styles.dialog}>
        <div className={styles.dialog__toolbar}>
          <Typography className={styles.dialog__title} type="h6">
            ADD ROOM
          </Typography>
          <Button
            onClick={onClose}
            className={styles.dialog__toolbar__close}
            startIcon={CloseIcon}
            buttonType={ButtonType.FLAT}
            buttonColor={ButtonColor.FAINT}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.form__field}>
            <Typography type="subtitle" color="secondary">
              Name
            </Typography>
            <Input {...roomName.input} className={styles.form__field__input} />
          </div>
          <div className={styles.form__buttons}>
            <Button
              type="submit"
              disabled={submitting}
              className={styles.form__buttons__button}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default React.memo(AddRoomDialog);
