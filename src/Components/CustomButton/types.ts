import { PropsWithClassName } from "../../Types";
import { PropsWithChildren } from "react";

export interface CustomButtonProps
  extends PropsWithClassName,
    PropsWithChildren {
  type: "submit" | "button";
  onClick?: (arg?: any) => void;
  disabled?: boolean;
}
