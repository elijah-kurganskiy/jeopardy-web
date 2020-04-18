import Paper from "components/Paper";
import React from "react";
import Button, { ButtonColor, ButtonSize, ButtonType } from "components/Button";
import Typography, {
  TypographyColor,
  TypographyType,
} from "components/Typography";
import cn from "classnames";
import Input from "../../components/Input";
import styles from "./Login.module.css";

export class Login extends React.Component {
  public render() {
    return (
      <div className={styles.container}>
        <Paper className={cn(styles.paper, styles.form)}>
          <Typography
            typographyType={TypographyType.H6}
            typographyColor={TypographyColor.PRIMARY}
            className={styles.form__title}
          >
            LOG IN
          </Typography>
          <Typography
            typographyType={TypographyType.SUBTITLE}
            typographyColor={TypographyColor.SECONDARY}
            className={styles.form__label}
            component="label"
            htmlFor="email"
          >
            Username
          </Typography>
          <Input type="text" />

          <Typography
            typographyType={TypographyType.SUBTITLE}
            typographyColor={TypographyColor.SECONDARY}
            className={styles.form__label}
            component="label"
            htmlFor="password"
          >
            Password
          </Typography>

          <Input type="password" />

          <Button
            type="submit"
            className={styles.form__button}
            data-testid="login"
            size={ButtonSize.LARGE}
            buttonType={ButtonType.FILLED}
            buttonColor={ButtonColor.PRIMARY}
          >
            Log In
          </Button>
        </Paper>
      </div>
    );
  }
}

export default Login;
