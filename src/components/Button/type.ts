import type { ReactNode } from "react";
import type { ButtonProps } from "@mui/material";

export interface BaseButtonProps extends Omit<ButtonProps, "startIcon" | "endIcon"> {
  value: string;
  variant?: "text" | "contained" | "outlined";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"; 
}
