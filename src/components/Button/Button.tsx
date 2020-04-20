import classNames from "classnames";
import Typography, { TypographyType } from "components/Typography";
import React from "react";
import { ButtonColor, ButtonSize, ButtonType } from "./Button.const";
import styles from "./Button.module.css";
import { Props } from "./Button.types";

export class BaseButton extends React.PureComponent<Props> {
  public static defaultProps = {
    buttonType: ButtonType.FILLED,
    buttonColor: ButtonColor.PRIMARY,
    size: ButtonSize.DEFAULT,
  };

  get colorClass() {
    const { buttonColor } = this.props;
    switch (buttonColor) {
      case ButtonColor.PRIMARY:
        return styles.button_color_primary;
      case ButtonColor.SECONDARY:
        return styles.button_color_secondary;
      case ButtonColor.NONE:
      default:
        return null;
    }
  }

  get sizeClass() {
    const { size } = this.props;
    if (size === ButtonSize.LARGE) {
      return styles.button_size_large;
    }
    return null;
  }

  get typeClass() {
    const { buttonType } = this.props;
    switch (buttonType) {
      case ButtonType.FILLED:
        return styles.button_type_filled;
      case ButtonType.OUTLINED:
        return styles.button_type_outline;
      case ButtonType.INVERT:
        return styles.button_type_invert;
      case ButtonType.FLAT:
        return styles.button_type_flat;
      default:
        return null;
    }
  }

  public renderStartIcon() {
    if (this.props.startIcon) {
      const Icon = this.props.startIcon;
      return <Icon />;
    }
    return null;
  }

  public renderEndIcon() {
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
          this.sizeClass,
          className
        )}
        {...rest}
      >
        {this.renderStartIcon()}
        {children && (
          <Typography typographyType={TypographyType.BUTTON} component="span">
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
