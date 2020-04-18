import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?:
    | (() => React.ReactNode)
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  endIcon?:
    | (() => React.ReactNode)
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  hasError?: boolean;
  helperText?: string;
  hideHelperText?: boolean;
  inputClassName?: string;
  inputContainerClassName?: string;
  forwardRef?: React.RefObject<any>;
  inputRef?: React.Ref<HTMLInputElement>;
}

export type Icon =
  | (() => React.ReactNode)
  | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
