import { useMutation } from "@apollo/react-hooks";
import cn from "classnames";
import Paper from "components/Paper";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import { ROUTE_LOBBY } from "const/routes";
import { FORM_ERROR } from "final-form";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import LoginForm, { FormValues } from "./components/LoginForm";
import { LOGIN_MUTATION } from "./Login.graphql";
import styles from "./Login.module.css";

export default function Login() {
  const history = useHistory();
  const [login] = useMutation(LOGIN_MUTATION, {
    ignoreResults: true,
  });
  const onSubmit = useCallback(
    async (values: FormValues) => {
      try {
        let { data, errors } = await login({
          variables: { login: values.username, password: values.password },
          update: (cache) => {
            cache.writeData({
              data: {
                isLoggedIn: true,
              },
            });
          },
        });
        console.log({ data, errors });
        history.push(ROUTE_LOBBY);
      } catch (e) {
        console.log(e.message);
        return {
          [FORM_ERROR]: e.message,
        };
      }
    },
    [login, history]
  );
  return (
    <div className={styles.container}>
      <Paper className={cn(styles.paper)}>
        <Typography
          typographyType={TypographyType.H6}
          typographyColor={TypographyColor.PRIMARY}
          className={styles.form__title}
        >
          LOG IN
        </Typography>
        <LoginForm onSubmit={onSubmit} />
      </Paper>
    </div>
  );
}
