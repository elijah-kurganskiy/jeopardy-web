import React from "react";
import { ButtonColor, ButtonSize, ButtonType } from "./Button.const";

export interface Props extends ButtonProps {
  className?: string;
  forwardedRef?: React.Ref<HTMLButtonElement>;
  startIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  endIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  buttonType?: ButtonType;
  buttonColor?: ButtonColor;
  size?: ButtonSize;
}

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
