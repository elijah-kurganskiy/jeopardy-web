import React from "react";

export interface TypographyProps
  extends Omit<React.AllHTMLAttributes<HTMLSpanElement>, "color" | "type"> {
  component?: React.ElementType<any>;
  children?: React.ReactNode;
  className?: string;
  type?: "h6" | "title" | "subtitle" | "button" | "caption";
  color?: "primary" | "secondary" | "white" | "error" | "inherit";
  forwardedRef?: React.Ref<HTMLElement>;
}
