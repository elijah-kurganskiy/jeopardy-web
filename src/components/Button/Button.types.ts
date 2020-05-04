import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export interface Props extends ButtonProps {
  className?: string;
  forwardedRef?: React.Ref<HTMLButtonElement>;
  startIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  endIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  buttonType?: "filled" | "outlined" | "flat";
  buttonColor?: "accent" | "faint" | "none";
}
