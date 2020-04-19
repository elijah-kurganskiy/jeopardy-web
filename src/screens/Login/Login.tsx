import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import cn from "classnames";
import Paper from "components/Paper";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import { useHistory } from "react-router-dom";
import { FORM_ERROR } from "final-form";
import React, { useCallback } from "react";
import { ROUTE_LOBBY } from "../../const/routes";
import LoginForm from "./components/LoginForm";
import { FormValues } from "./components/LoginForm/LoginForm";
import styles from "./Login.module.css";
const LOGIN_MUTATION = gql`
  mutation Login($login: String!, $password: String!) {
    login(data: { username: $login, password: $password }) {
      accessToken
    }
  }
`;
export default function Login() {
  const history = useHistory();
  const [login] = useMutation(LOGIN_MUTATION);
  const onSubmit = useCallback(
    async (values: FormValues) => {
      try {
        await login({
          variables: { login: values.username, password: values.password },
        });
        history.push(ROUTE_LOBBY);
      } catch (e) {
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
