import cn from "classnames";
import React from "react";
import {
  TYPOGRAPHY_DEFAULT_TAG,
  TypographyColor,
  TypographyType
} from "./Typography.const";
import styles from "./Typography.module.css";
import { TypographyProps } from "./Typography.types";

class BaseTypography extends React.PureComponent<TypographyProps> {
  public static defaultProps = {
    component: TYPOGRAPHY_DEFAULT_TAG
  };

  public render() {
    const {
      component,
      className,
      children,
      typographyColor,
      typographyType,
      forwardedRef,
      disabled,
      ...rest
    } = this.props;
    const Component = component || TYPOGRAPHY_DEFAULT_TAG;

    return (
      <Component
        {...rest}
        disabled={disabled}
        ref={forwardedRef}
        className={cn(
          styles.typography,
          this.typeClass,
          this.colorClass,
          { [styles.typography_disabled]: disabled },
          className
        )}
      >
        {children}
      </Component>
    );
  }

  private get typeClass() {
    const { typographyType } = this.props;
    switch (typographyType) {
      case TypographyType.H6:
        return styles.typography_type_h6;
      case TypographyType.TITLE:
        return styles.typography_type_title;
      case TypographyType.SUBTITLE:
        return styles.typography_type_subtitle;
      case TypographyType.BUTTON:
        return styles.typography_type_button;
      case TypographyType.CAPTION:
        return styles.typography_type_caption;
      case TypographyType.BODY:
        return styles.typography_type_body;
      case TypographyType.LABEL:
        return styles.typography_type_label;
      default:
        return null;
    }
  }

  private get colorClass() {
    const { typographyColor } = this.props;
    switch (typographyColor) {
      case TypographyColor.PRIMARY:
        return styles.typography_color_primary;
      case TypographyColor.SECONDARY:
        return styles.typography_color_secondary;
      case TypographyColor.WHITE:
        return styles.typography_color_white;
      case TypographyColor.ERROR:
        return styles.typography_color_error;
      default:
        return null;
    }
  }
}

export default React.forwardRef(
  (props: TypographyProps, ref: React.Ref<HTMLElement>) => {
    return <BaseTypography {...props} forwardedRef={ref} />;
  }
);
