import type { ReactNode, ChangeEvent } from "react";
import type { TextFieldProps } from "@mui/material/TextField";

export interface InputProps
  extends Omit<TextFieldProps, "value" | "onChange"> {
  label?: string;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
  isUnBorder?: boolean;
}
