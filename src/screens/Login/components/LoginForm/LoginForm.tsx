import Button, { ButtonColor, ButtonType } from "components/Button";
import Input from "components/Input";
import Typography from "components/Typography";
import React from "react";
import { useField, useForm } from "react-final-form-hooks";
import styles from "./LoginForm.module.css";

export type FormValues = {
  username: string;
  password: string;
};

export default function LoginForm(props: {
  onSubmit: (values: FormValues) => void;
}) {
  const { form, handleSubmit, submitting, submitError } = useForm({
    onSubmit: props.onSubmit,
    subscription: { submitting: true, submitError: true },
  });
  const username = useField("username", form, undefined, {
    value: true,
  });
  const password = useField("password", form, undefined, {
    value: true,
  });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Typography
        type="subtitle"
        color="secondary"
        className={styles.form__label}
        component="label"
        htmlFor="email"
      >
        Username
      </Typography>
      <Input {...username.input} hasError={!!submitError} type="text" />

      <Typography
        type="subtitle"
        color="secondary"
        className={styles.form__label}
        component="label"
        htmlFor="password"
      >
        Password
      </Typography>

      <Input
        {...password.input}
        hasError={!!submitError}
        helperText={submitError}
        type="password"
      />

      <Button
        type="submit"
        className={styles.form__button}
        data-testid="login"
        disabled={submitting}
        buttonType={ButtonType.FILLED}
        buttonColor={ButtonColor.PRIMARY}
      >
        Log In
      </Button>
    </form>
  );
}
