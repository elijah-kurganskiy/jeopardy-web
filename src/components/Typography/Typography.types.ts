import React from "react";
import { TypographyColor, TypographyType } from "./Typography.const";

export interface TypographyProps
  extends React.AllHTMLAttributes<HTMLSpanElement> {
  component?: React.ElementType<any>;
  children?: React.ReactNode;
  className?: string;
  typographyType?: TypographyType;
  typographyColor?: TypographyColor;
  forwardedRef?: React.Ref<HTMLElement>;
}
