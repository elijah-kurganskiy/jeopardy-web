import classNames from "classnames";
import Typography from "components/Typography";
import React from "react";
import { ButtonColor, ButtonType } from "./Button.const";
import styles from "./Button.module.css";
import { Props } from "./Button.types";

export class BaseButton extends React.PureComponent<Props> {
  public static defaultProps = {
    buttonType: ButtonType.FILLED,
    buttonColor: ButtonColor.ACCENT,
  };

  private get colorClass() {
    const { buttonColor } = this.props;
    switch (buttonColor) {
      case ButtonColor.ACCENT:
        return styles.button_color_accent;
      case ButtonColor.FAINT:
        return styles.button_color_faint;
      case ButtonColor.NONE:
      default:
        return null;
    }
  }

  private get typeClass() {
    const { buttonType } = this.props;
    switch (buttonType) {
      case ButtonType.FILLED:
        return styles.button_type_filled;
      case ButtonType.OUTLINED:
        return styles.button_type_outline;
      case ButtonType.FLAT:
        return styles.button_type_flat;
      default:
        return null;
    }
  }

  private renderStartIcon() {
    if (this.props.startIcon) {
      const Icon = this.props.startIcon;
      return <Icon />;
    }
    return null;
  }

  private renderEndIcon() {
    if (this.props.endIcon) {
      const Icon = this.props.endIcon;
      return <Icon />;
    }
    return null;
  }

  public render() {
    const {
      children,
      className,
      startIcon,
      buttonColor,
      buttonType,
      forwardedRef,
      ...rest
    } = this.props;
    return (
      <button
        ref={forwardedRef}
        className={classNames(
          styles.button,
          this.typeClass,
          this.colorClass,
          className
        )}
        {...rest}
      >
        {this.renderStartIcon()}
        {children && (
          <Typography
            className={styles.button__text}
            type="button"
            component="span"
            color="inherit"
          >
            {children}
          </Typography>
        )}
        {this.renderEndIcon()}
      </button>
    );
  }
}

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLButtonElement>) => {
    return <BaseButton {...props} forwardedRef={ref} />;
  }
);
