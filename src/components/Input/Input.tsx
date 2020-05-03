import classNames from "classnames";
import Typography from "components/Typography";
import React, { PureComponent, ReactNode } from "react";
import styles from "./Input.module.css";
import { Icon, InputProps } from "./Input.types";

class Input extends PureComponent<InputProps> {
  public render() {
    const {
      forwardRef,
      startIcon,
      endIcon,
      helperText,
      className,
      hasError,
      hideHelperText,
      onClick,
      inputClassName,
      inputContainerClassName,
      disabled,
      inputRef,
      ...rest
    } = this.props;
    return (
      <div ref={forwardRef} className={classNames(styles.container, className)}>
        <div
          className={classNames(
            styles.inputContainer,
            styles.inputContainer_color_primary,
            inputContainerClassName,
            {
              [styles.inputContainer_error]: hasError,
              [styles.inputContainer_disabled]: disabled,
            }
          )}
          onClick={!disabled ? onClick : undefined}
        >
          {this.renderIcon(startIcon)}

          <input
            ref={inputRef}
            className={classNames(styles.input, inputClassName)}
            disabled={disabled}
            {...rest}
          />
          {this.renderIcon(endIcon)}
        </div>
        {this.renderHelperText()}
      </div>
    );
  }

  private renderIcon(icon?: Icon, ...arrayOfClassNames: string[]) {
    if (!icon) {
      return;
    }
    if (typeof icon === "function") {
      return this.renderIconWrapper(icon({}), ...arrayOfClassNames);
    } else {
      return this.renderIconWrapper(
        React.createElement<{}>(icon, null),
        ...arrayOfClassNames
      );
    }
  }

  private renderHelperText = () => {
    const { hideHelperText, hasError, helperText } = this.props;
    if (hideHelperText) {
      return null;
    }
    return (
      <Typography
        color={hasError ? "error" : "primary"}
        type="subtitle"
        className={styles.inputContainer__helperText}
      >
        {helperText}
      </Typography>
    );
  };

  private renderIconWrapper(icon: ReactNode, ...arrayOfClassNames: string[]) {
    return (
      <div
        className={classNames(
          styles.input__iconWrapper,
          ...arrayOfClassNames,
          this.props.disabled ? styles.input__iconWrapper_translucent : ""
        )}
      >
        {icon}
      </div>
    );
  }
}

export default Input;
